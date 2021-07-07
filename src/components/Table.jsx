import React from 'react';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import paginationFactory from 'react-bootstrap-table2-paginator';
import axios from "axios";
import "./Table.css"
import Next from "../images/grtr.png"
import Prev from "../images/lsthn.png"

function Table()
{
  const url = useParams();
  const [items, setitems] = useState([]);
  const [prevBtn, setPrevBtn] = useState(true);
  const [nextBtn, setNextBtn] = useState(true);
  const [pageStart, setPageStart] = useState(1);
  const [pageEnd, setPageEnd] = useState(5);
  const [itemStart, setItemStart] = useState(1);
  const [itemEnd, setItemEnd] = useState(8);
  const [activeId, setActiveId] = useState(1);
  const [curPage, setCurPage] = useState({
   
    color: "#3744C0",
  });

  const totalItems = items.length + 1; //Total number of transactions
  const perPageItems = 8; //Number of transaction for one page
  const pageNum = Math.ceil(totalItems / perPageItems);
  //console.log(pageNum);

  let pages = new Array();
  for (let i = 1; i <= pageNum; i++) {
    pages.push(i);
  }
  const handleActive = () => {
    if (pageStart <= 1) {
      setPrevBtn(false);
    } else {
      setPrevBtn(true);
    }
    if (pageEnd >= pageNum) {
      setNextBtn(false);
    } else {
      setNextBtn(true);
    }
  };
  const end = totalItems>=8 && itemEnd==1 ?true :false; 
  

  const handlePageClick = (page) => {
    //console.log("active id : " + page);
    let num = page == 1 ? 1 : page * 8 - 8;
    setItemStart(num);
    setItemEnd(page * 8);
    setActiveId(page);
  };
  

  const handlePrev = () => {
    let spage = pageStart - 5;
    let epage = spage + 4;
    setPageStart(spage);
    setPageEnd(epage);
  };
  const handleNext = () => {
    let spage = pageStart + 5;
    let epage = spage + 4 <= pageNum ? spage + 4 : pageNum;
    setPageStart(spage);
    setPageEnd(epage);
  };


  useEffect(() => {
    handleActive();
    if (itemEnd >= totalItems) {
      setItemEnd(totalItems);
    }
   
  }, [pageEnd, pageStart, itemEnd]);


    useEffect(() => {
   
        //console.log(url.clusterId);
          axios
          .get("https://brightlystake.com/api/marlin/5minStats/" + url.clusterId)
            .then((res) => {
              //console.log('5minsStats')
              //console.log(url.clusterId);
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

            })
            .catch((err) => {
              console.log(err);
            });

  }, []);

  const pageListRenderer = ({
    pages,
    onPageChange
  }) => {
    const pageWithoutIndication = pages.filter(p => typeof p.page !== 'string');
    return (
      <div>
        {
          pageWithoutIndication.map(p => (
            <button className="btn btn-success" onClick={ () => onPageChange(p.page) }>{ p.page }</button>
          ))
        }
      </div>
    );
  };
  
  const options = {
    pageListRenderer
  };
  
    return(
        <>
        <div className="container cnta" style={{padding:'0px',overflow:'hidden',marginTop:'182px',maxWidth:'1200px'}}> 
                <div>
                </div>
                  <div  className="tbe">
                  <p className="header">5 Mins Data for {url.clusterId}</p>
                    <table className="table ">
                   
                      <thead className="headr ">
                      
                        <tr >
                          <th scope="col">Latency</th>
                          <th scope="col">Rank</th>
                          <th scope="col">LatencyScore</th>
                          <th scope="col">Rank</th>
                          <th scope="col">Tickets</th>
                          <th scope="col">Rank</th>
                          <th scope="col">POND APY</th>
                          <th scope="col">Rank</th>
                          <th scope="col">MPOND APY</th>
                          <th scope="col">Rank</th>
                          <th scope="col">Time</th>
                        </tr>
                      </thead>
                      <tbody>
                        {items.map((item, index) => {
                          let endIndex = end ?8 :itemEnd-1
                          if (index + 1 >= itemStart && index + 1 <=endIndex) {
                            //console.log(itemEnd)

                          return (
                            <tr className="roow">
                              <th>{item.Latency}</th>
                              <th >{item.rankLatency}</th>
                              <td>{parseFloat(item.latencyScore).toFixed(2)}</td>
                              <td>{item.latencyScoreRank}</td>
                              <td>{item.tickets}</td>
                              <td>{item.rankTickets}</td>
                              <td>{item.POND}</td>
                              <td>{item.rankPOND}</td>
                              <td>{item.MPOND}</td>
                              <td>{item.rankMPOND}</td>
                              <td>{item.time}</td>
                            </tr>
                            );}
                        })}
                      </tbody>
                    </table>
                    <div className="paginationWrapper">
          <div  className="paginationBox">
            <button
              disabled={prevBtn ? false : true}
              className="prevWrap"
              onClick={handlePrev}
            >
              {prevBtn ? (
                <img src={Prev} className="prevBtn"/>
              ) : (
                <img src={Prev} className="prevBtn"/>
              )}
            </button>
            {pages.map((value, index) => {
              if (value >= pageStart && value <= pageEnd) {
                return (
                  <span className="numbers"
                    style={value == activeId ? curPage : null}
                    key={index + 1}
                    onClick={() => handlePageClick(value)}
                  >
                    {value}
                  </span>
                );
              }
            })}
            


            <button
              disabled={nextBtn ||end ? false : true}
              className="nextWrap"
              onClick={handleNext}
            >
              {nextBtn ? (
                <img src={Next} className="nextBtn"/>
              ) : (
                <img src={Next} className="nextBtn"/>
              )}
            </button>
          </div>
          </div></div>
                
           
                  </div>


        </>
    )
}

export default Table;