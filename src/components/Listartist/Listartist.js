import React, { Component } from 'react';
import { getArtist } from '../Api/Api';

class Listartist extends Component {

    state = {
        artists: [],
    }

    async updateArtist(artist) {
        const artists = await getArtist(artist)
        this.setState({ artists })
    }


    componentDidMount() {
        let artist = this.props.match.params.artist;
        this.updateArtist(artist)
    }

    render() {

        return (
            <div className="container">
                <h1 className="text-center" style={{ paddingTop: "30%" }}>
                    List of artist found
                </h1>
            <div>
                <ul>
                    {this.state.artists.items ? this.state.artists.items.map(artist => (
                        <li>
                            <h2>Artista: {artist.name}</h2>
                        </li>
                    )) : 'Carregando...' }
                </ul>
            </div>

            </div>
        )
    }
}

export default Listartist;