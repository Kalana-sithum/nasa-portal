// MarsRoverPhotos.test.jsx
import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import MarsRoverPhotos from '../pages/marsRover/MarsRoverPhotos';
import NasaAPI from '../api/NasaAPI';
import '@testing-library/jest-dom';

// Mock the NasaAPI
jest.mock('../api/NasaAPI');

const mockPhotosData = {
    photos: [
        {
            id: 1,
            img_src: 'https://example.com/rover1.jpg',
            rover: { name: 'Curiosity' },
            camera: { full_name: 'Mast Camera' },
            earth_date: '2024-07-04',
        },
        // Add more mock data as needed
    ],
};

test('renders loading message initially', () => {
    NasaAPI.getMarsRoverPhotos.mockResolvedValueOnce({ data: mockPhotosData });
    render(<MarsRoverPhotos />);
    const loadingElement = screen.getByText(/Loading/i);
    expect(loadingElement).toBeInTheDocument();
});

test('renders Mars rover photos after fetching', async () => {
    NasaAPI.getMarsRoverPhotos.mockResolvedValueOnce({ data: mockPhotosData });
    render(<MarsRoverPhotos />);

    // Wait for the photos to be rendered
    await waitFor(() => screen.getByAltText('Mars Rover'));

    // Check if the first photo is rendered
    expect(screen.getByAltText('Mars Rover')).toBeInTheDocument();
    expect(screen.getByText('Rover: Curiosity')).toBeInTheDocument();
    expect(screen.getByText('Camera: Mast Camera')).toBeInTheDocument();
    expect(screen.getByText('Date: 2024-07-04')).toBeInTheDocument();
});
