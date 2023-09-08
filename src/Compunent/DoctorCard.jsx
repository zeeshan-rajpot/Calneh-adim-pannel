import React from "react";
import { Card, Col } from "react-bootstrap";
import "./Doctor.css";
import { Link } from "react-router-dom";
const DoctorCard = ({ name, title, Image }) => {
  return (
    <>
      <Card className="mt-3 pt-3 mb-2 d-flex justify-content-center align-items-center rounded-5 border-0 shadow">
        <div className="circle shadow">
          <img src={Image} alt="profile picture" />
        </div>

        <p className=" mt-3">{name}</p>
        <p
          className=" p-2 "
          style={{
            backgroundColor: "#E8F0FF",
            color: "#2469FB",
            fontWeight: "700",
            border: "none",
            borderRadius: "22px",
            PaddingTop: "20px",
            PaddingBottom: "20px",
            paddingLeft: "30px",
            paddingRight: "30px",
          }}
        >
          {title}
        </p>
        <Link to="/Detail" style={{ width: "100%"}}>
  <button
    className="shadow mt-1"
    style={{
      backgroundColor: "#fff",
      color: "#2469FB",
      border: "none",
      borderRadius: "22px",
      width: "100%",
      height: "50px",
      textDecoration: "none"
    }}
  >
    See Profile
  </button>
</Link>
      </Card>
    </>
  );
};

export default DoctorCard;
