import React from 'react'
import "@testing-library/jest-dom"
import FindWinner from "../../utils/result"

test('Testing Result functions', () => {
    const winner = FindWinner();
    expect(winner).toBeFalsy();
})