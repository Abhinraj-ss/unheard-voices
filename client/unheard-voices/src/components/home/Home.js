import React from 'react'
import {Button, FormControl, InputGroup} from 'react-bootstrap'

import SearchCard from '../searchCard/SearchCard';
import './Home.css'

function Home() {
  return (
    <div className='Home'>
        <div className="hero">
        <h1>
        Unheard Voices
        </h1>
        <p>
        Its' time to end the era of <b>suppression</b> now its time for the ultimate <b>explosion</b>.
        </p> 
        <div className='search'>
          <InputGroup>
          <InputGroup.Text>UV-</InputGroup.Text>
          <FormControl type='text' placeholder='Enter complaint ID'/>
          </InputGroup>
          <Button>
            Search
          </Button>
        </div>
        <h4>
        Registered Complaints : <b>4233</b>
        </h4>
        <Button>
          Raise a complaint
        </Button>
      </div>
        
        <div className="searchResult">
          <SearchCard/>
        </div>
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
          <p>
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
          
          </p>
        </span>
      </div>
    </div>
  )
}

export default Home