import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SideBar from "../../Compunent/SideBar";
import NavBar from "../../Compunent/NavBar";
import Doctor from "../../PendingDoctor/Doctor";
import ApprovalComponent from "../Dashboard/ApprovalCompunent";
import TotalPendingBar from "../../Compunent/TotalPendingBar";

const DisApproved = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col md={2} className="border ps-0">
            <SideBar activeTab="Disapproved" />
          </Col>
          <Col md={10} style={{ backgroundColor: "#FAFBFF" }}>
            <Row>
              <NavBar />
            </Row>
            <Row>
              <Col md={9}>
                <ApprovalComponent />
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

export default DisApproved;
