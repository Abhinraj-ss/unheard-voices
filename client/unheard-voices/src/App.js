import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, FormControl,FormGroup} from 'react-bootstrap'

import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <div className="hero">
        <h1>
        Unheard Voices
        </h1>
        <p>
        It’s time to end the era of <b>suppression</b> now its time for the ultimate <b>explosion</b>.
        </p>
        <div className='search'>
          <FormControl type='text' placeholder='Enter complaint ID'/>
          <Button>
            Search
          </Button>
        </div>
        
      </div>
      <Button>
          Raise a complaint
        </Button>
      <div className="whatIsUV">
        <h3>
          WHAT IS UNHEARD VOICES ?
        </h3>
        <p>
        Your voices might have suppressed by any institute or you have something to raise to the higher authority about your concern but you dont have the confidence to present it in front of them OR you are sure that no actions will be taken on your complaint . So, This is a platform for you, Here you  can  raise your  unheard voices  as  the first step  of roar.  
        </p>
      </div>
      <div className="whatUVDo">
        <h3>WHAT UNHEARD VOICES DO?</h3>
        <p><b>UNHEARD VOICES</b> will help you to resolve your issue by spreading your issue anonymously. 
        </p>
        <span>
          <p>
            <ul>
              <li>
                You can start by clicking <b>Raise a Complaint</b>. Write about your issue  or concern is and to which institute it belongs to. 
              </li>
              <li>
              After submitting .
          <ul>
            <li>
              An anonimous post will be posted on UNHEARD VOICES official facebook page
            </li>
            <li>
              You will get an option to share or download the  UNHEARD VOICES revolutionary card., this card can be shared among your colleuges or friends and make them post it on social medias.
            </li>
          </ul>
              </li>
              <li>
              Anyone can view your anonymous complaint by you using the unique complaint ID. Supporters can UPVOTE your complaint as a token of support.

              </li>
            </ul>
          
          </p>
        </span>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
