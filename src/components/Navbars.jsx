  import React from "react"
  import {Navbar, Nav} from "react-bootstrap";
    import group from "../images/Group 1569.png"
  import vecto from "../images/Vecto.png"
  import "./Navbar.css"


  function Navbars()
  {
      return(
          <>
          <div className="container cntt" style={{padding:'0px',maxWidth:'1200px'}} >
          <div className="pading">
          <div className="bordr">
          <Navbar collapseOnSelect expand="lg"  variant="dark" style={{padding:'0px'}}>
  <div>
  <Navbar.Brand ><img alt = '2' className="img_one" src={group}/> <span className="relay">Relay</span> </Navbar.Brand>
  
  </div>

    <Navbar.Toggle className="toggle" aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">

      <Nav className="mr-auto">
        
        </Nav>
      
      <Nav>
        <Nav.Link  className="dashboard">Dashboards</Nav.Link>             
        <Nav.Link to='https://app.marlin.pro/relay/operator' className="dashboard ">Operators</Nav.Link>
        <Nav.Link to='https://app.marlin.pro/relay/operator/register' className="dashboard ">Register</Nav.Link>
        <Nav.Link to='https://app.marlin.pro/relay/stash' className="dashboard ">Delegate</Nav.Link>      
      </Nav>
    </Navbar.Collapse>
  
  </Navbar>
  </div>
  </div>
        </div>
        <hr  style={{maxWidth:'1200px',marginTop:'49px'}}></hr>
          </>
      )
  }

  export default Navbars;