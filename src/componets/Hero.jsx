import React from 'react'

const Hero = () => {

  const orderNow = () => {
    window.scrollTo({
      top: 1150,
      behavior: 'smooth'
    })
  }
  return (
    <section className='hero section' id='home'>
      <h1 className = 'hero__title'>
        Start Your Day The Right Way
      </h1>
      <button className='hero__button' onClick = {orderNow}>Order Now</button>
    </section>
  )
}

export default Hero;


