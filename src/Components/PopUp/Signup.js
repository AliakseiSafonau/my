import React from 'react';

const Signup = ({renderSign}) => {
    const inputData = () => {
        let inptClassname = Array.from(document.getElementsByClassName('text-inpt'));
        alert( String(inptClassname.map(item => {return `${item.value}\n`})).replace(/[,]/g, ''))
    }

    return (
        <div className='modal-content' onClick={e => e.stopPropagation()}>
            <div className='logIn'>Create account</div>
            <p className='input-title'>E-mail</p>
            <input className='text-inpt' type='email'></input>
            <p className='input-title'>Password</p>
            <input className='text-inpt' type='password'></input>
            <button className='signIn-btn' type='submit' onClick={() => inputData()}>Sign Up</button>
            <hr className='bottom-line'></hr>
            <div className='register'>Already have an account? <span className='regist'
            onClick={() => renderSign(true)}>Log in</span></div>
        </div>
    );
};

export default Signup;