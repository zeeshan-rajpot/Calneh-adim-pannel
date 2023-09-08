import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import { Link } from "react-router-dom";
const SignUp = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col
            md={6}
            className="vh-100 d-flex align-item-center justify-content-center"
          >
            <img
              className="login-img"
              src={process.env.PUBLIC_URL + "/Component 12 – 1.svg"}
              alt="My Image"
            />
          </Col>
          <Col
            md={6}
            className="vh-100 d-flex justify-content-center align-items-center flex-column "
            style={{ backgroundColor: "#F1F3FF" }}
          >
            <h1
              className="  text-center fw-bold"
              width="80%"
              style={{ color: "var(--primary-color)" }}
            >
              Sign Up for <br />
              Exclusive Access !
            </h1>
            <h3
              className=" mt-5 mb-4 text-center "
              style={{ color: "var(--primary-color)" }}
            >
              Sign Up
            </h3>
            <div className="input-container shadow bg-light ">
              {/* <FaUser className='icon' /> */}
              <img src={process.env.PUBLIC_URL + "/Iconly-Bold-Profile (1).svg"} />
              <input type="text" placeholder="Name" className="bg-light" />
            </div>
            <div className="input-container shadow bg-light mt-4">
              {/* <FaUser className='icon' /> */}
              <img src={process.env.PUBLIC_URL + "/Iconly-Bold-Message.svg"} />
              <input type="text" placeholder="Email" className="bg-light" />
            </div>
            <div className="input-container shadow mt-4 bg-light">
              {/* <FaUser className='icon' /> */}
              <img src={process.env.PUBLIC_URL + "/Iconly-Bold-Lock (1).svg"} />
              <input
                type="password"
                placeholder="Password"
                className="bg-light"
              />
            </div>
            <div className="input-container shadow mt-4 bg-light">
              {/* <FaUser className='icon' /> */}
              <img src={process.env.PUBLIC_URL + "/Iconly-Bold-Lock (1).svg"} />
              <input
                type="password"
                placeholder="Confrim Password"
                className="bg-light"
              />
            </div>
            <div
              className="text-end mt-2"
              style={{ width: "80%" }}
            >
              <p className="text-secondary me-4">Forget Password</p>
            </div>
            {/* <Link to="/Dashboard" className="rounded-4"> */}
         
            <button className="Signin-btn">
              {" "}
                {" "}
                Sign Up{" "}
            </button>
            {/* </Link> */}

            <p className="text-secondary mt-3">
             Already Have an account {" "}
              <Link to="/" className="text-secondary">
                {" "}
                Sign In{" "}
              </Link>{" "}
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SignUp;
