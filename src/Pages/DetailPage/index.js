import React from "react";
import Card from "react-bootstrap/Card";
import { Col, Container, Row } from "react-bootstrap";
import "./style.css";
import TotalPendingBar from "../../Compunent/TotalPendingBar";
import Sidebar from "../../Compunent/SideBar";
import NavBar from "../../Compunent/NavBar";
import SideCard from "../../Compunent/SideCard";
import DetaiCard from "./Detailcard.js";
import Detail from "./Detail.jsx";

const Index = () => {
  
  return (
    <>
      <Container fluid>
        <Row>
          <Col md={2} className="border ps-0">
            <Sidebar activeTab="Dashbord" />
          </Col>
          <Col md={10} style={{ backgroundColor: "#FAFBFF" }}>
            <Row>
              <NavBar />
            </Row>
            <Row>
              <Col
                md={9}
                className=""
                style={{ height: "90vh", overflowY: "auto" }}
              >
                <Detail />
              </Col>
              <Col
                md={3}
                className="border vh-100"
                style={{ backgroundColor: "#FAFBFF" }}
              >
                <TotalPendingBar />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Index;
