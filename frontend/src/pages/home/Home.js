import React from 'react'
import './Home.css'
import loginImg from '../../assets/login.svg'
import { ShowOnLogout } from '../../components/protect/hiddenLink'
import LinkButton from '../../components/button/LinkButton'

export const Home = () => {
  return (
    <>
    <section className='container hero'>
      <div className='hero-text'>
        <h2>Ultimate MERN Stack Authentication System</h2>
        <p>Learn to create a comprehensive authentication system using React, Node, Express, and MongoDB.</p>
        <p>Develop the necessary skills to implement user registration, login, password reset, social login, user permissions, email notifications, and additional features.</p>
        <p>Take the first step!</p>
        <div className='hero-buttons flex-start'>
        <ShowOnLogout>
            <LinkButton to='/auth'>Auth</LinkButton>
        </ShowOnLogout>
        </div>
        </div>
        <div className='hero-image'>
          <img src={loginImg} alt='Login' />
        </div>
    </section>
    </>
  )
}