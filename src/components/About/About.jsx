import React from 'react'

import wave from '../../assets/wave.png'

const About = () => {
  return (
    <section className='flex flex-col justify-center items-center'>
      <img src={wave} alt='memoji saying hi' className='h-[50%] w-[50%]' />
      <div>
        <h2>About myself</h2>

      </div>

    </section>
  )
}

export default About