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
        style={{ padding: "0px", maxWidth: "1600px" }}
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
                  <img alt="2" className="img_one" src={group} />{" "}
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
                  <Nav.Link href="https://app.marlin.pro/relay/operator" className="dashboard">Operators</Nav.Link>
                  <Nav.Link href="https://app.marlin.pro/relay/operator/register" className="dashboard">Register</Nav.Link>
                  <Nav.Link href="https://app.marlin.pro/relay/stash" className="dashboard">Delegate</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </div>
        </div>
        <hr className="hr"></hr>
      </div>
      
    </>
  );
}

export default Navbars;
