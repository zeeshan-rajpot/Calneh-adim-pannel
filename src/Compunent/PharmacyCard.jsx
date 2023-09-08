import React from "react";
import { Card, Col } from "react-bootstrap";
import "./Doctor.css";
import { Link } from "react-router-dom";

const PharmacyCard = ({ name, location, Image }) => {
  return (
    <>
      <Card className="mt-3 pt-3 mb-2 d-flex justify-content-center align-items-center rounded-5 border-0 shadow">
        <div className="circle shadow">
          <img src={Image} alt="profile picture" />
        </div>

        <p className=" mt-3">{name}</p>



<div className="d-flex align-item-center justify-content-center">
 
 <img src="/Iconly-Bold-Location.svg" alt="" />
    <p className="mb-0 text-secondary">{location}</p>
    </div>

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

export default PharmacyCard;
