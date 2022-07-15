import {useEffect, useState} from 'react'
import { Card, Form, ButtonGroup,ToggleButton, Button, FormGroup, Image } from 'react-bootstrap'
import {FaFileDownload,FaSuperpowers} from 'react-icons/fa'
import axios from 'axios'

import Footer from '../footer/Footer';
import Header from '../header/Header';

import './UvForm.css'
import UvCard from '../../Assets/UvCard';

function UvForm() {
  const [url,setUrl] = useState(()=>{
    if(process.env.NODE_ENV==='production'){
      return "https://unheard-voices-backend.herokuapp.com" 
    } else if(process.env.NODE_ENV==='development')
      return "http://localhost:5000"
  } )
  const api = axios.create({
    baseURL: url
  })

  const [radioValue, setRadioValue] = useState('1');
  const radios = [
    {  value: '1', varient:'outline-success' },
    {  value: '2', varient:'outline-warning' },
    {  value: '3', varient:'outline-danger'  },
  ];
  const colors = {1:"white",2:"#ffc107c5",3:"#f23b4dd2"}

  const [rotate, setRotate] =  useState(false)
  const [validated, setValidated] = useState(false);
  const [submitted, setSubmitted] = useState(false)
  const uvData = {}
  const [uvID, setUvID] = useState("{your UV-ID}")
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  const [accusedArr, setAccusedArr] = useState([""])
  const [descArr, setDescArr] = useState([""])
  const [accused, setAccused] = useState(["Accused name comes here."])
  const [desc, setDesc] = useState(["your issue in short comes here."])

  const handleValidate =(event) =>{
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    else{
      event.preventDefault();
      event.stopPropagation();
      handleSubmit(event)
    }
    setValidated(true);
  }

  const handleSubmit = (e)=>{
    setRotate(true)
    let formData = [...e.target]
    formData.forEach(element => {
      if(element.name !== "" && element.name !== "severity")
        uvData[element.name] = element.value
    })
    uvData['severity'] = radioValue
    console.log(uvData)
    api.post(
      '/add',{'uvData' : uvData}
    )
    .then(function (response) {
      console.log(response);
      if(response.status === 200){
        setUvID(response.data)
        setRotate(false)
        setSubmitted(true)
        console.log("UV data added!!");
        
      }
         
      else if(response.status === 201){
        console.log("UV data adding unsuccessfull!!",response);
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  } 

  useEffect(()=>{
    const svg =  document.getElementById('svg')
    const {x, y, width, height} = svg.viewBox.baseVal;
    const blob = new Blob([svg.outerHTML], {type: 'image/svg+xml'})
    const url = URL.createObjectURL(blob)
    const image = document.createElement('img');
    image.src = url;
    image.addEventListener('load' , ()=>{
      const canvas = document.createElement('canvas')
      canvas.width = width;
      canvas.height =  height;
      const context = canvas.getContext('2d')
      context.drawImage(image,x,y,width,height)
      const link = document.getElementById('link')
      if(link != null){
        link.href = canvas.toDataURL()
      }
      URL.revokeObjectURL(url)
    })
  },[submitted])

  useEffect(()=>{
    let count = 0
    accused.length = 0
    accused.push("")
    accusedArr?.forEach(
      (element)=>{
        if((accused[count]+" "+element).length <= 30){
          accused[count] += (" "+element)
        }
        else{
          count+=1
          accused.push(element)
        }
      }
    )
  },[accusedArr])

  useEffect(()=>{
    let count = 0
    desc.length = 0
    desc.push("")
    descArr?.forEach(
      (element)=>{
        if((desc[count]+" "+element).length <= 34){
          desc[count] += (" "+element)
        }
        else{
          count+=1
          desc.push(element)
        }
      }
    )
  },[descArr])

  return (
    <>
    <Header/>
      <div className='UvForm'>
      
      <Card style={{backgroundColor:'#6bbee19b'}}>
        <Card.Header>
          <h5>Fill your Complaint</h5>
        </Card.Header>
        <Card.Body>
          <Form noValidate validated={validated} onSubmit={handleValidate}>
            <Form.Group className="mb-3">
              <Form.Label > Name of the Accused </Form.Label>
              <Form.Control name="name" type="text" maxLength={150} onChange={(e)=>setAccusedArr(e.target.value.split(" "))} required />
              <Form.Control.Feedback type="invalid">
                Title is a required field.
              </Form.Control.Feedback>
            </Form.Group >
            <FormGroup className="mb-3">
              <Form.Label > Write about the issue In  less than 200 characters </Form.Label>
              <Form.Control as="textarea" type="text" name="des_sm" minLength={10} maxLength={200} onChange={(e)=>setDescArr(e.target.value.split(" "))} style={{height:"10vmax"}} required/>
              <Form.Control.Feedback type="invalid">
                Title is a required field of minimum 10 characters.
              </Form.Control.Feedback>
            </FormGroup>
            <FormGroup className="mb-3">
              <Form.Label> Write about the whole issue </Form.Label>
              <Form.Control as="textarea" type="text" name="des_lg" minLength={10} maxLength={1000} style={{height:"25vmax"}} required/>
              <Form.Control.Feedback type="invalid">
                Title is a required field of minimum 10 characters.
              </Form.Control.Feedback>
            </FormGroup>
              <Form.Label > Select the severity of the issue( in 1-3 scale ) &nbsp; &nbsp;</Form.Label>
              <ButtonGroup >
                {radios.map((radio, index) => (
                  <ToggleButton
                    key={index}
                    name="severity" 
                    id={`radio-${index}`}
                    type="radio"
                    variant={radio.varient}
                    value={radio.value}
                    style={{border:"1px solid", fontWeight:"600"}}
                    checked={radioValue===radio.value}
                    onChange={(e) => setRadioValue(e.currentTarget.value)}
                  >
                    {radio.value}
                  </ToggleButton>
                ))}
              </ButtonGroup> 

            <br/>
            <Button type="submit">
              <FaSuperpowers size={20} className="submitRotate" data-rotate={rotate}/>&nbsp;Submit
            </Button>
          </Form>
          <span>
          Submit and grab your unique Unheard Voices revolutionary card. Spread it anonymously.
          </span>
          <br/>
            <div className="d-flex mx-auto uvCard">
              <UvCard uvID = {uvID} date={date} accent={colors[radioValue]} accusedArr = {accused} descArr={desc}/> 
            </div>
            {submitted &&
              <a href="" id="link" download={"UV-"+uvID}>
              <Button>
              <FaFileDownload/> Download
              </Button>
              </a>
            }  
            
            
          
          
        </Card.Body>
      </Card>
      <span>
      Its' time to end the era of <b>suppression</b> now its time for the ultimate <b>explosion</b>.
      </span>
    </div>
    <Footer/>
    </>
    
  )
}

export default UvForm