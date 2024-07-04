import axios from "axios";

const NasaAPI = {
    getApod: () => {
        return axios.get(`https://api.nasa.gov/planetary/apod?api_key=aQwwEoL9jfY9fmGnIQdzyhpQtHDsitZ58Yd2K3As`);
    },
    getMarsRoverPhotos: () => {
        return axios.get(
            `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=aQwwEoL9jfY9fmGnIQdzyhpQtHDsitZ58Yd2K3As`
        );
    },
};

export default NasaAPI;
