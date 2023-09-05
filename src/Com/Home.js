import React from 'react'
import Navbar from './Navbar'
import MyForm from '../GoogleUrl'

const Home = () => {
  return (
    <>
    <Navbar/>
    <div
    className="hero"
    style={{ backgroundImage: 'url("images/hero_1.jpg")' }}
  />
  <MyForm/>
    </>
  )
}

export default Home
