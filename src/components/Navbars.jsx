import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import group from "../images/Brightlystake.svg";
import vecto from "../images/Vecto.png";
import "./Navbar.css";

function Navbars() {
  return (
    <>
      <div
        className="container cntt"
        style={{ padding: "0px", maxWidth: "90%" }}
      >
        <div className="pading">
          <div className="bordr">
            <Navbar
              collapseOnSelect
              expand="lg"
              variant="dark"
              style={{ padding: "0px" }}
            >
              <div>
                <Navbar.Brand>
		  <img alt="2" width="60" height="60" className="img_one" src='https://brightlystake.com/.well-known/Brightlystake-logo256.png' />{" "}
                  <span className="relay">
                    <a href="https://Brightlystake.com" style={{textDecoration: 'none'}}>Brightlystake.com</a></span>{" "}
                </Navbar.Brand>
              </div>

              <Navbar.Toggle
                className="toggle"
                aria-controls="responsive-navbar-nav"
              />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto"></Nav>

                <Nav>
                  <Nav.Link href="/marlin/Dashboard" className="dashboard">Dashboard</Nav.Link>
                  <Nav.Link href="https://arb1.marlin.org/relay/operator" className="dashboard">Operators</Nav.Link>
                  <Nav.Link href="https://arb1.marlin.org/relay/operator/register" className="dashboard">Register</Nav.Link>
                  <Nav.Link href="https://arb1.marlin.org/relay/stash" className="dashboard">Delegate</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </div>
          <hr className="hr"></hr>
        </div>
        
      </div>
      
    </>
  );
}

export default Navbars;
