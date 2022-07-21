import React from 'react';
import './Popup.css';
import Facebook from 'C:/Users/pharm/Desktop/React/my/src/Img/Facebook Logo.png';
import Google from 'C:/Users/pharm/Desktop/React/my/src/Img/Google Logo.png';

const Modal = ({active, setActive}) => {
    return (
        <div className='modal'>
            <div className='modal-content'>
                <div className='logIn'>Log in to your account</div>
                <button className='facebook-btn' type='submit'>
                    <img src={Facebook} alt="Facebook"></img>
                    Sign In with Facebook
                </button>
                <button className='Google-btn' type='submit'>
                    <img src={Google} alt="Facebook"></img>
                    Sign In with Google
                </button>
                <hr className='half left-line'></hr>
                <span className='or'>or</span>
                <hr className='half right-line'></hr>
                <p className='input-title'>E-mail</p>
                <input className='text-inpt' type='email'></input>
                <p className='input-title'>Password</p>
                <input className='text-inpt' type='password'></input>
                <button className='signIn-btn' type='submit'>Sign In</button>
                <div className='forgot'>Forgot Your Password?</div>
                <hr className='bottom-line'></hr>
                <div className='register'>Don’t have an account? <span className='regist'>Register</span></div>
            </div>
        </div>
    );
};

export default Modal;