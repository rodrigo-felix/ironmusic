import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api.spotify.com/v1',
    headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer BQC7D3i2l-juOTXDvzh29G7Apkmcr1raSxCAZgjNONDHlgQZpPl0adtqXbFBE2kYjqzCCIyyGF8gIHdHXR0'
    }
})

const getArtist = async(artist) => {
    try {
        const response = await api.get(`/search?q=${artist}&type=artist`);
        console.log(response.data);
        return response.data.artists;
    } catch (error) {
        console.log(error.message);
    }
}

const getAlbum = async(artistID) => {
    try {
        const response = await api.get(`/artists/${artistID}/albums`);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export {
    getArtist,
    getAlbum
};