// import "./App.css";
// import { Line } from "react-chartjs-2";
// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";

// import moment from "moment";
// import { Button, Modal } from "react-bootstrap";

// function App() {
  
//   const [items, setitems] = useState([]);
//   const [hourData, setHourData] = useState([]);
//   const [dayData, setDayData] = useState([]);
//   const [tablemindata, settablemindata] = useState([]);
//   const [showDay, setShowDay] = useState(true);
//   const [modalShow, setModalShow] = useState(false);
//   const [modalShow2, setModalShow2] = useState(false);
//   const [overallAverage, setOverallAverage] = useState([]);
//   const [todaysAverage, setTodaysAverage] = useState([]);
//   const url = useParams();

//   useEffect(() => {
//     const chart = () => {
//       axios
//         .get("https://brightlystake.com/api/marlin/5minStats/" + url.clusterId)
//         .then((res) => {
//           setitems(res.data.data);

//           let latestObj =
//             res.data.data.length !== 0
//               ? res.data.data.reduce((a, b) => (a.time > b.time ? a : b))
//               : null;

//           let dayData = res.data.data.filter(
//             (f) => f.time.substr(0, 10) === latestObj?.time.substr(0, 10)
//           );

//           let hourData = res.data.data.filter(
//             (f) => f.time.substr(11, 2) === latestObj?.time.substr(11, 2)
//           );

//           let mindata = res.data.data.filter((item, idx) => idx < 5);
//           settablemindata(mindata);
//           setHourData(hourData);
//           setDayData(dayData);
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//     };

//     const getOverallStats = () => {
//       axios
//         .get(
//           "https://brightlystake.com/api/marlin/overallStats/" + url.clusterId
//         )
//         .then((res1) => {
//           // console.log(res1.data.data[0]);
//           // console.log("ali razfdsgesdga",res1)
//           setOverallAverage(res1.data.data[0]);
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//     };

//     const getTodaysStats = () => {
//       axios
//         .get(
//           "https://brightlystake.com/api/marlin/todaysStats/" + url.clusterId
//         )
//         .then((res2) => {
//           // console.log('GetTodaysStats')
//           // console.log(res2.data.data[0]);
//           setTodaysAverage(res2.data.data[0]);
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//     };

//     chart();
//     getOverallStats();
//     getTodaysStats();
//   }, []);

//   let showLatency = [];
//   let formatedDates = [];
//   let totalData = [];
//   let ticketsData = [];
//   let viewMoreFormattedDates = [];

//   if (showDay) {
//     dayData.map((f) =>
//       f.latencyScore <= items.length
//         ? (showLatency.push(f.latencyScore),
//           formatedDates.push(moment(f.time).format("MMM D YYYY HH:mm:ss")))
//         : null
//     );
//   } else {
//     hourData.map((f) =>
//       f.latencyScore <= items.length
//         ? (showLatency.push(f.latencyScore),
//           formatedDates.push(f.time.substr(11, 8)))
//         : null
//     );
//   }
//   items.map((f) =>
//     f.latencyScore <= items.length
//       ? (totalData.push(f.latencyScore),
//         ticketsData.push(f.tickets),
//         viewMoreFormattedDates.push(
//           moment(f.time).format("MMM D YYYY HH:mm:ss")
//         ))
//       : null
//   );

//   const handleClose = () => setModalShow(false);
//   const handleClose2 = () => setModalShow2(false);
//   return (
//     <div className="App">
//       <div className="main">
//         <div className="row width">
//           <div className=" col-xl-7 col-lg-12 col-md-12 col-sm-12 col-xs-12">
//             <div className="row">
//               <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 center">
//                 <div className="card-1">
//                   <div className="row">
//                     <div className="col-8 padding-left-10">
//                       <div className="card-name">Tickets Average</div>
//                       <div className="card-number">
//                         {overallAverage.TICKETS}
//                       </div>
//                       <div className="green-value">
//                         Rank{" "}
//                         <span className="card-date">
//                           {Math.ceil(overallAverage.TICKETS_Rank)} /{" "}
//                           {overallAverage.TICKETS_MAX}
//                         </span>
//                       </div>
//                       <div className="brown-value">
//                         Todays Stats :{" "}
//                         <span className="card-date">
//                           {" "}
//                           {todaysAverage.TICKETS} -{" "}
//                           {Math.ceil(todaysAverage.TICKETS_Rank)}
//                         </span>
//                       </div>
//                     </div>

//                   </div>
//                 </div>
//               </div>

