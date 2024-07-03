import React, { useEffect, useState } from 'react';
import NasaAPI from '../api/NasaAPI';
import Navbar from '../components/Navbar';
import BACKGROUND from '../asserts/bg.jpg';

const Apod = () => {
    const [apod, setApod] = useState(null);

    useEffect(() => {
        NasaAPI.getApod()
            .then(response => setApod(response.data))
            .catch(error => console.error('Error fetching APOD:', error));
    }, []);

    if (!apod) return <div>Loading...</div>;

    return (
        <div>
            <Navbar />
            <div className="container p-5 my-8">
                <h2 className="text-3xl font-bold mb-4">Astronomy Picture of the Day ({apod.date})</h2>
                <img src={apod.url} alt={apod.title} className=" w-3/5 h-auto mb-4" />
                <h3 className="text-2xl font-semibold">{apod.title}</h3>
                <p>{apod.explanation}</p>
            </div>
        </div>
    );
}

export default Apod;
