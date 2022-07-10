import {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router, Route, Routes
} from "react-router-dom";

import './App.css';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import Header from './components/header/Header';
import UvForm from './components/UVform/UvForm';
import UvView from './components/UVview/UvView';

function App() {
  const [showHeader, setShowHeader] = useState(false)
  return (
    <div className="App">
      {
        showHeader &&
        <Header/>
      }
      <Router>
          <Home/>
        
        <UvForm/>
        <UvView/>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
