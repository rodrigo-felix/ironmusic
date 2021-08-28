import React, { Component } from 'react';
import {getAlbum} from '../Api/Api';

class Albumartist extends Component{
    
    state= {
        albums: [],
        loading: true,
    }

    async getAlbunsArtist(artistID) {
        const albums = await getAlbum(artistID)
        console.log(albums)
        this.setState({ albums, loading: false })
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
                {!this.state.loading ? this.state.albums.map(album => (
                    <li>
                        <h2>Album: {album.name}</h2>
                        <a href={album.external_urls.spotify}>Ouvir no Spotify</a>
                    </li>
                    )) : 'Carregando...' }
                </ul>
        </div>
        )
    }
}

export default Albumartist;