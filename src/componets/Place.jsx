import React, {useState} from 'react'


const Place = () => {
    const [mainPic, setMainPic] = useState('/assets/gallery-2.jpeg')

  return (
    <section className = 'place section' id = 'place'>
        <div className='place__container container' >
            <h2 className= 'section__title'>
                Make yourself at home!
            </h2>
            <div className='place__content grid'>
                <div className ='place__images'>
                    <img src={mainPic}
                    alt='no image'
                    className='place__img-big'
                    />
                    <div className='place__img-smalls'>
                        <img src='/assets/gallery-2.jpeg'
                        alt='no image'
                        className={`place__img-small ${mainPic === '/assets/gallery-2.jpeg' ? 'active' : ''}`}
                        onClick={() => {setMainPic('/assets/gallery-2.jpeg')}}
                        />
                        <img src='/assets/gallery-3.jpeg'
                        alt=''
                        className={`place__img-small ${mainPic === '/assets/gallery-3.jpeg' ? 'active' : ''}`}
                        onClick={() => {setMainPic('/assets/gallery-3.jpeg')}}
                        />
                        <img src='/assets/gallery-4.jpeg'
                        alt='no images'
                        className={`place__img-small ${mainPic === '/assets/gallery-4.jpeg' ? 'active' : ''}`}
                        onClick={() => {setMainPic('/assets/gallery-4.jpeg')}}
                        />
                    </div>
                </div>

                <div className='place__data'>
                    <h2 className='place__title'>Find a place you love</h2>
                    <p className='place__description'>We provide a nice, relaxing, and peaceful enviorment <br />
                     for you to enjoy your time
                     </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Place;