import React from 'react'
import '@testing-library/jest-dom'
import Game from '../Game'
import { render, screen } from '@testing-library/react'

test('test', () => {
    render(<Game />);
    const test = screen.getByRole("mainTitle");
    expect(test.textContent).toBe("hello")
}) 