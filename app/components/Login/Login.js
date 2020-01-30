import React from 'react';
import './Login.css';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loginEmail: '',
            loginPassword: ''
        }
    }

    onEmailChange = (event) => {
        this.setState({
            loginEmail: event.target.value
        })
    }

    onPasswordChange = (event) => {
        this.setState({
            loginPassword: event.target.value
        })
    }

    onSubmitLogin = (event) => {
        event.preventDefault();
        fetch('https://face-recognitionapi.herokuapp.com/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: this.state.loginEmail,
                password: this.state.loginPassword
            })
        })
        .then(response => {
            return response.json()
        })
        .then(user => {
            if (user.id) {
                this.props.loadUser(user)
                this.props.onRouteChange('home');
            }
        })
    }

    render() {
        const { onRouteChange } = this.props;

        return(
            <div className='width-80'>
                <article className="br3 ba dark-gray b--black-10 mv4 shadow-5 center">
                    <form className="pa4 black-80">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <legend className="f1 ph0 mh0 center">face recognition login</legend>
                            <div className="mt3">
                                <label className="db lh-copy" htmlFor="email-address">Email</label>
                                <input 
                                    onChange={this.onEmailChange}
                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" 
                                    name="email-address"
                                    id="email-address" 
                                />
                            </div>
                            <div className="mv3">
                                <label className="db lh-copy" htmlFor="password">Password</label>
                                <input 
                                    onChange={this.onPasswordChange}
                                    className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" 
                                    name="password"
                                    id="password" 
                                />
                            </div>
                        </fieldset>
                        <div className="">
                            <input
                                onClick={this.onSubmitLogin}
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
}

export default Login;