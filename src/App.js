import React, {useState} from 'react';
import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
import Modal from './Components/PopUp/Popup';

function App () {
  const [modalActive, setModalActive] = useState(false);
  const [modalVariant, setModalVariant] = useState(true);

  const handleModalChange = (x) => {
    return setModalVariant(x)
  }
  
  const handleStateChange = () => {
    return setModalActive(true)
  }

  return (
  <div className='container'>
    <Header onChange = {handleStateChange}/>
    <Main />
    <Footer />
    <Modal active={modalActive} setActive={setModalActive} modal={modalVariant} handleChange={handleModalChange}/>
  </div>)
}

export default App;
