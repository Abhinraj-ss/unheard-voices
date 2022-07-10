import React, { useState } from 'react'
import {Row,Button} from 'react-bootstrap'
import {FaAngleDoubleUp,FaAngleDoubleDown,FaFileDownload,FaArrowLeft} from 'react-icons/fa'

import './UvView.css'

function UvView() {
    const [upvotes,setUpvotes] = useState(45)
    const [downvotes,setDownvotes] = useState(45)
    const handleUpvotes=()=>{
        setUpvotes(upvotes+1)
    }
    const handleDownvotes=()=>{
        setDownvotes(downvotes+1)
    }
  return (
    <div className='UvView'>
        <Row>
            <div className="content col-10">
                <p>
                UV -dsjbjdbf
                </p>
                <h4>
                Mr. XXXX College of Engineering, XColony
                </h4>
            </div>
            <div className='votes col-auto'>
                <span>
                    <FaAngleDoubleUp size={42} color='#05E150' onClick={handleUpvotes} />
                    <h5 style={{marginBottom:'auto'}}>
                        {upvotes}
                    </h5>
                </span>
                <span>
                    <h5 style={{marginTop:'auto'}}>
                        {downvotes}
                    </h5>
                    <FaAngleDoubleDown size={42} color='#F64C4C' onClick={handleDownvotes} />
                </span>
            </div>
        </Row>
        <span>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt

            </p>
        </span>
        <span>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
         Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
         Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
         Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
        </span>
        <Button>
            <FaFileDownload/> Download UV Revolutionary card
        </Button>
        <Button>
           <FaArrowLeft/> Go back
        </Button>
        <span className='tagLine'>
        Its' time to end the era of <b>suppression</b> now its time for the ultimate <b>explosion</b>.
        </span>
    </div>
  )
}

export default UvView