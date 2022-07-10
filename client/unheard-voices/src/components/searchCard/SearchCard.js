import React from 'react'
import { Button, Card, Row } from 'react-bootstrap'
import {FaAngleDoubleUp,FaAngleDoubleDown} from 'react-icons/fa'

import './SearchCard.css'

function SearchCard() {
  return (
    <div className='SearchCard'>
        <Card style={{backgroundColor:'#BEE0FF'}} body>
            <Row>

            <div className="content col-10">
                <p>
                UV -dsjbjdbf
                </p>
                <h4>
                Mr. XXXX College of Engineering, XColony
                </h4>
                <Button>
                    view
                </Button>
            </div>
            <div className='votes col-auto'>
                <span>
                    <FaAngleDoubleUp size={42} color='#05E150' />
                    <h5 style={{marginBottom:'auto'}}>
                        45
                    </h5>
                </span>
                <span>
                    <h5 style={{marginTop:'auto'}}>
                        45
                    </h5>
                    <FaAngleDoubleDown size={42} color='#F64C4C' />
                </span>
            </div>
            </Row>
        </Card>
    </div>
  )
}

export default SearchCard