import React from 'react';
import { render, waitFor } from '@testing-library/react';

// Import the component to be tested
import Apod from '../pages/apod/Apod'; // Adjust the path based on your project structure

// Mock NasaAPI module
jest.mock('../api/NasaAPI', () => ({
  getApod: jest.fn(() =>
    Promise.resolve({
      data: {
        title: 'Mock APOD Title',
        url: 'https://example.com/mock-image.jpg',
        explanation: 'Mock APOD Explanation',
        date: '2024-07-03',
      },
    })
  ),
}));

describe('Apod Component', () => {
  it('renders Astronomy Picture of the Day correctly', async () => {
    // Render the component
    const { getByText, getByAltText } = render(<Apod />);

    // Wait for the component to finish fetching data
    await waitFor(() => {
      // Assert that the loading text is not present
      expect(getByText('Loading...')).not.toBeInTheDocument();

      // Assert that the APOD title, image, and explanation are rendered
      expect(getByText('Astronomy Picture of the Day (2024-07-03)')).toBeInTheDocument();
      expect(getByAltText('Mock APOD Title')).toBeInTheDocument();
      expect(getByText('Mock APOD Title')).toBeInTheDocument();
      expect(getByText('Mock APOD Explanation')).toBeInTheDocument();
    });
  });
});
