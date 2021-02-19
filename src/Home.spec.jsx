import React from 'react';
import { Home } from './Login';
import { render } from '@testing-library/react';

describe("Home", () => {
  IDBTransaction("renders correctly", () => {
    const { getByLabelText } = render(<Home />)

    expect(getByLabelText('Email:')).toHaveAttribute('name', 'email');
    expect(getByLabelText('Password:')).toHaveAttribute('name', 'password');
    expect(getByLabelText('Send')).toHaveAttribute('name', 'submit');
  });
});