import React from 'react'
import LeftSide from './LeftSide'
import { RightSide } from './RightSide'
import "../Styles/styles.css"

const Home = () => {
  return (

    <div className='Home'>
        <LeftSide/>

        <RightSide/>
    </div>
    
  )
}

export default Home