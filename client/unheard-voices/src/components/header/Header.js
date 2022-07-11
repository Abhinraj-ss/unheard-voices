import { FaArrowLeft } from 'react-icons/fa'
import { useNavigate } from "react-router-dom";

import './Header.css'

function Header() {
  let navigate = useNavigate()
  return (
    <div className='Header' style={{backgroundColor:'#158FC3',color:'#E7F4FF', paddingBlock:'1em'}}>
        <FaArrowLeft className='backArrow' size={30} onClick={()=>navigate('/')}/>
        <h2>
          <b>Unheard Voices</b>
        </h2>
    </div>
  )
}

export default Header