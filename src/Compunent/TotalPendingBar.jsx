import React from 'react'
import { Row ,Col } from 'react-bootstrap'
import SideCard from './SideCard'
const TotalPendingBar = () => {
  return (
<>
<Col className='m-2 '>
        <Row className='mt-5'>
          <SideCard
            Heading='Total Pending Approval'
            Count='47+'
            logo='/Component 13 – 1.svg'
          />
        </Row>
        <Row className='mt-5'>
          <SideCard
            Heading='Total Registered Pharmacy '
            Count='33+'
            logo='/Group 12010.svg'
          />
        </Row>
        <Row className='mt-5 '>
          <SideCard
            Heading='Total Registered Doctor '
            Count='40+'
            logo='/Group 12002.svg'
          />
        </Row>
      </Col>

</> 

)
}

export default TotalPendingBar