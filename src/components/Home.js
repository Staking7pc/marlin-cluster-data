import React, { useState, useEffect } from "react";
import Card from "./Card";
import Graph from "./Graph";
import APRGraph from "./APRGraph";
import Avg from "./Avg";

import Table from "./Table";
import "./Home.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import Copy from "../images/copy.png";

const Home = () => {
  const url = useParams();
  const [stakedAmount, setStakedAmount] = useState([]);
  const [verifiedCluster, setVerifiedCluster] = useState([]);
  const [networkData, setNetwork] = useState([]);
  useEffect(() => {
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
      .get("https://sk.arb1.marlin.org/getVerifiedOperators")
      .then((res2) => {
        console.log(res2.data[url.clusterId]);
        setVerifiedCluster(res2.data);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get("https://sk.arb1.marlin.org/getClusterInfo")
      .then((res3) => {
        //console.log(res3.data[url.clusterId].network)
        if (res3.data[url.clusterId].network == undefined) {
          res3.data[url.clusterId].network = "NA";
        } else {
          setNetwork(res3.data[url.clusterId]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div
        className="container cnta"
        style={{ maxWidth: "90%", padding: "0px" }}
      >
        <div
          className="d-flex flex-column "
          style={{ marginTop: "120px", padding: "0px" }}
        >
          <span className="Audit">
            {verifiedCluster[url.clusterId] == undefined
              ? ""
              : verifiedCluster[url.clusterId]}
          </span>
          <span
            className={
              verifiedCluster[url.clusterId] == undefined ? "Audit" : "sample"
            }
          >
            {url.clusterId}
            <img
              alt="some"
              className="copyImage"
              onClick={() => {
                navigator.clipboard.writeText(url.clusterId);
              }}
              src={Copy}
            />
          </span>
          <span className="ethereum">{networkData.network} </span>
        </div>
      </div>
      <Card />
      <APRGraph />
      <Graph />
      <Table />

      <div className="leavegap"></div>

     
      <div className="caaar">
        <div className="rules">
          <p className = 'rulesheader'> Calculation approach</p>
          <p>
            1 - Average POND and MPond values are net average of the values
            for the past 30 days
          </p>
          <p>
            2 - Records having POND APR > 1000% are ignored as it is just skewed
            up data due to the fact 0 POND was staked
          </p>
          <p>
            3 - Today's APR is the average of the values from 00:00 UTC for that
            cluster
          </p>
          <p>
            4 - Returns calculated i.e. no of POND per 1 MPond or 1M POND is
            calculated with the overall APR returns which is from June 1, 2021.
          </p>
        </div>
      </div>

      <div className="leavegap"></div>

     
      <p style={{ textAlign: "center" }}>Created by Brightlystake.com</p>
      <p style={{ textAlign: "center" }}>
        The data is refreshed every 5 minutes; Averages are calculated for the past 30 days
      </p>
      <p style={{ textAlign: "center" }}>
        If you find any issues drop in a mail to Staking7pc@gmail.com or join
        our <a href="https://t.me/Brightlystake">Telegram channel</a>
      </p>
      <p style={{ textAlign: "center" }}>
        Disclaimer: There are few factors which will skew up the information
        provided like non-availability of data, skewed up data etc.{" "}
      </p>
      <p style={{ textAlign: "center" }}>
        The values shown here are approximate values, if you have see any bugs do let us know.
      </p>
    </>
  );
};

export default Home;
