import React, { useEffect, useState } from 'react';
import NasaAPI from '../../api/NasaAPI';
import Navbar from '../../components/navbar/Navbar';

const MarsRoverPhotos = () => {
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        NasaAPI.getMarsRoverPhotos()
            .then(response => setPhotos(response.data.photos))
            .catch(error => console.error('Error fetching Mars Rover photos:', error));
    }, []);

    if (photos.length === 0) return <div>Loading...</div>;

    return (
        <div>
            <Navbar />
            <div className="container p-5 my-8">
                <h2 className="text-3xl font-bold mb-4">Mars Rover Photos</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {photos.slice(0, 8).map(photo => (
                        <div key={photo.id} className="border p-4">
                            <img src={photo.img_src} alt="Mars Rover" className="w-full h-auto mb-2" />
                            <p className="text-sm">Rover: {photo.rover.name}</p>
                            <p className="text-sm">Camera: {photo.camera.full_name}</p>
                            <p className="text-sm">Date: {photo.earth_date}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default MarsRoverPhotos;
