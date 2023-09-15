import React from 'react'
import './Home.scss'
import loginImg from '../../assets/login.svg'
import { Link } from 'react-router-dom'
import { ShowOnLogout } from '../../components/protect/hiddenLink'

export const Home = () => {
  return (
    <>
    <section className='container hero'>
      <div className='hero-text'>
        <h2>Ultimate MERN Stack Authentication System</h2>
        <p>Learn to create a comprehensive authentication system using React, Node, Express, and MongoDB.</p>
        <p>Develop the necessary skills to implement user registration, login, password reset, social login, user permissions, email notifications, and additional features.</p>
        <p>Take the first step!</p>
        {/* <p>Discover more.</p> */}
        <div className='hero-buttons --flex-start'>
        <ShowOnLogout>
          <button className='btn'>
            <Link className="btn btn-primary" to='/auth'>Auth</Link>
          </button>
        </ShowOnLogout>
          {/* <button className='--btn --btn-primary'>Learn More</button> */}
        </div>
        </div>
        <div className='hero-image'>
          <img src={loginImg} alt='Login' />
        </div>
    </section>
    </>
  )
}
