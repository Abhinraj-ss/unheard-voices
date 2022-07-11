import {FaFacebook,FaGithub,FaInstagram,FaRegCopyright} from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'

import './Footer.css'
function Footer() {
  return (
    <div className='Footer'>
        <h4>Unheard Voices</h4>
        <IconContext.Provider  value={{color:'#158FC3'}}>
            <div className="social">
                <a rel="noreferrer" href="/"><FaFacebook/></a>
                <a rel="noreferrer" href="https://github.com/Abhinraj-ss"><FaGithub/></a>
                <a rel="noreferrer" href="/"><FaInstagram/></a>
            </div>
            <span className='copyright'><FaRegCopyright/> &nbsp;2022 Unheard Voices , All Rights Reserved.</span>
        </IconContext.Provider>
    </div>
  )
}
export default Footer