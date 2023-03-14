import React from 'react'

const Special = () => {
  return (
    <div className='special section container' id='special'>
        <div className='special__container'>
            <div className='special__box'>
                <h2 className='section__title'>
                    Best coffee that makes you <br />
                    happy and cheers you up!
                </h2>
            </div>
            <div className='special__category'>
                <div className='special__group'>
                    <div className='special__img__border'>
                        <img src='./assets/coffee-beans.png' alt='' className='special__img'/>
                    </div>
                    <h3 className='special__title'>Original Coffee</h3>
                    <p className='special__description'>We select the freshest coffee beans for a true taste.
                    </p>
                </div>
                <div className='special__group'>
                    <div className='special__img__border'>
                        <img src='./assets/hot-drink.png' alt='' className='special__img' />
                    </div>
                    <h3 className='special__title'>Hot Coffee</h3>
                    <p className='special__description'>
                        Enjoy a nice hot sip of your favorite brew
                    </p>
                </div>
                <div className='special__group'>
                    <div className='special__img__border'>
                        <img src='./assets/coffee-cup.png' alt='' className='special__img' />
                    </div>
                    <h3 className='special__title'>Iced Coffee</h3>
                    <p className='special__description'>
                        Enjoy a bit of chill with your caffeine
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Special;