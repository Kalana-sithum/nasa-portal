import axios from "axios";

const NasaAPI = {
    getApod: () => {
        return axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`);
    },
    getMarsRoverPhotos: () => {
        return axios.get(
            `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY`
        );
    },
};

export default NasaAPI;
