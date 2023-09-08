import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import SideBar from "../../Compunent/SideBar";
import NavBar from "../../Compunent/NavBar";
import Doctor from "../../PendingDoctor/Doctor";
// import ApprovalCompunent from "./ApprovalCompunent";
import TotalPendingBar from "../../Compunent/TotalPendingBar";
import DoctorList from './DoctorList';

const ApprovedDoctor = () => {

  return (
    <>
      <Container fluid>
        <Row>
          <Col md={2} className="border ps-0">
            <SideBar activeTab="Doctor" />
          </Col>
          <Col md={10} style={{ backgroundColor: "#FAFBFF" }}>
            <Row>
              <NavBar />
            </Row>
            <Row>
              <Col md={9}>
            
     <DoctorList/>
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
  )
}

export default ApprovedDoctor