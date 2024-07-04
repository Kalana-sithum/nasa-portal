import React from 'react';
import { render, waitFor } from '@testing-library/react';

// Import the component to be tested
import MarsRover from '../pages/marsRover/MarsRoverPhotos'; // Adjust the path based on your project structure

// Mock NasaAPI module
jest.mock('../api/NasaAPI', () => ({
    getMarsRoverPhotos: jest.fn(() =>
        Promise.resolve({
            data: {
                photos: [
                    {
                        id: 1,
                        img_src: 'https://example.com/mock-mars-image1.jpg',
                        earth_date: '2024-07-03',
                        rover: { name: 'Curiosity' },
                        camera: { full_name: 'Mast Camera' }
                    },
                    {
                        id: 2,
                        img_src: 'https://example.com/mock-mars-image2.jpg',
                        earth_date: '2024-07-03',
                        rover: { name: 'Curiosity' },
                        camera: { full_name: 'Mast Camera' }
                    }
                ]
            }
        })
    ),
}));

describe('MarsRover Component', () => {
    it('renders Mars Rover Photos correctly', async () => {
        // Render the component
        const { getByText, getAllByAltText } = render(<MarsRover />);

        // Wait for the component to finish fetching data
        await waitFor(() => {
            // Assert that the loading text is not present
            expect(getByText('Loading...')).not.toBeInTheDocument();

            // Assert that the Mars Rover photos are rendered
            expect(getByText('Mars Rover Photos')).toBeInTheDocument();
            expect(getAllByAltText('Curiosity - Mast Camera').length).toBe(2);
            expect(getByText('2024-07-03')).toBeInTheDocument();
        });
    });
});
