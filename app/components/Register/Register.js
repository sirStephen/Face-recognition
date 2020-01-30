import React from 'react';

class Register extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            name: ''
        }
    }

    onNameChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    onEmailChange = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    onPasswordChange = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    onSubmitLogin = (event) => {
        event.preventDefault();
        fetch('https://face-recognitionapi.herokuapp.com/register', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password,
                name: this.state.name
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
        return(
            <div className='width-80'>
                <article className="br3 ba dark-gray b--black-10 mv4 shadow-5 center">
                    <form className="pa4 black-80">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <legend className="f1 ph0 mh0 center">face recognition Registration</legend>
                            <div className="mt3">
                                <label className="db lh-copy" htmlFor="email-address">Name</label>
                                <input 
                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                    type="text" 
                                    name="name" 
                                    id="name" 
                                    onChange={this.onNameChange}
                                />
                            </div>
                            <div className="mt3">
                                <label className="db lh-copy" htmlFor="email-address">Email</label>
                                <input 
                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" 
                                    name="email-address" 
                                    id="email-address" 
                                    onChange={this.onEmailChange}
                                />
                            </div>
                            <div className="mv3">
                                <label className="db lh-copy" htmlFor="password">Password</label>
                                <input 
                                    className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" 
                                    name="password" 
                                    id="password" 
                                    onChange={this.onPasswordChange}
                                />
                            </div>
                        </fieldset>
                        <div className="">
                            <input
                                onClick={this.onSubmitLogin}
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
}

export default Register;