import {useState} from 'react'
import { Card, Form, ButtonGroup,ToggleButton, Button, FormGroup, } from 'react-bootstrap'
import {FaFileDownload} from 'react-icons/fa'
import Footer from '../footer/Footer';
import Header from '../header/Header';

import './UvForm.css'
function UvForm() {
  const [radioValue, setRadioValue] = useState('1');
  const radios = [
    {  value: '1', color:'#198754' },
    {  value: '2',color:'#9acd32' },
    {  value: '3',color:'#FFEA00' },
    {  value: '4',color:'#FFA500' },
    {  value: '5',color:'#dc3545' },
  ];
  const [onHover, setOnHover] = useState(false)
  return (
    <>
    <Header/>
      <div className='UvForm'>
      
      <Card style={{backgroundColor:'#BEE0FF'}}>
        <Card.Header>
          <h5>Fill your Complaint</h5>
        </Card.Header>
        <Card.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label> Name of Organization </Form.Label>
              <Form.Control/>
            </Form.Group >
            <FormGroup className="mb-3">
              <Form.Label > Write about the issue In  less than 100 characters </Form.Label>
              <Form.Control as="textarea"/>
            </FormGroup>
            <FormGroup className="mb-3">
              <Form.Label> Write about the whole issue </Form.Label>
              <Form.Control as="textarea"/>
            </FormGroup>
              <Form.Label > Select the severity of the issue( in 1-5 scale ) &nbsp; &nbsp;</Form.Label>
              <ButtonGroup>
                {radios.map((radio, idx) => (
                  <ToggleButton
                    key={idx}
                    id={`radio-${idx}`}
                    type="radio"
                    variant='outline-primary'
                    name="radio"
                    value={radio.value}
                    style={onHover?{color:`#fff`,borderColor:`${radio.color}`,backgroundColor:`${radio.color}`}:{color:`${radio.color}`,borderColor:`${radio.color}`}}
                    checked={radioValue === radio.value}
                    onMouseEnter={()=>setOnHover(true)}
                    onMouseLeave={()=>setOnHover(false)}
                    onChange={(e) => setRadioValue(e.currentTarget.value)}
                  >
                    {radio.value}
                  </ToggleButton>
                ))}
              </ButtonGroup>
            <br/>
            <Button>Submit</Button>
          </Form>
          <span>
          On submit, a DOWNLOAD button will appear below. On click, you will get a unique Unheard Voices revolutionary card for sharing. Spread it anonymously.
          </span>
          <br/>
          <Button>
            <FaFileDownload/>
            &nbsp;Download
          </Button>
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