import { render, screen } from '@testing-library/react';
import { rest } from 'msw';
import { server } from '../../mocks/server';
import { Users } from './Users';

describe('HTTP MOCK USERS', () => {
	test('renders correctly', () => {
		render(<Users />);
		const textElement = screen.getByText('Users');
		expect(textElement).toBeInTheDocument();
	});

	/*for HTTP request we setup MSW (mock service worker) this is super useful because tetsing with real server will charge you penny and lots of call so in mock folder we setup MSW
	 */

	test('renders a list of users', async () => {
		render(<Users />);
		const users = await screen.findAllByRole('listitem');
		expect(users).toHaveLength(3);
	});

	test('renders an error when api failed', async () => {
		server.use(
			rest.get(
				'https://jsonplaceholder.typicode.com/users',
				(req, res, ctx) => {
					return res(ctx.status(500));
				}
			)
		);
		render(<Users />);

		const error = await screen.findByText('Error fetching users');
		expect(error).toBeInTheDocument();
	});
});
