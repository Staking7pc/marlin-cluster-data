import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";
import groupp from "../images/eth-logo.svg"
import groupe from "../images/dot-logo.svg"
import groupc from "../images/atom-logo.svg"
import { Row,Col } from 'react-bootstrap'
import './Home'
import "./Avg.css"

function Avg ()
{
    const url = useParams(); 
    const [maxPONDToday, setmaxPONDToday] = useState([]);
    const [maxPOND7day, setmaxPOND7day] = useState([]);
    const [maxPOND30day, setmaxPOND30day] = useState([]);
    const [avgPONDToday, setavgPONDToday] = useState([]);
    const [avgPOND7day, setavgPOND7day] = useState([]);
    const [avgPOND30day, setavgPOND30day] = useState([]);
    
    const [maxMPONDToday, setmaxMPONDToday] = useState([]);
    const [maxMPOND7day, setmaxMPOND7day] = useState([]);
    const [maxMPOND30day, setmaxMPOND30day] = useState([]);
    const [avgMPONDToday, setavgMPONDToday] = useState([]);
    const [avgMPOND7day, setavgMPOND7day] = useState([]);
    const [avgMPOND30day, setavgMPOND30day] = useState([]);
    const [networkType, setNetwork] = useState([]);

    useEffect(()=>{
              axios
              .get(
                "https://brightlystake.com/api/marlin/getClusterAverage?cluster_id="+url.clusterId+"&category=POND"
              )              
              .then((res1) => {                   
                setmaxPONDToday((res1.data.data[0]['max(POND)']).toFixed(2));
                setavgPONDToday((res1.data.data[0]['avg(POND)']).toFixed(2));                
                setmaxPOND7day((res1.data.data[1]['max(POND)']).toFixed(2));
                setavgPOND7day((res1.data.data[1]['avg(POND)']).toFixed(2));
                setmaxPOND30day((res1.data.data[2]['max(POND)']).toFixed(2));
                setavgPOND30day((res1.data.data[2]['avg(POND)']).toFixed(2));
              })
              .catch((err) => {
                console.log(err);
              });   

              axios
              .get(
                "https://brightlystake.com/api/marlin/getClusterAverage?cluster_id="+url.clusterId+"&category=MPOND"
              )
              .then((res1) => {                      
                setmaxMPONDToday((res1.data.data[0]['max(MPOND)']).toFixed(2));
                setavgMPONDToday((res1.data.data[0]['avg(MPOND)']).toFixed(2));
                setmaxMPOND7day((res1.data.data[1]['max(MPOND)']).toFixed(2));
                setavgMPOND7day((res1.data.data[1]['avg(MPOND)']).toFixed(2));
                setmaxMPOND30day((res1.data.data[2]['max(MPOND)']).toFixed(2));
                setavgMPOND30day((res1.data.data[2]['avg(MPOND)']).toFixed(2));
              })
              .catch((err) => {
                console.log(err);
              });   

              axios
              .get(
                "https://sk.marlin.pro/getClusterInfo"
              )
              .then((res3) => {   
                //console.log(res3.data[url.clusterId].network)  
                if (res3.data[url.clusterId].network == undefined){
                    res3.data[url.clusterId].network = 'NA';                    
                }else{
                    setNetwork(res3.data[url.clusterId]); 
                }                              
              })
              .catch((err) => {
                console.log(err);
              });  


            },
            [])              
    
    return(
        <>
        <div className="container cnta" style={{maxWidth:'1200px',marginTop:'24px',padding:'0px'}}>
            <div className="mainn" >
                <Row>
                    <Col lg={4} md={4} sm={12} xs={12}>
                      <div className="d-flex justify-content-center" style={{marginTop:'32px'}}>

                        <div >
                        <img alt ='3' src={networkType.network=='ETHEREUM'?groupp:networkType.network=='COSMOS'?groupc:groupe} />
                      
                     
                        </div>
                       
                        </div>
                       
                        <div className="d-flex  justify-content-center ethe">Todays</div>
                        <div className="d-flex  justify-content-center Avgtitle">Token  •  High •  Avg</div>
                        <div className="d-flex  justify-content-center  hig">POND  •  {maxPONDToday}% •  {avgPONDToday}%</div>
                       <div className="d-flex  justify-content-center avgg">MPOND •  {maxMPONDToday}% •  {avgMPONDToday}%</div>
                    </Col>

                    <Col lg={4} md={4} sm={12} xs={12}>
                    <div className="middleBlock">
                    <div className="d-flex justify-content-center" style={{marginTop:'32px'}}>

                        <div >
                        <img alt='2' src={networkType.network=='ETHEREUM'?groupp:networkType.network=='COSMOS'?groupc:groupe} />
                        
                       </div>

                      </div>

                      <div className="d-flex  justify-content-center  ethe">7 days</div>
                       <div className="d-flex  justify-content-center Avgtitle">Token  •  High •  Avg</div>
                       <div className="d-flex  justify-content-center  hig">POND  •  {maxPOND7day}% •  {avgPOND7day}%</div>
                       <div className="d-flex  justify-content-center avgg">MPOND •  {maxMPOND7day}% •  {avgMPOND7day}%</div>
                       </div>
                    </Col>

                    <Col lg={4} md={4} sm={12} xs={12}>

                    <div className="d-flex justify-content-center" style={{marginTop:'32px'}}>

                         <div >
                         <img src={networkType.network=='ETHEREUM'?groupp:networkType.network=='COSMOS'?groupc:groupe} alt='1'/>
                        

                              </div>

                              </div>

                          <div className="d-flex  justify-content-center ethe">30 days</div>
                          <div className="d-flex  justify-content-center Avgtitle">Token  •  High •  Avg</div>
                          <div className="d-flex  justify-content-center  hig">POND  •  {maxPOND30day}% •  {avgPOND30day}%</div>
                          <div className="d-flex  justify-content-center avgg">MPOND •  {maxMPOND30day}% •  {avgMPOND30day}%</div>
                    </Col>
                </Row>
            </div>
        </div>
        </>
    )
}

export default Avg;