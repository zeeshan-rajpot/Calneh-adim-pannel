import React from 'react'
import { Card } from 'react-bootstrap';
import { Row } from 'react-bootstrap'
const SideCard = ({ logo, Heading, Count }) => {
  return (
<>
<Card className='cardbg justify-content-center align-items-center border-0 shadow rounded-4'>
        <Row className='mt-2'>
          <img src={logo} alt='card logo' />
        </Row>
        <Row
          className='mt-3'
          style={{
            fontSize: '1.4vw',
            fontWeight: '700',
          }}
        >
          {Heading}
        </Row>
        <Row
          className='mt-2  mb-4'
          style={{
            fontSize: '1.3vw',
            fontWeight: '700',
          }}
        >
          {' '}
          {Count}{' '}
        </Row>
      </Card>

</>
  )
}

export default SideCard