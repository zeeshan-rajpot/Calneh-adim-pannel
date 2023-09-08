import React, { useState, useEffect } from "react";
import { Col } from "react-bootstrap";

const NavBar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000); // Update every second

    return () => clearInterval(interval);
  }, []);
  const formattedDate = currentDate.toLocaleDateString();

  return (
    <>
      <Col className="d-flex align-item-center justify-content-between pt-2 pb-3 " >
        <h5 className="p-0">Hello, David William</h5>
      
      
        <div className="d-flex align-item-center ">
          <img src='Component 14 – 1.svg' className="m-0" />{" "}
          <p className="ms-2 m-0">{formattedDate}</p>
        </div>
        <div
          className="input-container shadow bg-light pt-0 pb-0 "
          style={{ width: "30%", borderRadius: "30px", height: "33px" }}
        >
          {/* <FaUser className='icon' /> */}
          <img src={process.env.PUBLIC_URL + "/Search.svg"} />
          <input type="text" placeholder="Search" className="bg-light" />
        </div>
      </Col>
    </>
  );
};

export default NavBar;
