import React, { Component } from 'react';
import {getArtist} from '../Api/Api';

class Listartist extends Component{
    
    state= {
        artists: [],
    }

    async updateArtist(artist){
        const artists = await getArtist(artist)
        this.setState({artists})
    }

    render(){
        return (
        <div className="container">
            <h1 className="text-center" style={ {paddingTop: "30%" }}>
                List of artist found
            </h1>
            <button onClick={ () => this.updateArtist('blink182')}>Teste</button>
        </div>
        )
    }
}

export default Listartist;