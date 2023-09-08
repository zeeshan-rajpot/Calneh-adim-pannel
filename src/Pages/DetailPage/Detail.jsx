import React, { useState } from 'react';

import SideCard from '../../Compunent/SideCard';
import DetaiCard from './Detailcard.js';
import Card from 'react-bootstrap/Card';
import { Col, Container, Row } from 'react-bootstrap';
const Detail = () => {

  const [isDoctorSelected, setIsDoctorSelected] = useState(true);

  const handleApproveClick = () => {
    setIsDoctorSelected(true);
  };

  const handleDisapproveClick = () => {
    setIsDoctorSelected(false);
  };
  return (
   <>
   
   <Container fluid className='square shadow rounded-2  pt-3 pb-5' >
      <Row>
        <Col lg={5} md={6} xs={12}>
          <Card
            style={{ width: '100%' ,width:'180px',height:'200px' }}
            className='border shadow rounded-5 p-0'
          >
            <Card.Img
              variant='top'
              src='https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
              alt='Profile'
              className='rounded-5 object-fit-cover '
              style={{height:'200px' ,objectFit:'cover' }}
            />
          </Card>
          <div className='mt-2'>
            <div className='input-container' style={{width:'100%'}}>
              <label className='input-label-n'>Name :</label>
              <input
                placeholder='Yamna Haider'
                className='border-none shadow rounded-5 input'
                style={{
                  paddingLeft: '80px',
                }}
              />
            </div>
          </div>
          <div className='mt-2'>
            <div className='input-container' style={{width:'100%'}}>
              <label className='input-label-n'>  City :</label>
              <input
                placeholder='Lahore Punjab Pakistan'
                className='border-none shadow rounded-5 input'
                style={{
                  paddingLeft: '70px',
                }}
              />
            </div>
          </div>
          <div className='mt-2'>
            <div className='input-container' style={{width:'100%'}}>
              <label className='input-label'>Specification :</label>
              <input
                placeholder='Radiologist'
                className='border-none shadow rounded-5 input'
                style={{
                  paddingLeft: '130px',
                }}
              />
            </div>
          </div>
          <div className='mt-2'>
            <div className='input-container' style={{width:'100%'}}>
              <label className='input-label'>Experience :</label>
              <input
                placeholder='5 years'
                className='border-none shadow rounded-5 input'
                style={{
                  paddingLeft: '110px',
                }}
              />
            </div>
          </div>
        </Col>
        <Col lg={7} md={6} xs={12} className='mt-4 mt-md-0'>
          <h6>Documents for Education</h6>
          <div className='d-flex flex-wrap'>
            <div className='custom'>
              <DetaiCard Img='https://images.unsplash.com/photo-1589330694653-ded6df03f754?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1516&q=80' />
            </div>
            <div className='custom'>
              <DetaiCard Img='https://images.unsplash.com/photo-1589330694653-ded6df03f754?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1516&q=80' />
            </div>
            <div className='custom'>
              <DetaiCard Img='https://images.unsplash.com/photo-1589330694653-ded6df03f754?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1516&q=80' />
            </div>
          </div>
          <div className='mt-4'>
            <h6>Documents for Clinic</h6>
            <div className='d-flex flex-wrap'>
              <div className='custom'>
                <DetaiCard Img='https://images.unsplash.com/photo-1589330694653-ded6df03f754?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1516&q=80' />
              </div>
              <div className='custom'>
                <DetaiCard Img='https://images.unsplash.com/photo-1589330694653-ded6df03f754?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1516&q=80' />
              </div>
              <div className='custom'>
                <DetaiCard Img='https://images.unsplash.com/photo-1589330694653-ded6df03f754?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1516&q=80' />
              </div>
            </div>
          </div>
          <div className='mt-4'>
            <h6>Documents for Registration Detail</h6>
            <div className='d-flex flex-wrap'>
              <div className='custom'>
                <DetaiCard Img='https://images.unsplash.com/photo-1589330694653-ded6df03f754?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1516&q=80' />
              </div>
              <div className='custom'>
                <DetaiCard Img='https://images.unsplash.com/photo-1589330694653-ded6df03f754?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1516&q=80' />
              </div>
              <div className='custom'>
                <DetaiCard Img='https://images.unsplash.com/photo-1589330694653-ded6df03f754?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1516&q=80' />
              </div>
            </div>
          </div>
          <div className='mt-4'>
            <h6>Documents for Registration Detail</h6>
            <div className='d-flex flex-wrap'>
              <div className='custom'>
                <DetaiCard Img='https://images.unsplash.com/photo-1589330694653-ded6df03f754?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1516&q=80' />
              </div>
              <div className='custom'>
                <DetaiCard Img='https://images.unsplash.com/photo-1589330694653-ded6df03f754?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1516&q=80' />
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>


<Row>

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
          Approved
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
          Dis Approved
        </button>
      </div>
</Row>

<Row className='text-center pb-5'>
<textarea rows='10' className='mt-4 border-0 shadow rounded-5 ' style={{width:'80%' ,marginLeft:'10%'}}></textarea>

</Row>
<Row className='text-center pb-5 d-flex align-items-center justify-content-center'>
<button
          className="shadow "
          style={{
            width: '30%',
            height: '35px',
            textAlign: 'center',
            borderRadius: '22px',
            color:  '#2469FB' ,
            backgroundColor:  '#fff' ,
            border: 'none',
            marginLeft: '10px',
          }}
         
        >
          Send
        </button>
</Row>

   </>
  )
}

export default Detail