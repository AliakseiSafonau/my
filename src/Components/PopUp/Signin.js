import React from 'react';
import Facebook from 'C:/Users/pharm/Desktop/React/my/src/Img/Facebook Logo.png';
import Google from 'C:/Users/pharm/Desktop/React/my/src/Img/Google Logo.png';

const Signin = ({renderSign}) => {
    const inputData = () => {
        let inptClassname = Array.from(document.getElementsByClassName('text-inpt'));
        alert( String(inptClassname.map(item => {return `${item.value}\n`})).replace(/[,]/g, ''))
    }

    return (
        <div className='modal-content' onClick={e => e.stopPropagation()}>
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
            <button className='signIn-btn' type='button' onClick={() => inputData()}>Sign In</button>
            <div className='forgot'>Forgot Your Password?</div>
            <hr className='bottom-line'></hr>
            <div className='register'>Don’t have an account? <span className='regist'
            onClick={() => renderSign(false)}>Register</span></div>
        </div>
    );
};

export default Signin;