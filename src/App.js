import './App.css';

import axios from 'axios';
import Navbar from "./components/Navbar";
import Main from './components/Main'
import Home from "./pages/Home"
import {Route, Routes} from 'react-router-dom';


function App(){
  return(
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
