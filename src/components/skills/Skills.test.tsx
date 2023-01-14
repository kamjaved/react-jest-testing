//  LEVEL-2  this test file mainly focus multiple element getAll methods with async function handle and debug test file

import { logRoles, render, screen } from '@testing-library/react';
import Skills from './Skills';

const skills = ['HTML', 'CSS', 'JavaScript'];

describe('SKILLS', () => {
	test('component Render correctly', () => {
		render(<Skills skills={skills} />);
		const listElement = screen.getByRole('list');
		expect(listElement).toBeInTheDocument();
	});

	test('renders the list of skills', () => {
		render(<Skills skills={skills} />);
		const listItemElements = screen.getAllByRole('listitem');
		expect(listItemElements).toHaveLength(skills.length);
	});

	test('render login button', () => {
		render(<Skills skills={skills} />);
		const loginButton = screen.getByRole('button', {
			name: 'Login',
		});
		expect(loginButton).toBeInTheDocument();
	});

	// Queryby method is used when some item is not rendered yet or elem that is not present if no element present it return null
	// throws error if more than one match is found

	test('not to render start login button', () => {
		render(<Skills skills={skills} />);
		const loginButton = screen.queryByRole('button', {
			name: 'Start learning',
		});
		expect(loginButton).not.toBeInTheDocument();
	});

	//  findBy method is used when we expect item after sometime or for async operation

	test('start learning button is eventually displayed', async () => {
		render(<Skills skills={skills} />);
		const startLearningBtn = await screen.findByRole(
			'button',
			{
				name: 'Start learning',
			},
			{ timeout: 2000 }
		);
		expect(startLearningBtn).toBeInTheDocument();
	});

	// DEBUG: HOW TO DEBUG TEST FILE there is 2 method screen.debug() and logRoles

	test('debug test file', async () => {
		const view = render(<Skills skills={skills} />);
		// logRoles(view.container); // description in docuemnt file
		//screen.debug(); //prints dom before findByRole method call
		const startLearningBtn = await screen.findByRole(
			'button',
			{
				name: 'Start learning',
			},
			{ timeout: 2000 }
		);
		//screen.debug(); //prints dom after findByRole method call

		expect(startLearningBtn).toBeInTheDocument();
	});
});
