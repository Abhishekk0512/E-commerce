import React from 'react'
import './CSS/LoginSignUp.css'

const LoginSignUp = () => {
    return (
        <div className='loginPage'>
            <div className='loginBox'>
                <h1>Sign Up</h1>
                <div className='loginInputs'>
                    <input type='text' placeholder='Your Name'/>
                    <input type='email' placeholder='Email Addrress'/>
                    <input type='password' placeholder='Password'/>
                </div>
                <button>Continue</button>
                <p className='loginsignup-login'>Already have an account? <span>Login Here</span></p>
                <div className='loginsignup-agrree'>
                <input type='checkbox' name='' id=''/>
                <p>By continuing, i agree to the terms of use & privacy policy.</p>
                </div>
            </div>
        </div>
    )
}

export default LoginSignUp;