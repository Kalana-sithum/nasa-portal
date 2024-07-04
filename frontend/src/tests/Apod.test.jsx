// Apod.test.jsx
import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import Apod from '../pages/apod/Apod';
import NasaAPI from '../api/NasaAPI';
import '@testing-library/jest-dom';

// Mock the NasaAPI
jest.mock('../api/NasaAPI');

const mockApodData = {
    date: '2024-07-04',
    url: 'https://example.com/apod.jpg',
    title: 'Astronomy Picture of the Day',
    explanation: 'This is a test explanation for the APOD.',
};

test('renders loading message initially', () => {
    NasaAPI.getApod.mockResolvedValueOnce({ data: mockApodData });
    render(<Apod />);
    const loadingElement = screen.getByText(/Loading/i);
    expect(loadingElement).toBeInTheDocument();
});

test('renders APOD data after fetching', async () => {
    NasaAPI.getApod.mockResolvedValueOnce({ data: mockApodData });
    render(<Apod />);

    // Wait for the APOD data to be rendered
    await waitFor(() => screen.getByText('Astronomy Picture of the Day (2024-07-04)'));

    expect(screen.getByText('Astronomy Picture of the Day (2024-07-04)')).toBeInTheDocument();
    expect(screen.getByAltText('Astronomy Picture of the Day')).toHaveAttribute('src', 'https://example.com/apod.jpg');
    expect(screen.getByText('This is a test explanation for the APOD.')).toBeInTheDocument();
});
