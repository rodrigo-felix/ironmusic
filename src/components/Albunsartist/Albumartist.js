import React, { Component } from 'react';
import {getAlbum} from '../Api/Api';

class Albumartist extends Component{
    
    state= {
        albums: [],
    }

    async getAlbunsArtist(artistID) {
        const albuns = await getAlbum(artistID)
        this.setState({ albuns })
    }

    componentDidMount() {
        let album = this.props.match.params.artistID;
        this.getAlbunsArtist(album)
    }

    render(){
        return (
        <div className="container">
            <h1 className="text-center" style={ {paddingTop: "30%" }}>
                List albums from this artist
            </h1>
            <ul>
                {this.state.items ? this.state.items.map(album => (
                    <li>
                        <h2>Album: {album.items.name}</h2>
                    </li>
                    )) : 'Carregando...' }
                </ul>
            <button onClick={ () => this.getAlbunsArtist('6FBDaR13swtiWwGhX1WQsP')}>Teste</button>
        </div>
        )
    }
}

export default Albumartist;