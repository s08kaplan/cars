"use client"
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import CarModel from 'src/components/Car/CarModel'
import LampModel from 'src/components/Lamp/LampModel'

const IntroScene = () => {
  const [time, settTme] = useState(5000)
const navigate = useNavigate()
  useEffect(() => {
   const timer = setTimeout(() => {
      navigate("/dashboard")
    }, time);
  
    return () => clearTimeout(timer)
  }, [])
  
  return (
    <section className='background-color-change min-w-dvw min-h-dvh'>
<LampModel/>
<h1 className='fixed top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 slide-in-right text-2xl'>AutoDen finds you what you need</h1>
<CarModel/>
    </section>
  )
}

export default IntroScene