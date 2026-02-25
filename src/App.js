import './App.css';
import Navbar from './components/Navbar.js';
import Home from './components/Home.js';
import About from './components/About.js';
import NoteState from './context/notes/NoteState.js';
import {
  Route,
  Routes,
  BrowserRouter
} from 'react-router-dom';
import Login from './components/Login.js';
import Signup from './components/Signup.js';
import { useState } from 'react';
import Alert from './components/Alert.js';
// import Notes from './components/Notes.js';

const App = () => {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    }, 1600);
  }
  return (
    <>
      <NoteState>
        <BrowserRouter>
          <Navbar />
          <Alert alert={alert} />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home showAlert={showAlert} />} />
              <Route path="/About" element={<About />} />
              <Route path="/Login" element={<Login showAlert={showAlert}/>} />
              <Route path="/Signup" element={<Signup showAlert={showAlert}/>} />
            </Routes>
          </div>
        </BrowserRouter>
      </NoteState>
    </>
  );
}

export default App;
