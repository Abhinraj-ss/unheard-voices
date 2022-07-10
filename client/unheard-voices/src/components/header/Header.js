import React from 'react'
import {FaArrowLeft} from 'react-icons/fa'

import './Header.css'

function Header() {
  return (
    <div className='Header' style={{backgroundColor:'#158FC3',color:'#E7F4FF', paddingBlock:'1em'}}>
        <FaArrowLeft size={30}/>
        <h2>
            <b>Unheard Voices</b>
        </h2>
    </div>
  )
}

export default Header