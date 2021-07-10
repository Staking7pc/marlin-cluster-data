import React from "react";
import { Line } from "react-chartjs-2";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ButtonGroup } from "react-bootstrap";
import moment from "moment";
import "./APRGraph.css";

function Graph() {
  const [items, setitems] = useState([]);
  const [weekData, setweekData] = useState([]);
  const [dayData, setDayData] = useState([]);
  const [monthData, setMonthData] = useState([]);
  
  //const [tablemindata, settablemindata] = useState([]);
  const [showDay, setShowDay] = useState(true);
  const [latency, setLatency] = useState(true);
  const [tickets, setTickets] = useState(true);
  const [ticketColor, setTicketColor] = useState([]);
  const [latencyColor, setLatencyColor] = useState([]);

  const url = useParams();

  // const setIntervals = (e)=>{
  //   console.log(e)
  //             setTime1()
  // }
  useEffect(() => {
    const chart = () => {
      axios
        .get("https://brightlystake.com/api/marlin/5minStats/" + url.clusterId + "?count=2016")
        .then((res) => {
          setitems(res.data.data);

          // Get the latest row of data
          let latestObj =
            res.data.data.length !== 0
              ? res.data.data.reduce((a, b) => (a.time > b.time ? a : b))
              : null;
          //console.log(latestObj.time)

          var time24hrs = moment.duration("24:00:00");
          var time7days = moment.duration("168:00:00");
          var time30days = moment.duration("720:00:00");

          var date = moment(latestObj.time);
          var cutOffTime24Hrs = date
            .subtract(time24hrs)
            .format("YYYY-MM-DD HH:MM:SS");
          var cutOffTime7Days = date
            .subtract(time7days)
            .format("YYYY-MM-DD HH:MM:SS");
          var cutOffTime30Days = date
            .subtract(time30days)
            .format("YYYY-MM-DD HH:MM:SS");            
          //console.log(cutOffTime24Hrs + cutOffTime7Days)

          let dayData = res.data.data.filter((f) => f.time > cutOffTime24Hrs);
          //console.log(dayData)

          let weekData = res.data.data.filter((f) => f.time > cutOffTime7Days);
          //console.log(weekData)

          let monthData = res.data.data.filter((f) => f.time > cutOffTime30Days);

          setweekData(weekData);
          setDayData(dayData);
          setMonthData(monthData);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    chart();
  }, []);

  useEffect(() => {
    var ctx = document.getElementById("chart")?.getContext("2d");

    /*** Gradient ***/
    var gradient = ctx?.createLinearGradient(0, 0, 0, 400);
    if (gradient) {
      gradient.addColorStop(0, "rgba(56, 64, 199, 0.6)");
      gradient.addColorStop(1, "rgba(56, 64, 199, 0)");
    }
    var gradient2 = ctx?.createLinearGradient(0, 0, 0, 400);
    if (gradient2) {
      gradient2.addColorStop(0, "rgba(54, 207, 217, 0.6)");
      gradient2.addColorStop(1, "rgba(67, 211, 220, 0)");
    }

    gradient && setTicketColor(gradient);
    gradient2 && setLatencyColor(gradient2);
  }, [dayData]);

  let PONDData = [];
  let dateData = [];
  let MPondData = [];

  if (showDay) {
    dayData.map((f) => {
      PONDData.push(f.POND);
      dateData.push(moment(f.time).format("MMM D  HH:mm"));
      MPondData.push(f.MPOND);
    });
    //console.log('Today Data')
  } else {
    weekData.map((f) => {
      PONDData.push(f.POND);
      dateData.push(moment(f.time).format("MMM D  HH:mm"));
      MPondData.push(f.MPOND);
    });
    //console.log('Weekly Data')
  }

  return (
    <>
      <div
        className="container cntt"
        style={{ maxWidth: "1600px", marginTop: "120px", padding: "0px" }}
      >
        <div className="crd">
          <div className="row padng">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <h3 className="head">
                {showDay ? "24 Hour " : "7 Days "}
                {tickets
                  ? latency
                    ? "POND and MPond Graph"
                    : "MPond Graph"
                  : latency
                  ? "POND Graph"
                  : "No Selection"}
              </h3>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 right">
              <h3 className="chart-heading-right" style={{ float: "right" }}>
                <div className="d-flex right">
                  <ButtonGroup className="btngroup">
                    <div
                      id="hight"
                      className={
                        showDay ? "chart-btn-activ" : "chart-btn-disabl"
                      }
                      onClick={() => setShowDay(true)}
                    >
                      <span className="hors"> 24HR </span>
                    </div>
                    <div
                      id="high"
                      className={
                        showDay ? "chart-btn-disabl" : "chart-btn-activ"
                      }
                      onClick={() => setShowDay(false)}
                    >
                      <span className="day">7D</span>
                    </div>
                  </ButtonGroup>
                </div>
              </h3>
            </div>
          </div>
          <div>
            {items.length !== 0 ? (
              <Line
                id="chart"
                height={300}
                width={1900}
                data={{
                  // labels: dateData ? dateData.reverse() : null,
                  labels: dateData.reverse(),
                  datasets: [
                    {
                      borderWidth: 2,
                      // yAxisID: 'A',
                      label: "POND APR",
                      fill: true,
                      borderColor: "#07AEC4",
                      // backgroundColor: "rgba(54,207,217,0.6)",
                      backgroundColor: latencyColor,
                      data: latency ? PONDData.reverse() : null,
                      pointRadius: 0.1,
                    },
                    {
                      //yAxisID: 'B',
                      borderWidth: 2,
                      label: "MPond APR",
                      fill: true,
                      borderColor: "#3840C7",
                      backgroundColor: ticketColor,
                      data: tickets ? MPondData.reverse() : null,
                      pointRadius: 0.1,
                    },
                  ],
                }}
                options={{
                  layout: {
                    padding: 30,
                  },
                  plugins: {
                    legend: {
                      display: false,
                    },
                  },
                  cornerRadius: 20,
                  responsive: true,
                  maintainAspectRatio: false,
                  scales: {
                    x: {
                      ticks: {
                        font: {
                          size: 11,
                        },
                      },
                      grid: {
                        lineWidth: 0,
                      },
                      barPercentage: 0.7,
                    },
                    y: {
                      ticks: {
                        font: {
                          size: 11,
                        },
                      },
                      type: "linear",
                      position: "right",
                      grid: {
                        display: false,
                      },
                    },
                  },
                  elements: {
                    point: {
                      radius: 0,
                    },
                  },
                }}
              />
            ) : (
              ""
            )}
          </div>

          <div className="d-flex row roww">
            <div className="ml-5 d-flex">
              <input
                type="checkbox"
                checked={latency}
                className="regular-checkbox big-checkbox ml-4"
                onClick={() => {
                  latency ? setLatency(false) : setLatency(true);
                }}
              />
              <span className="latency"> POND </span>
            </div>
            <div className="ml-4  d-flex">
              <input
                type="checkbox"
                className="regular-checkbo big-checkbox"
                checked={tickets}
                onClick={() => {
                  tickets ? setTickets(false) : setTickets(true);
                }}
              />
              <span className="latency">MPond</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Graph;
