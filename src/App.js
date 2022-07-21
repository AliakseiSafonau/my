import React, {useState} from 'react';
import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
import Modal from './Components/PopUp/Popup';

function App () {

  const [modalActive, setModalActive] = useState(true)

  return (
  <div className='container'>
    <Header />
    <Main />
    <Footer />
    <Modal active={modalActive} setActive={setModalActive}/>
  </div>)
}

export default App;
