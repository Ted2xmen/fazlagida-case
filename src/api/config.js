import axios from "axios";

const api_key = process.env.REACT_APP_LASTFM

export const fetchTopTracks = (id) => {
    return axios.get(`https://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&mbid=${id}&api_key=${api_key}&format=json`)
}

export const fetchTopAlbums = (id) => {
    return axios.get(`https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&mbid=${id}&api_key=${api_key}&format=json`)
}