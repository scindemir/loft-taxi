import React from 'react';
import { HeaderWithAuth } from './Header';
import { render, fireEvent } from '@testing-library/react';

jest.mock('./Map', () => ({ Map: () => <div>Map component</div> }));
jest.mock('./Profile', () => ({ Profile: () => <div>Profile component</div> }));
jest.mock('./Home', () => ({ LogOut: () => <div>LogOut</div> }));

describe("HeaderWithAuth", () => {
  describe("when clicked on navigation buttons", () => {
    it("opens the corresponding page", () => {
      const { getByText, container } = render(<HeaderWithAuth />);

      fireEvent.click(getByText('Map'));
      expect(container.innerHTML).toMatch("Map component");

      fireEvent.click(getByText('Profile'));
      expect(container.innerHTML).toMatch("Profile component");

      fireEvent.click(getByText('Log Out'));
      expect(container.innerHTML).toMatch("LogOut");
    });
  });
});