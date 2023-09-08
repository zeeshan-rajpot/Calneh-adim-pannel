
import React from 'react';
import Card from 'react-bootstrap/Card';

export const Detaicard = ({ Img }) => {
  return (
    <>
      <Card
        style={{ width: '7rem', height: '5rem', borderRadius: '15px' }}
        className='p-0 '
      >
        <Card.Img
          variant='top'
          src={Img}
          style={{
            objectFit: 'cover',
            width: '100%',
            borderRadius: '15px',
            height: '100%',
          }}
        />
      </Card>
    </>
  );
};

export default Detaicard;