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
        let album = this.props.match.params.album;
        this.updateArtist(album)
    }

    render(){
        return (
        <div className="container">
            <h1 className="text-center" style={ {paddingTop: "30%" }}>
                List albums from this artist
            </h1>
            <ul>
                {this.state.albums.items ? this.state.albums.items.map(album => (
                    <li>
                        <h2>Album: {album.name}</h2>
                        <link>
                        </link>
                    </li>
                    )) : 'Carregando...' }
                </ul>
            <button onClick={ () => this.getAlbunsArtist('6FBDaR13swtiWwGhX1WQsP')}>Teste</button>
        </div>
        )
    }
}

export default Albumartist;