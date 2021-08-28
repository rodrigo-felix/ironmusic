import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api.spotify.com/v1',
    headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer BQDqwzwaRPzCRd4VLCv3JHyH0aOW2xiWtpUP-NaGHr2QSB436xGjI24lBJVgyR9xWrmQ4EO0xy2QsijyuJ4'
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
        return response.data.items;
    } catch (error) {
        console.log(error.message);
    }
}

export {
    getArtist,
    getAlbum
};