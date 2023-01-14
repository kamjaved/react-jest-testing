// LEVEL-3 this test file mainly focus on user interactions and we are using  "@testing-library/user-event" package for that

import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import { Counter } from './Counter';

describe('COUNTER', () => {
	test('renders correctly', () => {
		render(<Counter />);
		const countElement = screen.getByRole('heading');
		expect(countElement).toBeInTheDocument();
		const incrementButton = screen.getByRole('button', { name: 'Increment' });
		expect(incrementButton).toBeInTheDocument();
	});

	test('renders a count of 0', () => {
		render(<Counter />);
		const countElement = screen.getByRole('heading');
		expect(countElement).toHaveTextContent('0');
	});

	test('render count 1 after clicking increment btn', async () => {
		render(<Counter />);
		user.setup(); // create instance of user -- important
		const incrementButton = screen.getByRole('button', { name: 'Increment' });
		await user.click(incrementButton); // user click button once its is async opertaion // different mouse methods: click, dblClick, tripleClick, hover, unhover
		//  now after clicking we are expecting 1 to be rendered in heading
		const countElement = screen.getByRole('heading');
		expect(countElement).toHaveTextContent('1');
	});

	test('render count 2 after clicking increment btn twice', async () => {
		user.setup(); // create instance of user -- important do this before render
		render(<Counter />);
		const incrementButton = screen.getByRole('button', { name: 'Increment' });
		await user.dblClick(incrementButton); // user click button twice its is async opertaion
		//  now after clicking we are expecting 1 to be rendered in heading
		const countElement = screen.getByRole('heading');
		expect(countElement).toHaveTextContent('2');
	});

	test('render count 10 after clicking set btn and typing 10 in input box', async () => {
		user.setup();
		render(<Counter />);
		const amtInput = screen.getByRole('spinbutton'); // input that are number types have spinbutton role
		// different keyboard utility method: type, tab, upload, clear, selectOptions, deslectOptions for code ref:-  https://www.youtube.com/watch?v=kqX14UyjhDM&list=PLC3y8-rFHvwirqe1KHFCHJ0RqNuN61SJd&index=37
		await user.type(amtInput, '10'); // user type  ask for element and value
		expect(amtInput).toHaveValue(10); // we are expecting 10 to be value after entering via user

		//  now we click set button and expect 10 to be render in heading element
		const setButton = screen.getByRole('button', { name: 'Set' });
		await user.click(setButton);
		const countElement = screen.getByRole('heading');
		expect(countElement).toHaveTextContent('10');
	});

	test('element to have focus while pressign tab key in right order', async () => {
		user.setup();
		render(<Counter />);
		const incrementButton = screen.getByRole('button', { name: 'Increment' });
		const amtInput = screen.getByRole('spinbutton');
		const setButton = screen.getByRole('button', { name: 'Set' });
		await user.tab();
		expect(incrementButton).toHaveFocus();
		await user.tab();
		expect(amtInput).toHaveFocus();
		await user.tab();
		expect(setButton).toHaveFocus();
	});
});
