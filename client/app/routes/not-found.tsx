import React from 'react'
import {Link} from 'react-router'

const NotFound = () => {
  return (
    <section className="h-[calc(100svh-64px)]" style={{backgroundImage:"url('/car-crash.avif')", backgroundRepeat:"no-repeat", backgroundPosition:"center",
        backgroundSize: "fit"}}>
      <Link to="/" className='text-white border border-amber-50 p-2 rounded-md'>Return Home</Link>
    </section>
  )
}

export default NotFound