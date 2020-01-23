import React from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import Navigation from './Navigation/Navigation';
import Logo from './Logo/Logo';
import Rank from './Rank/Rank';
import ImageLinkForm from './ImageLinkForm/ImageLinkForm';
import FaceRecognition from './FaceRecognition/FaceRecognition';
import Login from './Login/Login';
import Register from './Register/Register';
import { particles } from './particle';
import './App.css';

const app = new Clarifai.App({
    apiKey: '0e3cdf75524745a0af9bd357428eba73'
});

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            input: '',
            imageUrl: '',
            box: {},
            route: 'login',
            isLoggedin: false
        }
    }

    calculateFaceLocation = (data) => {
        const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
        const image = document.getElementById('inputImage');
        const width = Number(image.width);
        const height = Number(image.height);
        
        return {
            leftCol: clarifaiFace.left_col * width,
            topRow: clarifaiFace.top_row * height,
            rightCol: width - (clarifaiFace.right_col * width),
            bottomRow: height - (clarifaiFace.bottom_row * height)
        }
    }

    displayFaceBox = (box) => {
        this.setState({
            box
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

        app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
            .then((response) => {
                this.displayFaceBox(this.calculateFaceLocation(response))
            })
            .catch((err) => {
                console.log(err);
            });
    }

    onRouteChange = (route) => {
        if (route === 'login') {
            this.setState({
                isLoggedin: false
            })
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
                        <Rank />
                        <ImageLinkForm 
                            onInputChange={this.onInputChange}
                            onButtonSubmit={this.onButtonSubmit}
                        />
                        <FaceRecognition 
                            box={box}
                            imageUrl={imageUrl} 
                        />
                    </div>
                    : (
                        route === 'login'
                        ? <Login onRouteChange={this.onRouteChange}/>
                        : <Register onRouteChange={this.onRouteChange}/>
                    )
                }
            </div>
        )
    }
}

export default App;