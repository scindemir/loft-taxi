import React from 'react';
import { Register } from './Register';
import { render } from '@testing-library/react';

describe("Register", () => {
  it("renders correctly", () => {
    const { getByLabelText } = render(<Register />)

    expect(getByLabelText('Email:')).toHaveAttribute('name', 'email');
    expect(getByLabelText('What is your name?')).toHaveAttribute('name', 'textname');
    expect(getByLabelText('Password:')).toHaveAttribute('name', 'password');
    expect(getByLabelText('Register')).toHaveAttribute('name', 'submit');
  });
});