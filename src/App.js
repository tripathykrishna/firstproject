
import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



function App() {
  const [mode, setMode] = useState('dark');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }

  const toggleMode = () => {
    console.log('called');
    if (mode === 'light') {
      // setMode('dark');
      document.body.style.backgroundColor = '#18183a'
      showAlert("Dark mood has been enabled", "success");
      document.titel = 'TextUtils - Dark Mode'
    }
    else {
      // setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mood has been enabled", "success");
      document.titel = 'TextUtils - Light Mode'
    }
  }
  return (
    <>

      <BrowserRouter>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert Alert={alert} />
        <Routes>
          {/* <div className="container my-3"></div> */}
          <Route path="/about" element={<About mode={mode}/>} />



          <Route path="/" element={
          <TextForm showAlert = {showAlert} heading="Try TextUtils - Word Counter , Character Counter , Remove Extra Spaces " mode={mode}/>} />



        </Routes>
      </BrowserRouter>
      <div className="container my-3"></div>
    </>

  );
}

export default App;





