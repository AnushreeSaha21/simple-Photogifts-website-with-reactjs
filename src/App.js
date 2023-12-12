import './App.css';

import Login from './Components/Pages/Login';
import Signup from './Components/Pages/Signup';
import PhotoGifts from './Components/PhotoGifts';

import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
    <>
    
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<PhotoGifts/>}></Route>
          <Route path="/Login" element={<Login/>}></Route> 
          <Route path="/Signup" element={<Signup/>}></Route>

        </Routes>
        
  </BrowserRouter>  
    </>
  );
}

export default App;
