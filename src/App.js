import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';
import Directory from './components/DirectoryComponent';
import { CAMPSITES } from './shared/campsites';
import CampsiteInfoComponent from './components/CampsiteInfoComponent';
import { COMMENTS } from './shared/comments';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            campsites: CAMPSITES,
            comments:COMMENTS 
        };
    }

    render() {
        return (
            <div className="App">
                <Navbar dark color="primary">
                <div className="container">
                    <NavbarBrand href="/">NuCamp</NavbarBrand>
                </div>
                </Navbar>
                <Directory campsites={this.state.campsites} />
                <CampsiteInfoComponent comments={this.state.comments} />
            </div>
        );
    };
}

export default App;
