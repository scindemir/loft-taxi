import React from 'react';
import { HomeWithAuth } from './Home';
import { render } from '@testing-library/react';

describe("Home", () => {
  it("renders correctly", () => {
    const { getByLabelText } = render(<HomeWithAuth />)

    expect(getByLabelText('Email:')).toHaveAttribute('name', 'email');
    expect(getByLabelText('Password:')).toHaveAttribute('name', 'password');
    expect(getByLabelText('Enter')).toHaveAttribute('name', 'submit');
  });
});