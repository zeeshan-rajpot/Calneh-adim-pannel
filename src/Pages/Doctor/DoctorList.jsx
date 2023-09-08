import React from 'react'
import { Link } from 'react-router-dom';

const DoctorList = () => {
  const tableData = [
    {
      PharmacyID: '#12458',
      name: 'Akbar Sarkar',
      Comment: 'Your Document has been approved',
      City: 'Lhr',
      JoiningDate: '5-4-2020',
    },
    {
      PharmacyID: '#12458',
      name: 'Akbar Sarkar',
      Comment: 'Your Document has been approved',
      City: 'Lhr',
      JoiningDate: '5-4-2020',
    },
    {
      PharmacyID: '#12458',
      name: 'Akbar Sarkar',
      Comment: 'Your Document has been approved',
      City: 'Lhr',
      JoiningDate: '5-4-2020',
    },
    {
        PharmacyID: '#12458',
        name: 'Akbar Sarkar',
        Comment: 'Your Document has been approved',
        City: 'Lhr',
        JoiningDate: '5-4-2020',
      },
      {
        PharmacyID: '#12458',
        name: 'Akbar Sarkar',
        Comment: 'Your Document has been approved',
        City: 'Lhr',
        JoiningDate: '5-4-2020',
      },
      {
        PharmacyID: '#12458',
        name: 'Akbar Sarkar',
        Comment: 'Your Document has been approved',
        City: 'Lhr',
        JoiningDate: '5-4-2020',
      },
      {
        PharmacyID: '#12458',
        name: 'Akbar Sarkar',
        Comment: 'Your Document has been approved',
        City: 'Lhr',
        JoiningDate: '5-4-2020',
      },
      {
        PharmacyID: '#12458',
        name: 'Akbar Sarkar',
        Comment: 'Your Document has been approved',
        City: 'Lhr',
        JoiningDate: '5-4-2020',
      },
      {
        PharmacyID: '#12458',
        name: 'Akbar Sarkar',
        Comment: 'Your Document has been approved',
        City: 'Lhr',
        JoiningDate: '5-4-2020',
      },
      {
        PharmacyID: '#12458',
        name: 'Akbar Sarkar',
        Comment: 'Your Document has been approved',
        City: 'Lhr',
        JoiningDate: '5-4-2020',
      },
      {
        PharmacyID: '#12458',
        name: 'Akbar Sarkar',
        Comment: 'Your Document has been approved',
        City: 'Lhr',
        JoiningDate: '5-4-2020',
      },
      {
        PharmacyID: '#12458',
        name: 'Akbar Sarkar',
        Comment: 'Your Document has been approved',
        City: 'Lhr',
        JoiningDate: '5-4-2020',
      },
      {
        PharmacyID: '#12458',
        name: 'Akbar Sarkar',
        Comment: 'Your Document has been approved',
        City: 'Lhr',
        JoiningDate: '5-4-2020',
      },
      {
        PharmacyID: '#12458',
        name: 'Akbar Sarkar',
        Comment: 'Your Document has been approved',
        City: 'Lhr',
        JoiningDate: '5-4-2020',
      },
      {
        PharmacyID: '#12458',
        name: 'Akbar Sarkar',
        Comment: 'Your Document has been approved',
        City: 'Lhr',
        JoiningDate: '5-4-2020',
      },
      {
        PharmacyID: '#12458',
        name: 'Akbar Sarkar',
        Comment: 'Your Document has been approved',
        City: 'Lhr',
        JoiningDate: '5-4-2020',
      },
      {
        PharmacyID: '#12458',
        name: 'Akbar Sarkar',
        Comment: 'Your Document has been approved',
        City: 'Lhr',
        JoiningDate: '5-4-2020',
      },
      {
        PharmacyID: '#12458',
        name: 'Akbar Sarkar',
        Comment: 'Your Document has been approved',
        City: 'Lhr',
        JoiningDate: '5-4-2020',
      },
      {
        PharmacyID: '#12458',
        name: 'Akbar Sarkar',
        Comment: 'Your Document has been approved',
        City: 'Lhr',
        JoiningDate: '5-4-2020',
      },
      {
        PharmacyID: '#12458',
        name: 'Akbar Sarkar',
        Comment: 'Your Document has been approved',
        City: 'Lhr',
        JoiningDate: '5-4-2020',
      },
      {
        PharmacyID: '#12458',
        name: 'Akbar Sarkar',
        Comment: 'Your Document has been approved',
        City: 'Lhr',
        JoiningDate: '5-4-2020',
      },
      {
        PharmacyID: '#12458',
        name: 'Akbar Sarkar',
        Comment: 'Your Document has been approved',
        City: 'Lhr',
        JoiningDate: '5-4-2020',
      },
      {
        PharmacyID: '#12458',
        name: 'Akbar Sarkar',
        Comment: 'Your Document has been approved',
        City: 'Lhr',
        JoiningDate: '5-4-2020',
      },
      {
        PharmacyID: '#12458',
        name: 'Akbar Sarkar',
        Comment: 'Your Document has been approved',
        City: 'Lhr',
        JoiningDate: '5-4-2020',
      },
      {
        PharmacyID: '#12458',
        name: 'Akbar Sarkar',
        Comment: 'Your Document has been approved',
        City: 'Lhr',
        JoiningDate: '5-4-2020',
      },
      {
        PharmacyID: '#12458',
        name: 'Akbar Sarkar',
        Comment: 'Your Document has been approved',
        City: 'Lhr',
        JoiningDate: '5-4-2020',
      },
      {
        PharmacyID: '#12458',
        name: 'Akbar Sarkar',
        Comment: 'Your Document has been approved',
        City: 'Lhr',
        JoiningDate: '5-4-2020',
      },
      {
        PharmacyID: '#12458',
        name: 'Akbar Sarkar',
        Comment: 'Your Document has been approved',
        City: 'Lhr',
        JoiningDate: '5-4-2020',
      },
      {
        PharmacyID: '#12458',
        name: 'Akbar Sarkar',
        Comment: 'Your Document has been approved',
        City: 'Lhr',
        JoiningDate: '5-4-2020',
      },
      {
        PharmacyID: '#12458',
        name: 'Akbar Sarkar',
        Comment: 'Your Document has been approved',
        City: 'Lhr',
        JoiningDate: '5-4-2020',
      },
  ];
  return (
    <>
          <div className='mt-4' style={{ maxHeight: '90vh', overflowY: 'auto' }}>
        <table className='table'>
          <thead>
            <tr>
              <th scope='col'>Sr.</th>
              <th scope='col'>Personal I'D</th>
              <th scope='col'>Name</th>
              <th scope='col'>City</th>
              <th scope='col'>Comment</th>
              <th scope='col'>Joining Date</th>
              <th scope='col'>View Detail</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((data, index) => (
              <tr key={index}>
                <th scope='row'>{index + 1}</th>
                <th
                  scope='row '
                  className='text-secondary'
                  style={{ fontWeight: 'normal' }}
                >
                  {data.PharmacyID}
                </th>
                <td className='d-flex '>
                  <img
                    src='https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1476&q=80'
                    className='rounded-4 me-2'
                    alt=''
                    style={{
                      objectFit: 'cover',
                    }}
                    width='30px'
                  />
                  <p className='m-0 pt-2' style={{fontSize:' '}}>{data.name}</p>
                </td>
                <td style={{fontSize:' '}}>{data.City}</td>
                <td style={{fontSize:' '}}>{data.Comment}</td>
                <td className='text-secondary' style={{fontSize:' '}}>{data.JoiningDate}</td>
                <td>
                    <Link to='/Detail'>
                  <button
                    className='px-5 py-1 '
                    style={{
                      backgroundColor: '#2469FB',
                      color: '#fff',
                      border: 'none',
                      borderRadius: '22px',
                    }}
                  >
                    View Detail
                  </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    
    </>
  )
}

export default DoctorList