//               <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 center">
//                 <div className="card-1">
//                   <div className="row">
//                     <div className="col-8 padding-left-10">
//                       <div className="card-name">POND APY</div>
//                       <div className="card-number">
//                         {overallAverage.POND_APY}%
//                       </div>
//                       <div className="green-value">
//                         Rank
//                         <span className="card-date">
//                           {" "}
//                           {Math.ceil(overallAverage.POND_Rank)} /{" "}
//                           {overallAverage.POND_MAX}
//                         </span>
//                       </div>
//                       <div className="brown-value">
//                         Todays Stats :{" "}
//                         <span className="card-date">
//                           {" "}
//                           {todaysAverage.POND_APY}% -{" "}
//                           {Math.ceil(todaysAverage.POND_Rank)}
//                         </span>
//                       </div>
//                     </div>

//                   </div>
//                 </div>
//               </div>
//               <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 center">
//                 <div className="card-1">
//                   <div className="row">
//                     <div className="col-8 padding-left-10">
//                       <div className="card-name">MPOND APY</div>
//                       <div className="card-number">
//                         {overallAverage.MPOND_APY}%
//                       </div>
//                       <div className="green-value">
//                         Rank
//                         <span className="card-date">
//                           {" "}
//                           {Math.ceil(overallAverage.MPOND_Rank)} /{" "}
//                           {overallAverage.MPOND_MAX}
//                         </span>
//                       </div>
//                       <div className="brown-value">
//                         Todays Stats :{" "}
//                         <span className="card-date">
//                           {" "}
//                           {todaysAverage.MPOND_APY}% -{" "}
//                           {Math.ceil(todaysAverage.MPOND_Rank)}
//                         </span>
//                       </div>
//                     </div>

//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-5 col-md-12 col-sm-12 col-xs-12">
//             <div className="row">
//               <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 center">
//                 <div className="card-1">
//                   <div className="row">
//                     <div className="col-8 padding-left-10">
//                       <div className="card-name">Latency Score Avg</div>
//                       <div className="card-number">
//                         {overallAverage.LATENCY_SCORE}
//                       </div>
//                       <div className="green-value">
//                         Rank{" "}
//                         <span className="card-date">
//                           {" "}
//                           {Math.ceil(overallAverage.LATENCY_SCORE_Rank)} /{" "}
//                           {overallAverage.LATENCY_SCORE_MAX}
//                         </span>
//                       </div>
//                       <div className="brown-value">
//                         Todays Stats :{" "}
//                         <span className="card-date">
//                           {" "}
//                           {todaysAverage.LATENCY_SCORE} -{" "}
//                           {Math.ceil(todaysAverage.LATENCY_SCORE_Rank)}
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 center">
//                 {" "}
//                 <div className="card-1">
//                   <div className="row ">
//                     <div className="col-8 padding-left-10">
//                       <div className="card-name">fees</div>
//                       <div className="card-number">{overallAverage.fees}%</div>
//                       <div className="green-value">
//                         Stake 1M POND
//                         <span className="card-date">
//                           {" "}
//                           ~{" "}
//                           {Math.ceil(
//                             (overallAverage.POND_APY / 100) *
//                               (1000000 / 365) *
//                               ((100 - overallAverage.fees) / 100)
//                           )}{" "}
//                           POND/day
//                         </span>
//                       </div>
//                       <div className="brown-value">
//                         Stake 1 MPOND{" "}
//                         <span className="card-date">
//                           {" "}
//                           ~{" "}
//                           {Math.ceil(
//                             (overallAverage.MPOND_APY / 100) *
//                               (1000000 / 365) *
//                               ((100 - overallAverage.fees) / 100)
//                           )}{" "}
//                           POND/day
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="graph-main ">

