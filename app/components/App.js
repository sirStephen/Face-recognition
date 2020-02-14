import React from 'react';
import Particles from 'react-particles-js';
import Navigation from './Navigation/Navigation';
import Logo from './Logo/Logo';
import Rank from './Rank/Rank';
import ImageLinkForm from './ImageLinkForm/ImageLinkForm';
import FaceRecognition from './FaceRecognition/FaceRecognition';
import Login from './Login/Login';
import Register from './Register/Register';
import { particles } from './particle';
import './App.css';

const initialState = {
    input: '',
    imageUrl: '',
    box: [],
    route: 'login',
    isLoggedin: false,
    user: {
        id: '',
        name: '',
        email: '',
        entries: 0,
        joined: ''
    }
}

class App extends React.Component {
    constructor() {
        super()
        this.state = initialState
    }

    loadUser = (data) => {
        this.setState({
            user: {
                id: data.id,
                name: data.name,
                email: data.email,
                entries: data.entries,
                joined: data.joined
            }
        })
    }

    calculateFaceLocation = (data) => {
        console.log(data)
        const clarifaiFaces = data.outputs[0].data.regions;
        const image = document.getElementById('inputImage');
        const width = Number(image.width);
        const height = Number(image.height);

        return  clarifaiFaces.map(region => {
            console.log(region)
            const boundingBox = region.region_info.bounding_box;
            return{
                leftCol: boundingBox.left_col * width,
                topRow: boundingBox.top_row * height,
                rightCol: width - (boundingBox.right_col * width),
                bottomRow: height - (boundingBox.bottom_row * height)
            }
        })
        
    }

    displayFaceBox = (box) => {
        this.setState({
            box: box
        })
    }

    onInputChange = (event) => {
        this.setState({
            input: event.target.value
        })
    }

    onButtonSubmit = (e) => {
        e.preventDefault();
        this.setState({
            imageUrl: this.state.input
        })

        fetch('https://face-recognitionapi.herokuapp.com/imageurl', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                input: this.state.input
            })
        })
        .then(response => response.json())
        .then((response) => {
            if (response) {
                fetch('https://face-recognitionapi.herokuapp.com/image', {
                    method: 'PUT',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({
                        id: this.state.user.id
                    })
                })
                .then(response => response.json())
                .then(count => {
                    this.setState(Object.assign(this.state.user, {
                        entries: count
                    }))
                })
                .catch(console.log)
            }
            this.displayFaceBox(this.calculateFaceLocation(response))
        })
        .catch(err => console.log(err));
    }

    onRouteChange = (route) => {
        if (route === 'login') {
            this.setState(initialState)
        } else if (route === 'home') {
            this.setState({
                isLoggedin: true
            })
        }
        this.setState({
            route
        })
    }

    render() {
        const { isLoggedin, box, imageUrl, route } = this.state;
        return(
            <div className='app'>
                <Particles className='particles'
                    params={particles}
                />
                <div className='space'>
                    <Logo />
                    <Navigation
                        isLoggedin={isLoggedin}
                        onRouteChange={this.onRouteChange} 
                    />
                </div>
                {
                    route === 'home'
                    ? <div>
                        <Rank 
                            name={this.state.user.name} 
                            entries={this.state.user.entries}
                        />
                        <ImageLinkForm 
                            onInputChange={this.onInputChange}
                            onButtonSubmit={this.onButtonSubmit}
                        />
                        <FaceRecognition 
                            boxes={box}
                            imageUrl={imageUrl} 
                        />
                    </div>
                    : (
                        route === 'login'
                        ? <Login 
                            loadUser={this.loadUser} 
                            onRouteChange={this.onRouteChange}
                        />
                        : <Register 
                            onRouteChange={this.onRouteChange} 
                            loadUser={this.loadUser}
                        />
                    )
                }
            </div>
        )
    }
}

export default App;