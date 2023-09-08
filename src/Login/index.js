import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./login.css";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData , setFromData] =useState({
email:'',
password:'',

}
 );

 const handleInput = (event) => {
  const name = event.target.name;
  const value = event.target.value;

  setFromData((prev) => {
    return { ...prev, [name]: value };
  });
  console.log(`Value of ${name}: ${value}`);
};
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
              src={process.env.PUBLIC_URL + "/Component 11 – 1.svg"}
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
              Welcome back to Your <br />
              admin Dashboard !
            </h1>
            <h3
              className=" mt-4 mb-4 text-center "
              style={{ color: "var(--primary-color)" }}
            >
              Sign In
            </h3>
            <div className="input-container shadow bg-light ">
              {/* <FaUser className='icon' /> */}
              <img src={process.env.PUBLIC_URL + "/Iconly-Bold-Message.svg"} />
              <input type="text" name='email' value={formData.email} onChange={handleInput} placeholder="Email" className="bg-light" />
            </div>
            <div className="input-container shadow mt-4 bg-light">
              {/* <FaUser className='icon' /> */}
              <img src={process.env.PUBLIC_URL + "/Iconly-Bold-Lock (1).svg"} />
              <input
                type="password"
                name='password'
                value ={formData.password}
                onChange={handleInput}
                placeholder="Password"
                className="bg-light"
              />
            </div>
            <div
              className="text-end mt-2"
              style={{ width: "80%",  }}
            >
              <p className="text-secondary me-4">Forget Password</p>
            </div>
            <button className="Signin-btn">
              {" "}
              <Link to="/Dashbord" >
                {" "}
                Sign In{" "}
              </Link>
            </button>
            <p className="text-secondary mt-3">
              Don't have an account?{" "}
              <Link to="/SignUp" className="text-secondary">
                {" "}
                Sign up{" "}
              </Link>{" "}
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login
