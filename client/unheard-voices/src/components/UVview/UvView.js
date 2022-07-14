import { useEffect, useState } from 'react'
import {Row,Button} from 'react-bootstrap'
import {FaAngleDoubleUp,FaAngleDoubleDown,FaFileDownload,FaArrowLeft} from 'react-icons/fa'
import { useNavigate,useParams } from "react-router-dom";
import axios from 'axios';

import Footer from '../footer/Footer'
import Header from '../header/Header'

import './UvView.css'

function UvView() {
    let navigate = useNavigate();
    const params = useParams()
    const [uvData, setUVData] = useState(false)
    const [upvotes,setUpvotes] = useState(uvData.upvotes)
    const [downvotes,setDownvotes] = useState(uvData.downvotes)
    const [url,setUrl] = useState(()=>{
        if(process.env.NODE_ENV==='production'){
          return "https://unheard-voices-backend.herokuapp.com" 
        } else if(process.env.NODE_ENV==='development')
          return "http://localhost:5000"
      } )
      const api = axios.create({
        baseURL: url
      })
      useEffect(()=>{
        getData()
      },[])
    const getData = async() =>{
        await api.post("/",{uv_id:params.uvId})
        .then(function (response) {
          console.log(response);
          if(response.status === 200){
            console.log(response.data)
            setUVData(response.data)
            console.log("UV data exists!!");
          }
          else if(response.status === 201){
            console.log("no UV data exists!!",response);
          }
        })
        .catch(function (error) {
          console.log(error);
        });
      }
    const handleUpvotes=()=>{
        setUpvotes(upvotes+1)
    }
    const handleDownvotes=()=>{
        setDownvotes(downvotes+1)
    }
  return (
    <>
    <Header/>
    <div className='UvView'>
        <Row>
            <div className="content col-10">
                <p>
                UV - {uvData.uv_id}
                </p>
                <h4>
                {uvData.accused}
                </h4>
            </div>
            <div className='votes col-auto'>
                <span>
                    <FaAngleDoubleUp size={42} color='#05E150' onClick={handleUpvotes} />
                    <h5 style={{marginBottom:'auto'}}>
                        {uvData.upvotes}
                    </h5>
                </span>
                <span>
                    <h5 style={{marginTop:'auto'}}>
                        {uvData.downvotes}
                    </h5>
                    <FaAngleDoubleDown size={42} color='#F64C4C' onClick={handleDownvotes} />
                </span>
            </div>
        </Row>
        <span>
            <p>
                {uvData.des_sm}
            </p>
        </span>
        <span>
            {uvData.des_lg}
        </span>
        <Button>
            <FaFileDownload/> Download UV Card
        </Button>
        <Button onClick={()=>navigate('/')}>
           <FaArrowLeft/> Go back
        </Button>
        <span className='tagLine'>
        Its' time to end the era of <b>suppression</b> now its time for the ultimate <b>explosion</b>.
        </span>
    </div>
        <Footer/>
    </>
    
  )
}

export default UvView