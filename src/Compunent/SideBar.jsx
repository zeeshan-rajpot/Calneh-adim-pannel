import React, { useState } from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";

// import MyVerticallyCenteredModal from "./verticalModal";

const Sidebar = (props) => {
  const [activeTab, setActiveTab] = useState(props.activeTab);
  const [modalShow, setModalShow] = useState(false);

  const navItems = [
    { id: "Dashbord", text: "Dashbord", icon: "dashbord"   , link: "/Dashbord"},
    { id: "Disapproved", text: "Dis Approved", icon: "disapproved"  , link: "/Disapproved"},
    { id: "Doctor", text: "doctor", icon: "doctor" , link :'/Dotor'},
    { id: "Pharmacy", text: "Pharmacy", icon: "pharmacyicon" ,link:'/Pharmacy' },
  ];

  //   , link: "/Dashbord"
  //   , link: "/Disapproved"
  //   , link: "/Doctor"
  //   , link: "/Pharmacy"

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const renderNavItem = (item) => (
    <Link to={item.link}>
   
    <div
      key={item.id}
      className={`d-flex align-items-center justify-content-start mt-2 ps-4 ${
        activeTab === item.id ? "active-tabbbb" : ""
      }`}
      onClick={() => handleTabClick(item.id)}
    >
    
        <img
          src={`/${item.icon}.svg`}
          alt={`${item.text} Icon`}
          className={` ${activeTab === item.id ? "active-icons" : ""}`}
        />
    

        <p
          className={`ps-2 pt-3 pb-0 mt-0 text-secondary ${
            activeTab === item.id ? "active-tabbbb" : ""
          }`}
        >
          <b>{item.text}</b>
        </p>

    </div>
    </Link>
  );

  return (
    <>
      <div className="mobilenone">
        <div
          className="d-flex align-items-start justify-content-between flex-column pt-3"
          style={{ height: "100vh" }}
        >
          <div className="te">
            <img src="/logo.svg" className="mb-4 text-center ms-5" />
  

            {navItems.map((item) => renderNavItem(item))}
          </div>

          <div className=" ps-4 d-flex align-items-start justify-content-start">
            <img src={`/Logout.svg`} alt="Logout Icon" className={` `} />
            <p
              className={`ps-2 text-secondary`}
              style={{ cursor: "pointer", textDecoration: "none" }}
              onClick={() => setModalShow(true)}
            >
              <b>Logout</b>
            </p>
            {/* <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} /> */}
          </div>
        </div>
      </div>

      {/* <div className="destopnone pt-2">
        <div className="d-flex align-item-center justify-content-between">
          {navItems.map((item) => (
            <Link to={item.link} key={item.id}>
              <div className="d-flex justify-content-center" style={{ alignItems: "flex-start" }}>
                <img
                  src={require(`../images/${item.icon}.svg`)}
                  alt={`${item.text} Icon`}
                  className={`svg ${activeTab === item.id ? "active-icons" : ""}`}
                />
                <p
                  className={`text-secondary mobilesidebartext ${
                    activeTab === item.id ? "active-tabbbb" : ""
                  }`}
                >
                  <b>{item.text}</b>
                </p>
              </div>
            </Link>
          ))}
          <div className="d-flex align-items-start justify-content-center text-center">
            <img src={require("../images/Logout.svg")} alt="Logout Icon" className={` `} />
            <p
              className={`text-secondary mobilesidebartext`}
              style={{ cursor: "pointer", textDecoration: "none" }}
              onClick={() => setModalShow(true)}
            >
              <b>Logout</b>
            </p>
            <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} />
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Sidebar;
