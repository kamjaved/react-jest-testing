// LEVEL-4 this test file mainly focus on provider testing like from react-redux or your own sutom proider like AuthProvider and we are using  " @mui/material" package for that

import { render, screen } from '../../test.utils';
// unlike other test file we import render from our sutom file in this file warpper is applied so we don't have to write wrapper argument in every test
import { MuiMode } from './MuiModes';

describe('MUI MODE', () => {
	test('render text correctly', () => {
		render(<MuiMode />);
		const headingElement = screen.getByRole('heading');
		expect(headingElement).toHaveTextContent('dark mode');
	});
});
