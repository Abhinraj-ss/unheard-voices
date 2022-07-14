import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import UvForm from './components/UVform/UvForm';
import UvView from './components/UVview/UvView';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="/UVform" element={<UvForm/>}/>
        <Route path="/uvid=:uvId" element={<UvView/>} />
        {/* <Route path="*" element={<PageNotFound/>} /> */}
      </Routes>
  </BrowserRouter>
);