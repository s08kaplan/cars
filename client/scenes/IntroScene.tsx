import React from 'react'
import CarModel from 'src/components/Car/CarModel'
import LampModel from 'src/components/Lamp/LampModel'

const IntroScene = () => {
  return (
    <section className='background-color-change min-w-dvw min-h-dvh'>
<LampModel/>
<CarModel/>
    </section>
  )
}

export default IntroScene