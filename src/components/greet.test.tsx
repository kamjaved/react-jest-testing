import { render, screen } from '@testing-library/react';
import Greet from './Greet';

describe('GREET', () => {
	test('testing greet component having hello word', () => {
		render(<Greet />);
		const textElement = screen.getByText(/hello/i);
		expect(textElement).toBeInTheDocument();
	});

	test('Greet should contain a Name props', () => {
		render(<Greet name="Kamran" />);
		const textElement = screen.getByText('Hello Kamran');
		expect(textElement).toBeInTheDocument();
	});
});
