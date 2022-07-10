import React from 'react'
import {FaFacebook,FaGithub,FaInstagram,FaRegCopyright} from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'

import './Footer.css'
function Footer() {
  return (
    <div className='Footer'>
            <h4>Unheard Voices</h4>
        <IconContext.Provider  value={{color:'#158FC3'}}>
            <div className="social">
                <a href="/"><FaFacebook/></a>
                <a href="/"><FaGithub/></a>
                <a href="/"><FaInstagram/></a>
            </div>
            <span className='copyright'><FaRegCopyright/> &nbsp;2022 Unheard Voices , All Rights Reserved.</span>
        </IconContext.Provider>
    </div>
  )
}

export default Footer