import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api.spotify.com/v1',
    headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer BQB2gp2ISjekjgy2XJADpuufAFur3i6mp1-U9GtT-aGK4_nuWcyrdc14Uy7pyBU0NMht0QjLrrJCaxA4PQQ'
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