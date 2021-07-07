import React from 'react'
import { Line } from "react-chartjs-2";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {ButtonGroup} from "react-bootstrap"
import moment from "moment";
import "./Graph.css"

function Graph()
{

    const [items, setitems] = useState([]);
    const [hourData, setHourData] = useState([]);
    const [dayData, setDayData] = useState([]);
    //const [tablemindata, settablemindata] = useState([]);
    const [showDay, setShowDay] = useState(true);
    const [latency,setLatency]  = useState(true);
    const [tickets,setTickets]  = useState(true);
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
              .get("https://brightlystake.com/api/marlin/5minStats/" + url.clusterId)
              .then((res) => {
                //console.log('5minsStats')
                //console.log(res.data.data);
                setitems(res.data.data);
      
                let latestObj =
                  res.data.data.length !== 0
                    ? res.data.data.reduce((a, b) => (a.time > b.time ? a : b))
                    : null;

 
                let dayData = res.data.data.filter(
                  (f) => f.time.substr(0, 10) === latestObj?.time.substr(0, 10)
                );
                
       
                let hourData = res.data.data.filter(
                  (f) => f.time.substr(11, 2) === latestObj?.time.substr(11, 2)
                );                 
                //let mindata = res.data.data.filter((item, idx) => idx < 5);
                //settablemindata(mindata);
                setHourData(hourData);
                setDayData(dayData);
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
    if(gradient){
      gradient.addColorStop(0, 'rgba(56, 64, 199, 0.6)');   
        gradient.addColorStop(1, 'rgba(56, 64, 199, 0)');
    }
        var gradient2 = ctx?.createLinearGradient(0, 0, 0, 400);
    if(gradient2){
      gradient2.addColorStop(0, 'rgba(54, 207, 217, 0.6)');   
        gradient2.addColorStop(1, 'rgba(67, 211, 220, 0)');
    }
        

        gradient&&setTicketColor(gradient)
        gradient2&&setLatencyColor(gradient2)
      }, [dayData]);


    let showLatency = [];
    let formatedDates = [];    
    let ticketsData = [];
    let viewMoreFormattedDates = [];
  
    if (showDay) {
      dayData.map((f) =>
        f.latencyScore
          ? (showLatency.push(f.latencyScore),
            formatedDates.push(moment(f.time).format("MMM D  HH:mm")))
          : null
          
      );
      // console.log(formatedDates,"7days")
    } else {
      hourData.map((f) =>
        f.latencyScore
          ? (showLatency.push(f.latencyScore),
            formatedDates.push(f.time.substr(11, 8)))
          : null
      );
      //console.log('A2'+showLatency)
      // console.log(formatedDates,"24hours")
    }
    items.map((f) =>
      f.tickets
        ? (showLatency.push(f.latencyScore),
          ticketsData.push(f.tickets),
          viewMoreFormattedDates.push(
            moment(f.time).format("MMM D HH:mm")
          ))
        : null
    );
  
    return(
        <>
        <div className="container cntt" style={{maxWidth:'1200px',marginTop:'182px',padding:'0px'}}>
         
            <div className="crd">
              <div className="row padng">
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                  
                  <h3 className="head">Latency Score Graph</h3>
                  <h3 className="over">Overview</h3>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 right">
                  <h3 className="chart-heading-right">
                     <div className="d-flex">
                     <ButtonGroup className="btngroup">

                    <div id="hight" 
                      className={
                        showDay ? "chart-btn-activ" : "chart-btn-disabl"
                      }
                      onClick={() => setShowDay(true)}
                    >
                     <span className="hors"> 24HR </span>
                    </div>
                    <div id="high"  
                      className= {
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
              {/* {console.log(formatedDates)} */}
                {items.length !== 0 ? (
                  <Line
                  id="chart"
                    height={300}
                    width={1990}
                    data={{
                      // labels: formatedDates ? formatedDates.reverse() : null,
                      labels: showDay ? formatedDates:viewMoreFormattedDates  ,
                      datasets: [
                        {
                          borderWidth: 2,
                         // yAxisID: 'A',
                          label: "LatencyScore",
                          fill: true,
                          borderColor: "#07AEC4",
                          // backgroundColor: "rgba(54,207,217,0.6)",
                          backgroundColor: latencyColor,
                          data: latency?showLatency.reverse():null,
                          pointRadius: 0,
                        },
                        {
                          //yAxisID: 'B',
                          borderWidth: 2,
                            label:"Tickets",
                            fill:true,
                            borderColor: "#3840C7",
                          backgroundColor: ticketColor,
                          data: tickets?ticketsData.reverse():null,
                          pointRadius: 0,
                        }
                      ],
                    }}
                    options={{
                      plugins:{
                        legend:{
                          display: false
                        },
                      },

                      cornerRadius: 20,
                      responsive: true,
                      maintainAspectRatio: false,
                      scales: {
                        
                        yAxes: {
                          
                          type: 'linear',
                          position: 'right',  
                          grid: {
                            display: false
                          },
                                         
                        }
                         ,
                        xAxes: 
                          {      
                            grid: {
                              lineWidth: 0
                          },                     
                            barPercentage: 0.7,    
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
                  <input type="checkbox" checked={latency} className="regular-checkbox big-checkbox ml-4" onClick={()=>{
                    latency? setLatency(false):setLatency(true)
                    
                  }}/>  
                <span className="latency">  Latency Score</span></div>
                  <div  className="ml-4  d-flex">
                  <input type="checkbox"  className="regular-checkbo big-checkbox" checked={tickets} onClick={()=>{
                    tickets? setTickets(false):setTickets(true)
                  }}/>  
                  <span className="latency">Tickets</span></div>
              </div>
            </div>
            </div>
        
        </>
    )
}
export default Graph;