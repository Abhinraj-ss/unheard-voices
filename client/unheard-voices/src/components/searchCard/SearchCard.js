import React from 'react'
import { Button, Card, Row } from 'react-bootstrap'
import {FaAngleDoubleUp,FaAngleDoubleDown} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

import './SearchCard.css'

function SearchCard({uvData}) {
    const navigate =  useNavigate()
    return (
        <div className='SearchCard'>
            <Card style={{backgroundColor:'#BEE0FF'}} body>
                <Row>
                <div className="content col-10">
                    <p>
                    UV - {uvData.uv_id}
                    </p>
                    <h4>
                    {uvData.accused}
                    </h4>
                    <Button onClick={()=>navigate(`/uvid=${uvData.uv_id}`)}>
                        view
                    </Button>
                </div>
                <div className='votes col-auto'>
                    <span>
                        <FaAngleDoubleUp size={42} color='#05E150' />
                        <h5 style={{marginBottom:'auto'}}>
                            {uvData.upvotes}
                        </h5>
                    </span>
                    <span>
                        <h5 style={{marginTop:'auto'}}>
                            {uvData.downvotes}
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