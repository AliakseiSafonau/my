import React from 'react';
import './Popup.css';
import Signin from './Signin';
import Signup from './Signup';

const Modal = ({active, setActive, modal, handleChange}) => {
    const changeModal = () => {
        return modal ? <Signin renderSign={handleChange}/> : <Signup renderSign={handleChange} />
    }

    return (
        <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
            {changeModal()}
        </div>
    );
};

export default Modal;