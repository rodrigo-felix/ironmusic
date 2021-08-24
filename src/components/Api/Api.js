import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api.spotify.com/v1',
    headers: {
        Authorization: process.env.TOKEN_SPOTIFY
    }
})

const getArtist = async(artist) => {
    try {
        const response = await api.get(`/search?q=${artist}&type=artist`);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log(error.message);
    }
}

const getAlbum = async(artist) => {
    try {
        const response = await api.get(`/artists/${artist}/albums`);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log(error.message);
    }
}

export {
    getArtist,
    getAlbum
};