//         <div className="row width postion">
//           <div className="col-lg-8 col-md-6 col-sm-12 col-xs-12 ">
//             <div className="Chart-card-line ">
//               <div className="row">
//                 <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
//                   <h3 className="chart-heading-overview">overview</h3>
//                   <h3 className="chart-heading">Latency Score graph</h3>
//                 </div>
//                 <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 right">
//                   <h3 className="chart-heading-right">
//                     <div
//                       className={
//                         showDay ? "chart-btn-active" : "chart-btn-disable"
//                       }
//                       onClick={() => setShowDay(true)}
//                     >
//                       Day
//                     </div>
//                     <div
//                       className={
//                         showDay ? "chart-btn-disable" : "chart-btn-active"
//                       }
//                       onClick={() => setShowDay(false)}
//                     >
//                       Hour
//                     </div>
//                     <div
//                       className="chart-btn-view"
//                       onClick={() => setModalShow(true)}
//                     >
//                       Compare
//                     </div>
//                   </h3>
//                 </div>
//               </div>
//               <div>
//                 {items.length !== 0 ? (
//                   <Line
//                     height={300}
//                     width={1990}
//                     data={{
//                       labels: formatedDates ? formatedDates.reverse() : null,
//                       datasets: [
//                         {
//                           label: "Latency",
//                           fill: false,
//                           borderColor: "#626ed7",
//                           backgroundColor: "#626ed7",
//                           pointBackgroundColor: "#55bae7",
//                           pointBorderColor: "#55bae7",
//                           pointHoverBackgroundColor: "#55bae7",
//                           pointHoverBorderColor: "#55bae7",
//                           data: showLatency.reverse(),
//                           pointRadius: 0,
//                         },
//                       ],
//                     }}
//                     options={{
//                       tooltips: {
//                         callbacks: {
//                           label: function (tooltipItem) {
//                             return tooltipItem.yLabel;
//                           },
//                         },
//                       },
//                       legend: {
//                         display: true,
//                       },

//                       cornerRadius: 20,
//                       responsive: true,
//                       maintainAspectRatio: false,
//                       scales: {
//                         yAxes: [
//                           {
//                             ticks: {
//                               stepSize: 5,
//                               beginAtZero: true,
//                             },
//                             gridLines: {
//                               borderDash: [2],
//                               zeroLineColor: "transparent",
//                               zeroLineWidth: 0,
//                               tickMarkLength: 15,
//                             },
//                           },
//                         ],
//                         xAxes: [
//                           {
//                             // barThickness: 10,
//                             barPercentage: 0.7,
//                             gridLines: {
//                               display: false,
//                             },
//                             ticks: {
//                               fontColor: "#red",
//                             },
//                           },
//                         ],
//                       },
//                       elements: {
//                         point: {
//                           radius: 0,
//                         },
//                       },
//                     }}
//                     legend={{
//                       display: true,
//                       position: "bottom",
//                       labels: {
//                         usePointStyle: true,
//                         boxWidth: 50,
//                       },
//                     }}
//                   />
//                 ) : (
//                   ""
//                 )}
//               </div>
//             </div>
//           </div>

//           <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
//             <div className="Chart-card-line-2 ">
//               <div className="row">
//                 <div className="col-6">
//                   <h3 className="chart-heading-overview">5 MINS DATA</h3>
//                   <h3 className="chart-heading"> DETAILED STATS</h3>
//                 </div>
//                 <div className="col-6 right">
//                   <h3 className="chart-heading-right">
//                     <div
//                       className="chart-btn-view-total-orders "
//                       onClick={() => setModalShow2(true)}
//                     >
//                       View More
//                     </div>
//                   </h3>
//                 </div>
//               </div>
//               <div>
//                 {items.length !== 0 ? (
//                   <table className="table table-bordered">
//                     <thead className="table-header ">
//                       <tr>
//                         <th scope="col">Date/Time</th>
//                         <th scope="col">Latency Score</th>
//                         <th scope="col">Tickets</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {tablemindata.map((item, key) => {
//                         return (
//                           <tr>
//                             <th scope="row">{item.time}</th>
//                             <th>{parseFloat(item.latencyScore).toFixed(2)}</th>
//                             <th>{item.tickets}</th>
//                           </tr>
//                         );
//                       })}
//                     </tbody>
//                   </table>
//                 ) : (
//                   ""
//                 )}
//               </div>

//               <Modal
//                 show={modalShow}
//                 onHide={() => setModalShow(false)}
//                 size="xd"
//                 // aria-labelledby="contained-modal-title-vcenter"
//                 centered
//                 dialogClassName="my-modal"
//               >
//                 <Modal.Header closeButton>
//                   <Modal.Title id="contained-modal-title-vcenter">
//                     Detailed Graphs
//                   </Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                   {items.length !== 0 ? (
//                     <Line
//                       height={300}
//                       width={1990}
//                       data={{
//                         labels: viewMoreFormattedDates,
//                         datasets: [
//                           {
//                             label: "latency",
//                             lineTension: 0,
//                             fill: false,
//                             borderColor: "#626ed7",
//                             backgroundColor: "#626ed7",
//                             pointBackgroundColor: "#55bae7",
//                             pointBorderColor: "#55bae7",
//                             pointHoverBackgroundColor: "#55bae7",
//                             pointHoverBorderColor: "#55bae7",
//                             data: totalData,
//                             pointRadius: 0,
//                           },
//                           {
//                             label: "tickets",
//                             lineTension: 0,
//                             fill: false,
//                             borderColor: "#fc7e09",
//                             backgroundColor: "#fc7e09",
//                             pointBackgroundColor: "#fc7e09",
//                             pointBorderColor: "#fc7e09",
//                             pointHoverBackgroundColor: "#fc7e09",
//                             pointHoverBorderColor: "#fc7e09",
//                             data: ticketsData,
//                             pointRadius: 0,
//                           },
//                         ],
//                       }}
//                       options={{
//                         bezierCurve: false,
//                         line: {
//                           tension: 0, // disables bezier curves
//                         },
//                         tooltips: {
//                           callbacks: {
//                             label: function (tooltipItem) {
//                               return tooltipItem.yLabel;
//                             },
//                           },
//                         },
//                         legend: {
//                           display: true,
//                         },

