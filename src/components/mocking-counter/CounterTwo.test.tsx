// LEVEL-6 this test file mainly focus on mocking function we used jest.fn() to create an instance of micking function then use "toBeCalledTimes" matcher to know the how many time we called this function

import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import { CounterTwo } from './CounterTwo';

describe('COUNTER TWO MICKING', () => {
	test('renders correctly', () => {
		render(<CounterTwo count={0} />);
		const textElement = screen.getByText('Counter Two');
		expect(textElement).toBeInTheDocument();
	});

	test('handlers are called', async () => {
		/* NOTE: we know CounterTwo component is reciving prop from any parent compnent we don't know the exact value 
    what is coming inside the prop handler increment func can have 100 times increment or maybe 10 times. 
    we don't have exact idea onlly we know that its have a handler function which trigger . 
    so in this type of situation mock function is useful its mock the function or handler 
    and for this we need to create an jest handler */

		const incrementHandlerMock = jest.fn();
		const decrementHandlerMock = jest.fn();

		render(
			<CounterTwo
				count={0}
				handleIncrement={incrementHandlerMock}
				handleDecrement={decrementHandlerMock}
			/>
		);

		// now we get button from componnent and click with user event
		const incrementBtn = screen.getByRole('button', { name: 'Increment' });
		const decrementBtn = screen.getByRole('button', { name: 'Decrement' });
		await user.click(incrementBtn);
		await user.click(decrementBtn);
		expect(incrementHandlerMock).toBeCalledTimes(1);
		expect(decrementHandlerMock).toBeCalledTimes(1);
	});
});
