import React from 'react'
import './Home.css'
import { Header } from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import loginImg from '../../assets/login.svg'

export const Home = () => {
  return (
    <>
    <Header />
    <section className='container hero'>
      <div className='hero-text'>
        <h2>Ultimate MERN Stack Authentication System</h2>
        <p>Learn to create a comprehensive authentication system using React, Node, Express, and MongoDB.</p>
        <p>Gain the skills to incorporate user registration, login, password reset, social login, user permissions, email notifications, and more.</p>
        <div className='hero-buttons --flex-start'>
          <button className='--btn --btn-danger'>Get Started</button>
          <button className='--btn --btn-primary'>Learn More</button>
        </div>
        </div>
        <div className='hero-image'>
          <img src={loginImg} alt='Login' />
        </div>
    </section>
    <Footer />
    </>
  )
}
