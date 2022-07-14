import {Button, Form, FormControl, Image, InputGroup} from 'react-bootstrap'
import Footer from '../footer/Footer';
import axios from "axios"
import {useNavigate} from 'react-router-dom'
import {FaSuperpowers} from 'react-icons/fa'

import SearchCard from '../searchCard/SearchCard';
import './Home.css'
import { useEffect, useState } from 'react';
import logo from '../../Assets/uv-logo.svg'

function Home() {
  const [uvId ,setUvID] = useState(false)
  const [uvData , setUVData] = useState(true)
  const[count , setCount] = useState(0)
  const [ rotate, setRotate] = useState(false)
  console.log(uvId)
  const navigate = useNavigate()
  const [url,setUrl] = useState(()=>{
    if(process.env.NODE_ENV==='production'){
      return "https://unheard-voices-backend.herokuapp.com" 
    } else if(process.env.NODE_ENV==='development')
      return "http://localhost:5000"
  } )
  const api = axios.create({
    baseURL: url
  })
  const handleSubmit = async(event) =>{
    event.preventDefault();
    event.stopPropagation();
    if(uvId)
      setRotate(true)
    await api.post("/",{uv_id:uvId})
    .then(function (response) {
      console.log(response);
      if(response.status === 200){
        console.log(response.data)
        setUVData(response.data)
        setRotate(false)
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
  useEffect(
    ()=>{
      getCount()
      async function getCount(){
        api.post(
          '/count'
        )
        .then(function(response){
          console.log(response)
          if(response.status === 200){
            console.log(response.data)
            setCount(response.data)
            console.log("UV data exists!!");
          }
             
          else if(response.status === 201){
            console.log("no UV data exists!!",response);
          }
        })
        .catch(function (error) {
          console.log(error);
        });
      }},[]
  )
  return (
    <div className='Home'>
        <div className="hero">
          <Image
          alt='uv-logo'
          src={logo}
          width={80}/>
        <h1>
        Unheard Voices
        </h1>
        <p>
        Its' time to end the era of <b>suppression</b> now its time for the ultimate <b>explosion</b>.
        </p> 
        <Form className='search'onSubmit={(e)=>handleSubmit(e)}>
          <InputGroup >
          <InputGroup.Text>UV -</InputGroup.Text>
          <FormControl type='text' placeholder='Enter complaint ID' onChange={(e)=>setUvID(e.target.value)}/>
          </InputGroup>
          <Button onClick={(e)=>handleSubmit(e)} type='submit'>
            <FaSuperpowers className="submitRotate" size={20} data-rotate={rotate}/> &nbsp;Search
          </Button>
        </Form>
        <h4>
        Registered Complaints : <b>{count}</b>
        </h4>
        <Button onClick={()=>navigate('/UVform')}>
          Raise a complaint
        </Button>
      </div>
        {
          uvData &&
          <div className="searchResult">
          <SearchCard uvData = {uvData}/>
          </div>
        }
        
      <div className="whatIsUV">
        <h3>
          WHAT IS UNHEARD VOICES ?
        </h3>
        <p>
        Your voices might have been suppressed by any organization or you have something to raise to the higher authority about your concern but you don't have the confidence to present it in front of them OR you are sure that no actions will be taken on your complaint. So, This is a platform for you, Here you can raise your unheard voices as the first step of roar.        </p>
      </div>
      <div className="whatUVDo">
        <h3>WHAT UNHEARD VOICES DO?</h3>
        <p><b>UNHEARD VOICES</b> will help you to resolve your issue by spreading your issue anonymously. 
        </p>
        <span>
            <ul>
              <li>
                You can start by clicking <b>Raise a Complaint</b>. Write about your issue or concern and to which organization it belongs. 
              </li>
              <li>
              On submit .
          <ul>
            <li>
              An anonimous post will be posted on UNHEARD VOICES official Facebook page
            </li>
            <li>
            You will get an option to share or download the UNHEARD VOICES revolutionary card, this card can be shared among your colleagues or friends and make them post it on social media.            </li>
          </ul>
              </li>
              <li>
              Anyone can view your anonymous complaint by you using the unique complaint ID. Supporters can UPVOTE your complaint as a token of support.
              </li>
            </ul>
        </span>
      </div>
      <Footer/>
    </div>
  )
}

export default Home