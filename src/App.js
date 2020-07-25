import React, {Component} from 'react';
import './App.css';
import NavBar from "./NavBar";
import NavBar1 from "./NavBar1";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Home"
import Images from './Images';

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <NavBar/>
                <NavBar1/>
                <Home/>
                <Images/>
            </React.Fragment>
        );
    }
}

export default App;
