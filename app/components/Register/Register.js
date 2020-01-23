import React from 'react';

const Register = ({ onRouteChange }) => {
    return(
        <div className='width-80'>
            <article className="br3 ba dark-gray b--black-10 mv4 shadow-5 center">
                <form className="pa4 black-80">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f1 ph0 mh0 center">face recognition Registration</legend>
                        <div className="mt3">
                            <label className="db lh-copy" htmlFor="email-address">Name</label>
                            <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="name"  id="name" />
                        </div>
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
                            value="Register" 
                        />
                    </div>
                </form>
            </article>
        </div>
    )
}

export default Register;