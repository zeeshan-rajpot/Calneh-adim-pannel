import React, { useState } from 'react';
import Doctor from '../../PendingDoctor/Doctor';
import Pharmacy from '../../PendingPharmacy/Pharmacy'; // Import your Pharmacy component here

const ApprovalComponent = () => {
  const [isDoctorSelected, setIsDoctorSelected] = useState(true);

  const handleApproveClick = () => {
    setIsDoctorSelected(true);
  };

  const handleDisapproveClick = () => {
    setIsDoctorSelected(false);
  };

  return (
    <>
   

      <div className="mt-4 d-flex justify-content-center align-items-center">
        <button
          className="shadow"
          style={{
            width: '30%',
            height: '35px',
            textAlign: 'center',
            borderRadius: '22px',
            color: isDoctorSelected ? '#fff' : '#2469FB',
            backgroundColor: isDoctorSelected ? '#2469FB' : '#fff',
            border: 'none',
          }}
          onClick={handleApproveClick}
        >
          Doctor
        </button>
        <button
          className="shadow"
          style={{
            width: '30%',
            height: '35px',
            textAlign: 'center',
            borderRadius: '22px',
            color: isDoctorSelected ? '#2469FB' : '#fff',
            backgroundColor: isDoctorSelected ? '#fff' : '#2469FB',
            border: 'none',
            marginLeft: '10px',
          }}
          onClick={handleDisapproveClick}
        >
          Pharmacy
        </button>
      </div>

      <div >
        {isDoctorSelected ? (
          <Doctor /> // Render the Doctor component when isDoctorSelected is true
        ) : (
          <Pharmacy /> // Render the Pharmacy component when isDoctorSelected is false
        )}
      </div>
    </>
  );
};

export default ApprovalComponent;
