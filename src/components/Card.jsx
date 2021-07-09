import React from "react";
import { Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ellipse from "../images/Card1-logo.svg";
import elipse from "../images/Card2-logo.svg";
import elpse from "../images/Card3-logo.svg";
import elpe from "../images/Card4-logo.svg";
import ese from "../images/Card5-logo.svg";
import epl from "../images/Card6-logo.svg";
import crclr from "../images/Rank.svg";
import stat from "../images/Stats.svg";
import "./card.css";
import "./Graph.css";

function Card() {
  const [stakedAmount, setStakedAmount] = useState([]);
  const [overallAverage, setOverallAverage] = useState([]);
  const [todaysAverage, setTodaysAverage] = useState([]);
  const url = useParams();

  useEffect(() => {
    const getOverallStats = () => {
      axios
        .get(
          "https://brightlystake.com/api/marlin/getStakingDetails/" +
            url.clusterId
        )
        .then((res1) => {
          try {
            res1.data.data[0].MPOND == ""
              ? console.log("Present")
              : console.log("Present");
            setStakedAmount(res1.data.data[0]);
          } catch {
            res1.data.data[0].MPOND = 0;
          }
        })
        .catch((err) => {
          console.log(err);
        });

      axios
        .get(
          "https://brightlystake.com/api/marlin/overallStats/" + url.clusterId
        )
        .then((res1) => {
          // console.log('GetOverallStats')
          // console.log(res1.data.data[0]);
          setOverallAverage(res1.data.data[0]);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    const getTodaysStats = () => {
      axios
        .get(
          "https://brightlystake.com/api/marlin/todaysStats/" + url.clusterId
        )
        .then((res2) => {
          // console.log('GetTodaysStats')
          // console.log(res2.data.data[0]);
          setTodaysAverage(res2.data.data[0]);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getOverallStats();
    getTodaysStats();
  }, []);

  return (
    <>
      <div className="container mnn">
        <div className="cards-title">
          Stats Summary As of {stakedAmount.time} UTC
        </div>
        <Row className="cardsWrapper">
          <Col lg={4} md={6} sm={12} xs={12} className="caaar">
            <div className="card-2">
              <div
                className="d-flex flex-row justify-content-between"
                style={{ padding: "42px" }}
              >
                <div>
                  <div className="card-name_one">Total Staked (in POND)</div>
                  <div className="card-number">
                    {Math.ceil(
                      (stakedAmount.MPOND / 1000000000000000000) * 1000000 +
                        stakedAmount.POND / 1000000000000000000
                    )
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </div>
                </div>
                <div>
                  <img alt="2" src={ese} className="ellipse" />
                </div>
             
              </div>
              <div className="d-flex flex-row" style={{ padding: "42px" }}>
                <div>
                  <img alt="2" src={crclr} />
                </div>
                <div className="d-flex flex-column">
                  <span className="card-datee">
                    {Math.ceil(stakedAmount.POND / 1000000000000000000)
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </span>
                  <span className="Rank">POND</span>
                </div>
              </div>

              <div className="d-flex flex-row" style={{ padding: "42px" }}>
                <div>
                  <img alt="2" src={crclr} />
                </div>
                <div className="d-flex flex-column">
                  <span className="card-datee">
                    {(stakedAmount.MPOND / 1000000000000000000).toFixed(2)}
                  </span>

                  <span className="Rank">MPond (1 MPond = 1M POND)</span>
                </div>
              </div>
            </div>
          </Col>

          <Col xl={4} lg={4} md={6} sm={12} xs={12} className="caaar">
            <div className="card-2">
              <div
                className="d-flex flex-row justify-content-between"
                style={{ padding: "42px" }}
              >
                <div>
                  <div className="card-name_one">Average POND APR </div>
                  <div className="card-number">{overallAverage.POND_APY}%</div>
                </div>
                <div>
                  <img alt="2" src={elipse} className="ellipse" />
                </div>
              </div>
              <div className="d-flex flex-row" style={{ padding: "42px" }}>
                <div>
                  <img alt="2" src={crclr} />
                </div>
                <div className="d-flex flex-column">
                  <span className="card-datee">
                    {" "}
                    {Math.ceil(overallAverage.POND_Rank)} /{" "}
                    {overallAverage.POND_MAX}
                  </span>
                  <span className="Rank">Rank</span>
                </div>
              </div>

              <div className="d-flex flex-row" style={{ padding: "42px" }}>
                <div>
                  <img alt="2" src={stat} />
                </div>
                <div className="d-flex flex-column">
                  <span className="card-datee">
                    {todaysAverage.POND_APY}% -{" "}
                    {Math.ceil(todaysAverage.POND_Rank)}
                  </span>

                  <span className="Rank">Today's APR - Rank</span>
                </div>
              </div>
            </div>
          </Col>

          <Col lg={4} md={6} sm={12} xs={12} className="caaar">
            <div className="card-2">
              <div
                className="d-flex flex-row justify-content-between"
                style={{ padding: "42px" }}
              >
                <div>
                  <div className="card-name_one">Average MPond APR</div>
                  <div className="card-number">{overallAverage.MPOND_APY}%</div>
                </div>
                <div>
                  <img alt="2" src={elpse} className="ellipse" />
                </div>
              </div>
              <div className="d-flex flex-row" style={{ padding: "42px" }}>
                <div>
                  <img alt="2" src={crclr} />
                </div>
                <div className="d-flex flex-column">
                  <span className="card-datee">
                    {" "}
                    {Math.ceil(overallAverage.MPOND_Rank)} /{" "}
                    {overallAverage.MPOND_MAX}
                  </span>
                  <span className="Rank">Rank</span>
                </div>
              </div>

              <div className="d-flex flex-row" style={{ padding: "42px" }}>
                <div>
                  <img alt="2" src={stat} />
                </div>
                <div className="d-flex flex-column">
                  <span className="card-datee">
                    {todaysAverage.MPOND_APY}% -{" "}
                    {Math.ceil(todaysAverage.MPOND_Rank)}
                  </span>

                  <span className="Rank">Today's APR - Rank</span>
                </div>
              </div>
            </div>
          </Col>

          <Col xl={4} lg={4} md={6} sm={12} xs={12} className="caaar">
            <div className="card-2">
              <div
                className="d-flex flex-row justify-content-between"
                style={{ padding: "42px" }}
              >
                <div>
                  <div className="card-name_one">Tickets Average</div>
                  <div className="card-number">{overallAverage.TICKETS}</div>
                </div>
                <div>
                  <img alt="2" src={ellipse} className="ellipse" />
                </div>
              </div>
              <div className="d-flex flex-row" style={{ padding: "42px" }}>
                <div>
                  <img alt="2" src={crclr} />
                </div>
                <div className="d-flex flex-column">
                  <span className="card-datee">
                    {" "}
                    {Math.ceil(overallAverage.TICKETS_Rank)} /{" "}
                    {overallAverage.TICKETS_MAX}
                  </span>
                  <span className="Rank">Rank</span>
                </div>
              </div>

              <div className="d-flex flex-row" style={{ padding: "42px" }}>
                <div>
                  <img alt="2" src={stat} />
                </div>
                <div className="d-flex flex-column">
                  <span className="card-datee">
                    {todaysAverage.TICKETS} -{" "}
                    {Math.ceil(todaysAverage.TICKETS_Rank)}
                  </span>

                  <span className="Rank"> Today's tickets avg - Rank</span>
                </div>
              </div>
            </div>
          </Col>

          <Col lg={4} md={6} sm={12} xs={12} className="caaar">
            <div className="card-2">
              <div
                className="d-flex flex-row justify-content-between"
                style={{ padding: "42px" }}
              >
                <div>
                  <div className="card-name_one">Latency Score Avg</div>
                  <div className="card-number">
                    {overallAverage.LATENCY_SCORE}
                  </div>
                </div>
                <div>
                  <img alt="2" src={elpe} className="ellipse" />
                </div>
              </div>
              <div className="d-flex flex-row" style={{ padding: "42px" }}>
                <div>
                  <img alt="2" src={crclr} />
                </div>
                <div className="d-flex flex-column">
                  <span className="card-datee">
                    {" "}
                    {Math.ceil(overallAverage.LATENCY_SCORE_Rank)} /{" "}
                    {overallAverage.LATENCY_SCORE_MAX}
                  </span>
                  <span className="Rank">Rank</span>
                </div>
              </div>

              <div className="d-flex flex-row" style={{ padding: "42px" }}>
                <div>
                  <img alt="2" src={stat} />
                </div>
                <div className="d-flex flex-column">
                  <span className="card-datee">
                    {todaysAverage.LATENCY_SCORE} -{" "}
                    {Math.ceil(todaysAverage.LATENCY_SCORE_Rank)}
                  </span>

                  <span className="Rank">Today's latency avg - Rank</span>
                </div>
              </div>
            </div>
          </Col>

          <Col lg={4} md={6} sm={12} xs={12} className="caaar">
            <div className="card-2">
              <div
                className="d-flex flex-row justify-content-between"
                style={{ padding: "42px" }}
              >
                <div>
                  <div className="card-name_one">Fees</div>
                  <div className="card-number">{overallAverage.fees}%</div>
                </div>
                <div>
                  <img alt="2" src={epl} className="ellipse" />
                </div>
              </div>
              <div className="d-flex flex-row" style={{ padding: "42px" }}>
                <div>
                  <img alt="2" src={crclr} />
                </div>
                <div className="d-flex flex-column">
                  <span className="card-datee">
                    {" "}
                    {Math.ceil(
                      (overallAverage.POND_APY / 100) *
                        (1000000 / 365) *
                        ((100 - overallAverage.fees) / 100)
                    )}{" "}
                    POND/day
                  </span>
                  <span className="Rank"> Stake 1,000,000 POND</span>
                </div>
              </div>

              <div className="d-flex flex-row" style={{ padding: "42px" }}>
                <div>
                  <img alt="2" src={stat} />
                </div>
                <div className="d-flex flex-column">
                  <span className="card-datee">
                    {Math.ceil(
                      (overallAverage.MPOND_APY / 100) *
                        (1000000 / 365) *
                        ((100 - overallAverage.fees) / 100)
                    )}{" "}
                    POND/day
                  </span>

                  <span className="Rank"> Stake 1 MPond</span>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Card;
