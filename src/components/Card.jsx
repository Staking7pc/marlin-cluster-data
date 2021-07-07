import React from "react";
import {Row,Col} from "react-bootstrap";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ellipse from "../images/Group 2004.png"
import elipse from "../images/Group 2005.png"
import elpse from "../images/Group 2006.png"
import elpe from "../images/Group 2007.png"
import ese from "../images/Group 2008.png"
import epl from "../images/Group 2009.png"
import crclr from "../images/Rank.png"
import stat from "../images/Stat.png"
import "./card.css"
import "./Graph.css"


function Card()
{
    const [overallAverage, setOverallAverage] = useState([]);
    const [todaysAverage, setTodaysAverage] = useState([]);
    const url = useParams();
  
    
  useEffect(()=>{
    const getOverallStats = () => {

      
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

},[])

    return(
        <>
        
        <div className="container mnn">
            <Row className="cardsWrapper">
                <Col xl={4} lg={4} md={6} sm={12} xs={12}  className="caaar">
               
                <div className="card-2">
             
                  <div className="d-flex flex-row justify-content-between" style={{padding:"32px"}}>
                      <div>
                      <div className="card-name_one">Tickets Average</div>
                      <div className="card-number">
                      {overallAverage.TICKETS}
                      </div>
                      </div>
                      <div><img alt = '2' src={ellipse} className="ellipse"  />
                      </div>
                 
                     

                  </div>
<div className="d-flex flex-row" style={{padding:"32px"}}>
    <div>
    <img alt = '2' src={crclr} />

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

<div className='d-flex flex-row'  style={{padding:"32px"}}>
<div>
    <img alt = '2' src={stat} />
    </div>
    <div className="d-flex flex-column">
    <span className="card-datee">
                         
             {todaysAverage.TICKETS} -{" "}
                          {Math.ceil(todaysAverage.TICKETS_Rank)}
                        </span>


        <span className="Rank"> Todays Stats</span>
    </div>
</div>
                </div>
             

          
                </Col>


                <Col xl={4} lg={4} md={6}  sm={12} xs={12} className="caaar">
      
                <div className="card-2">
             

                  <div className="d-flex flex-row justify-content-between" style={{padding:"32px"}}>
                      <div >
                      <div className="card-name_one">POND APY</div>
                      <div className="card-number">
                      {overallAverage.POND_APY}%
                      </div>
                      </div>
                      <div><img alt = '2' src={elipse} className="ellipse"/>

                      </div>
                 


                  </div>
<div className="d-flex flex-row" style={{padding:"32px"}}>
    <div>
    <img alt = '2' src={crclr} />

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

<div className='d-flex flex-row'  style={{padding:"32px"}}>
<div>
    <img alt = '2' src={stat} />

    </div>
    <div className="d-flex flex-column">
    <span className="card-datee">
                         
    {todaysAverage.POND_APY}% -{" "}
                          {Math.ceil(todaysAverage.POND_Rank)}
                        </span>


        <span className="Rank">Todays Stats</span>
    </div>
</div>
                </div>
             

          
                </Col>
               
                <Col lg={4} md={6} sm={12} xs={12} className="caaar">
      
                <div className="card-2">
             

                  <div className="d-flex flex-row justify-content-between" style={{padding:"32px"}}>
                      <div >
                      <div className="card-name_one">MPOND APY</div>
                      <div className="card-number">
                      {overallAverage.MPOND_APY}%
                      </div>
                      </div>
                      <div><img alt = '2' src={elpse} className="ellipse"/>

                      </div>
                 


                  </div>
<div className="d-flex flex-row" style={{padding:"32px"}}>
    <div>
    <img alt = '2' src={crclr} />

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

<div className='d-flex flex-row'  style={{padding:"32px"}}>
<div>
    <img alt = '2' src={stat} />

    </div>
    <div className="d-flex flex-column">
    <span className="card-datee">
                         
    {todaysAverage.MPOND_APY}% -{" "}
                          {Math.ceil(todaysAverage.MPOND_Rank)}
                        </span>


        <span className="Rank">Todays Stats</span>
    </div>
</div>
                </div>
             

          
                </Col>

                <Col lg={4} md={6} sm={12} xs={12}  className="caaar">
              
                <div className="card-2">
             

                  <div className="d-flex flex-row justify-content-between" style={{padding:"32px"}}>
                      <div >
                      <div className="card-name_one">Latency Score Avg</div>
                      <div className="card-number">
                      {overallAverage.LATENCY_SCORE}
                      </div>
                      </div>
                      <div><img alt = '2' src={elpe} className="ellipse"/>

                      </div>
                 


                  </div>
<div className="d-flex flex-row" style={{padding:"32px"}}>
    <div>
    <img alt = '2' src={crclr} />

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

<div className='d-flex flex-row'  style={{padding:"32px"}}>
<div>
    <img alt = '2' src={stat} />

    </div>
    <div className="d-flex flex-column">
    <span className="card-datee">
                         
    {todaysAverage.LATENCY_SCORE} -{" "}
                          {Math.ceil(todaysAverage.LATENCY_SCORE_Rank)}
                        </span>


        <span className="Rank">Todays Stats</span>
    </div>
</div>
                </div>
             

          
                </Col>

                   <Col lg={4} md={6} sm={12} xs={12}  className="caaar">
                <div className="card-2">
             

                  <div className="d-flex flex-row justify-content-between" style={{padding:"32px"}}>
                      <div >
                      <div className="card-name_one">Fees</div>
                      <div className="card-number">
                      {overallAverage.fees}%
                      </div>
                      </div>
                      <div><img alt = '2' src={epl} className="ellipse" />

                      </div>
                 


                  </div>
<div className="d-flex flex-row" style={{padding:"32px"}}>
    <div>
    <img alt = '2' src={crclr} />

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
        <span className="Rank"> Stake 1 MPOND</span>
    </div>
</div>

<div className='d-flex flex-row'  style={{padding:"32px"}}>
<div>
    <img alt = '2' src={stat} />

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


        <span className="Rank"> Stake 1 MPOND</span>
    </div>
</div>
                </div>
             

          
                </Col>

                {/* <Col lg={4} md={6} sm={12} xs={12}  className="caaar">
               
               <div className="card-2">
            

                 <div className="d-flex flex-row justify-content-between" style={{padding:"32px"}}>
                     <div >
                     <div className="card-name_one">Tickets Average</div>
                     <div className="card-number">
                     {overallAverage.TICKETS}
                     </div>
                     </div>
                     <div><img alt = '2' src={ese} className="ellipse"/>

                     </div>
                


                 </div>
<div className="d-flex flex-row" style={{padding:"32px"}}>
   <div>
   <img alt = '2' src={crclr} />

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

<div className='d-flex flex-row'  style={{padding:"32px"}}>
<div>
   <img alt = '2' src={stat} />

   </div>
   <div className="d-flex flex-column">
   <span className="card-datee">
                        
            {todaysAverage.TICKETS} -{" "}
                         {Math.ceil(todaysAverage.TICKETS_Rank)}
                       </span>


       <span className="Rank">Todays Stats</span>
   </div>
</div>
               </div>
            

         
               </Col> */}
            </Row>
        </div>

        </>
    )
}

export default Card;