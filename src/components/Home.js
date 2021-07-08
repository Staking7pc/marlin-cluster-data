import React, { useState, useEffect } from 'react';
import Card from './Card';
import Graph from './Graph';
import Avg from './Avg';
import Table from './Table';
import "./Home.css"
import { useParams } from "react-router-dom";
import axios from "axios";
import Copy from '../images/copy.png'


const Home = () => {
    
    const url = useParams();    
    const [stakedAmount, setStakedAmount] = useState([]);
    const [verifiedCluster, setVerifiedCluster] = useState([]);
    const [networkData, setNetwork] = useState([]);
    useEffect(()=>{
              axios
              .get(
                "https://brightlystake.com/api/marlin/getStakingDetails/" + url.clusterId
              )
              .then((res1) => {   
                try {
                  res1.data.data[0].MPOND==''?console.log('Present'):console.log('Present')
                  setStakedAmount(res1.data.data[0]);
                } catch{
                  res1.data.data[0].MPOND = 0
                }
                
              })
              .catch((err) => {
                console.log(err);
              });         
              
              axios
              .get(
                "https://sk.marlin.pro/getVerifiedOperators"
              )
              .then((res2) => {   
                console.log(res2.data[url.clusterId])             
                setVerifiedCluster(res2.data);                                
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
    
    return (
    <>
    <div className="container cnta" style={{maxWidth:'1200px',padding:'0px'}} >

    <div className="d-flex flex-column "  style={{marginTop:'120px',padding:'0px'}}>
        <span className="Audit">{verifiedCluster[url.clusterId] == undefined ? ''+url.clusterId : verifiedCluster[url.clusterId]}</span>
        <span className="sample">{url.clusterId} 
          <img alt ='some' className="copyImage" onClick={() => {navigator.clipboard.writeText(url.clusterId)}} src={Copy}/>
        </span>        
        <span className="ethereum">{networkData.network} </span>
        {/* <span className="ethereum">Staked •  {(stakedAmount.MPOND/1000000000000000000).toFixed(4)} MPOND • {Math.ceil(stakedAmount.POND/1000000000000000000)} POND</span> */}
        <span className='lastUpadated'>As of {stakedAmount.time} UTC</span>
    </div>
    </div>
    <Card/>
    <Graph/>
    <Avg/>
    <Table/>
    <p style={{textAlign:"center"}}>Created by 
    <a href='https://Brightlystake.com'> Brightlystake.com</a></p>
    <p style={{textAlign:"center"}}>The data is refreshed every 5 minutes</p>
    <p style={{textAlign:"center"}}>If you find any issues drop in a mail to Staking7pc@gmail.com</p>
    <p style={{textAlign:"center"}}>Disclaimer: There are few factors which will skew up the information provided like non-availability of data, skewed up data etc. </p>
    </>  
    );
}
 
export default Home;