import { Button, Card, Row } from 'react-bootstrap'
import {FaAngleDoubleUp,FaAngleDoubleDown} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

import './SearchCard.css'

function SearchCard({uvData}) {
    const navigate =  useNavigate()
    const colors = {1:"#097969",2:"#FFC000",3:"red"}
    return (
        <div className='SearchCard'>
            <Card style={{backgroundColor:'#BEE0FF',boxShadow:"0 0 20px"+colors[uvData.severity], borderColor:colors[uvData.severity]}} body>
                <Row>
                <div className="content col-10">
                    <p>
                    UV - {uvData.uv_id}
                    </p>
                    <h4>
                    {uvData.accused}
                    </h4>
                    <Button onClick={()=>navigate(`/uvid=${uvData.uv_id}`)}>
                        Hear it
                    </Button>
                </div>
                <div className='votes col-auto'>
                    <span>
                        <FaAngleDoubleUp className='arrow' size={42} color='#05E150' />
                        <h5 style={{marginBottom:'auto'}}>
                            {uvData.upvotes}
                        </h5>
                    </span>
                    <span>
                        <h5 style={{marginTop:'auto'}}>
                            {uvData.downvotes}
                        </h5>
                        <FaAngleDoubleDown className='arrow' size={42} color='#F64C4C' />
                    </span>
                </div>
                </Row>
                <p>{ new Date(uvData.date).toLocaleDateString(['ban', 'id'])}</p>
            </Card>
        </div>
  )
}

export default SearchCard