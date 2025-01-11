import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import "@testing-library/jest-dom"
import HomePage from '../pages/HomePage';

test('renders HomePage correctly', () => {
    render(
        <MemoryRouter>
            <HomePage />
        </MemoryRouter>
    );

    const element = screen.getByText(/welcome to homepage/i);
    expect(element).toBeInTheDocument();
});
