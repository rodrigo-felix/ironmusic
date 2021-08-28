import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api.spotify.com/v1',
    headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer BQBygXJBYiQEHwpcNzTrTtRGuElpV2JUCejGjaqniynEanEyCH0lBMokWz6e9DAyVWlm_O5IeC6Qs_g4oTg'
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
        return response.data.album;
    } catch (error) {
        console.log(error.message);
    }
}

export {
    getArtist,
    getAlbum
};