//                         cornerRadius: 20,
//                         responsive: true,
//                         maintainAspectRatio: false,
//                         scales: {
//                           yAxes: [
//                             {
//                               ticks: {
//                                 // callback: function (value) {
//                                 //   return "$ " + numeral(value).format("0.0a");
//                                 // },
//                                 stepSize: 5,
//                                 beginAtZero: true,
//                                 fontColor: "red",
//                               },
//                               gridLines: {
//                                 borderDash: [2],
//                                 zeroLineColor: "transparent",
//                                 zeroLineWidth: 0,
//                                 tickMarkLength: 15,
//                               },
//                             },
//                           ],
//                           xAxes: [
//                             {
//                               // barThickness: 10,
//                               barPercentage: 0.7,
//                               gridLines: {
//                                 // lineWidth: 0,
//                                 // zeroLineColor: "transparent",
//                                 display: false,
//                               },
//                             },
//                           ],
//                         },
//                         elements: {
//                           line: {
//                             tension: 0,
//                           },
//                           point: {
//                             radius: 0,
//                           },
//                         },
//                       }}
//                       legend={{
//                         display: true,
//                         position: "bottom",
//                         labels: {
//                           usePointStyle: true,
//                           boxWidth: 50,
//                           font: {
//                             size: 17,
//                           },
//                         },
//                       }}
//                     />
//                   ) : (
//                     ""
//                   )}
//                 </Modal.Body>
//                 <Modal.Footer>
//                   <Button onClick={handleClose}>Close</Button>
//                 </Modal.Footer>
//               </Modal>

//               {/* Total pop up */}
//               <Modal
//                 show={modalShow2}
//                 onHide={() => setModalShow2(false)}
//                 size="xd"
//                 // aria-labelledby="contained-modal-title-vcenter"
//                 centered
//                 dialogClassName="my-modal"
//               >
//                 <Modal.Header closeButton>
//                   <Modal.Title id="contained-modal-title-vcenter">
//                     5 MINS DATA for {url.clusterId}
//                   </Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                   <div className="table-scroll">
//                     <table className="table table-bordered">
//                       <thead className="table-header ">
//                         <tr>
//                           <th scope="col">Latency</th>
//                           <th scope="col">Rank</th>
//                           <th scope="col">LatencyScore</th>
//                           <th scope="col">Rank</th>
//                           <th scope="col">Tickets</th>
//                           <th scope="col">Rank</th>
//                           <th scope="col">POND APY</th>
//                           <th scope="col">Rank</th>
//                           <th scope="col">MPOND APY</th>
//                           <th scope="col">Rank</th>
//                           <th scope="col">Time</th>
//                         </tr>
//                       </thead>
//                       <tbody>
//                         {items.map((item, keys) => {
//                           return (
//                             <tr>
//                               <th scope="row">{item.Latency}</th>
//                               <th scope="row">{item.rankLatency}</th>
//                               <td>{parseFloat(item.latencyScore).toFixed(2)}</td>
//                               <td>{item.latencyScoreRank}</td>
//                               <td>{item.tickets}</td>
//                               <td>{item.rankTickets}</td>
//                               <td>{item.POND}</td>
//                               <td>{item.rankPOND}</td>
//                               <td>{item.MPOND}</td>
//                               <td>{item.rankMPOND}</td>
//                               <td>{item.time}</td>
//                             </tr>
//                           );
//                         })}
//                       </tbody>
//                     </table>
//                   </div>
//                 </Modal.Body>
//                 <Modal.Footer>
//                   <Button onClick={handleClose2}>Close</Button>
//                 </Modal.Footer>
//               </Modal>
//               <div></div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>    
//   );
// }

// export default App;
