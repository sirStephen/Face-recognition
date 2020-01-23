import React from 'react';
import './Login.css';

const Login = ({ onRouteChange }) => {
    return(
        <div className='width-80'>
            <article className="br3 ba dark-gray b--black-10 mv4 shadow-5 center">
                <form className="pa4 black-80">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f1 ph0 mh0 center">face recognition login</legend>
                        <div className="mt3">
                            <label className="db lh-copy" htmlFor="email-address">Email</label>
                            <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" />
                        </div>
                        <div className="mv3">
                            <label className="db lh-copy" htmlFor="password">Password</label>
                            <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" />
                        </div>
                    </fieldset>
                    <div className="">
                        <input
                            onClick={() => onRouteChange('home')}
                            className="ph3 pv2 input-reset ba b--black grow pointer dib btn-black" 
                            type="submit" 
                            value="Login" 
                        />
                    </div>
                    <div className="lh-copy mt3 pointer">
                        <p onClick={() => onRouteChange('register')} className="f3 link dim black db">Register</p>
                        <a href="#0" className="f3 link dim black db">Forgot your password?</a>
                    </div>
                </form>
            </article>

        </div>
    )
}

export default Login;