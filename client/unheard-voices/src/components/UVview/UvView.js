import { useEffect, useState ,useRef} from 'react'
import {Row,Button} from 'react-bootstrap'
import {FaAngleDoubleUp,FaAngleDoubleDown,FaFileDownload,FaArrowLeft} from 'react-icons/fa'
import { useNavigate,useParams } from "react-router-dom";
import axios from 'axios';
import Lottie from 'lottie-react'

import Footer from '../footer/Footer'
import Header from '../header/Header'
import UvCard from '../../Assets/UvCard';
import './UvView.css'
import logo from '../../Assets/uv-logo.json'

function UvView() {
    let navigate = useNavigate();
    const params = useParams()
    const [uvData, setUVData] = useState(false)
    const [upvotes,setUpvotes] = useState(0)
    const [downvotes,setDownvotes] = useState(0)
    const [accusedArr, setAccusedArr] = useState([])
    const [descArr, setDescArr] = useState([])
    const [accused, setAccused] = useState()
    const [desc, setDesc] = useState()
    const [showCard, setShowCard] = useState(false)
    const cardRef = useRef(null)
    const colors = {1:"white",2:"#ffc107c5",3:"#f23b4dd2"}
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
              setUpvotes(response.data.upvotes)
              setDownvotes(response.data.downvotes)
              setAccusedArr((response.data.accused).split(" "))
              setDescArr((response.data.des_sm).split(" "))
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
            let count = 0
            let tmp = [""]
            accusedArr.forEach(
              (element)=>{
                if(tmp[count] === "Accused name comes here."){
                  tmp[count]=""
                }
                else if((tmp[count]+" "+element).length <= 30){
                  tmp[count] += (" "+element)
                }
                else{
                  count+=1
                  tmp.push(element)
                }
              }
            )
            setAccused(tmp)
    
            count = 0
            tmp = [""]
            descArr.forEach(
              (element)=>{
                if(tmp[count] === "your issue in short comes here."){
                  tmp[count]=""
                }
                else if((tmp[count]+" "+element).length <= 34){
                  tmp[count] += (" "+element)
                }
                else{
                  count+=1
                  tmp.push(element)
                }
              }
            )
            setDesc(tmp)
            setShowCard(true)
          
        },[descArr]
      )

      
    
    const handleUpvotes= async()=>{
        setUpvotes(upvotes+1)
        await api.post("/upvote",{uvId:uvData.uv_id})
        .then(function (response) {
          console.log(response);
          if(response.status === 200){
            console.log(response.data)
            console.log("upvote Success!!");
          }
          else if(response.status === 201){
            console.log("upvote failed!!",response);
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    const handleDownvotes=async()=>{
        setDownvotes(downvotes+1)
        await api.post("/downvote",{uvId:uvData.uv_id})
        .then(function (response) {
          console.log(response);
          if(response.status === 200){
            console.log(response.data)
            console.log("downvote Success!!");
          }
          else if(response.status === 201){
            console.log("downvote failed!!",response);
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    useEffect(()=>{
      const svg =  document.getElementById('svg')
      if (svg !== null){
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
      }
    },[cardRef.current])

    const handleDownload = () =>{

    }
  return (<>
  {uvData?<>
    <Header/>
    <div className='UvView'>
          <Row>
              <div className="content col-10">
                  <p>
                  UV - {uvData.uv_id}
                  </p>
                  <p>
                    {new Date(uvData.date).toLocaleDateString(['ban', 'id'])}
                  </p>
                  <h4>
                  {uvData.accused}
                  </h4>
              </div>
              <div className='votes col-auto'>
                  <span>
                      <FaAngleDoubleUp className='arrow jumpUp' size={42} color='#05E150' onClick={handleUpvotes} />
                      <h5 style={{marginBottom:'auto'}}>
                          {upvotes}
                      </h5>
                  </span>
                  <span>
                      <h5 style={{marginTop:'auto'}}>
                          {downvotes}
                      </h5>
                      <FaAngleDoubleDown className='arrow jumpDown' size={42} color='#F64C4C' onClick={handleDownvotes} />
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
          {showCard &&
            <div ref={cardRef} className="d-flex mx-auto uvCard">
                <UvCard  uvID = {uvData.uv_id} date={new Date(uvData.date).toLocaleDateString(['ban', 'id'])} accent={colors[uvData.severity]} accusedArr = {accused} descArr={desc} />
            </div>
          }
          <a href="" id="link" download={"UV-"+uvData.uv_id} onClick={console.log("clicked")} >
            <Button>
                <FaFileDownload/> Download UV Card
            </Button>
          </a>
        
        <Button onClick={()=>navigate('/')}>
           <FaArrowLeft/> Go back
        </Button>
        <span className='tagLine'>
        Its' time to end the era of <b>suppression</b> now its time for the ultimate <b>explosion</b>.
        </span>
    </div>
        <Footer/>
    </>:
    <Lottie className='loading' animationData={logo} loop={true}/>}
  </>
    
    
  )
}

export default UvView