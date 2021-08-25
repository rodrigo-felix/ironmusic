import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api.spotify.com/v1',
    headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer BQCgtJ382o_YAmbcmHlvgBpYry6XZDY3Mo361tCu7_FpX2fmu1Gx7RXlCcdJSODiZg8ObpLk2_JSupPeB_g'
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