import '../styles/PageStlyles/Photos.scss'
import { useState, useEffect } from 'react'
import fruit from '../assets/fruit1.png'
import fruit1 from '../assets/fruits.png'
import ice from '../assets/icecreem.png'
import smile from '../assets/personSmile.png'


const Photos = () => {  
  return (
    <div className='PhotosPage' >
      <div className="heads">
        <h2>Your Photos</h2>
        <div className="headers">
          <span>Photo About You</span>
          <span>Your Photos</span>
          <span>Albums</span>
        </div>
        <div className="total">
          <h4>Total Photos</h4>
          <span>42 Total Photos About You</span>
         
        </div>
      </div>      
      <div className="list">
        <img src={fruit} alt="nopic" />
        <img src={fruit1} alt="nopic" />
        <img src={ice} alt="nopic" />
        <img src={smile} alt="nopic" />

        <img src={smile} alt="nopic" />
        <img src={ice} alt="nopic" />
        <img src={fruit1} alt="nopic" />
        <img src={fruit} alt="nopic" />

        <img src={ice} alt="nopic" />
        <img src={fruit} alt="nopic" />
        <img src={smile} alt="nopic" />
        <img src={fruit1} alt="nopic" />

      </div>

    </div>
  )
}

export default Photos