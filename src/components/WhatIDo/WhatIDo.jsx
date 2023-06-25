import React from 'react'
import Title from '../Layouts/Title'
import Card from './Card'

const WhatIDo = () => {
  return (
    <section id='WhatIDo' className='w-full pb-20 pt-16 border-b-[1px] border-b-black'>
      <Title title='What I Do'/>
      <div className='grid grid-cols-3 gap-16'>
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  )
}

export default WhatIDo