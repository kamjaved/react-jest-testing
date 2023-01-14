// LEVEL-1 this test file mainly focus on understanding all types of matcher or selectors for single elements with extra arguments this is very beginner freindly

import { getByPlaceholderText, render, screen } from '@testing-library/react';
import { Application } from './Application';

describe('APPLICATION', () => {
	test('renders correctly', () => {
		render(<Application />);
		const jobHeading = screen.getByRole('heading', {
			name: 'Job application form',
			level: 1,
		});
		expect(jobHeading).toBeInTheDocument();

		const sectionHeading = screen.getByRole('heading', {
			name: 'Section 1',
			level: 2,
		});

		expect(sectionHeading).toBeInTheDocument();

		//METH-1 most of the element is selected by getByRole method but there is another query method getByLabelText which can do the same.
		const nameElement = screen.getByRole('textbox', {
			name: 'Name',
		});
		expect(nameElement).toBeInTheDocument();

		//METH-2 getting name input by using getByLabelText method in real project we don't have to use both method
		//  htmlFor in label and id in input field will be proper otherwise this method is not going to work
		const nameElement2 = screen.getByLabelText('Name', {
			selector: 'input', // use this to filter out your element when you have multiple input of having same name like Name label is Present in your component multiple times then you have to filter specific elem then use this
		});
		expect(nameElement2).toBeInTheDocument();

		// METH-3 getByPlaceholderText
		const nameElement3 = screen.getByPlaceholderText('Fullname');
		expect(nameElement3).toBeInTheDocument();

		// METH-4 getByDisplayValue
		const nameElement4 = screen.getByDisplayValue('Kamran');
		expect(nameElement4).toBeInTheDocument();

		const bioElement = screen.getByRole('textbox', {
			name: 'Bio',
		});
		expect(bioElement).toBeInTheDocument();

		const jobLocationElement = screen.getByRole('combobox');
		expect(jobLocationElement).toBeInTheDocument();

		const termsElement = screen.getByRole('checkbox');
		expect(termsElement).toBeInTheDocument();

		const submitBtn = screen.getByRole('button');
		expect(submitBtn).toBeInTheDocument();

		// getByText : this method wills earch all element that have a text node with textCOntent mathing the given txt genrally this is used in paragraph, span or div element
		const paragraphElement = screen.getByText('All fields are mandatory');
		expect(paragraphElement).toBeInTheDocument();

		// getByAltText: it will return element thats as given alt text
		const imageElement = screen.getByAltText('a person with a laptop');
		expect(imageElement).toBeInTheDocument();

		// getByTitle:  it will return element thats has  matching title attributes
		const closeElement = screen.getByTitle('close');
		expect(closeElement).toBeInTheDocument();

		// getByTestId: getByTestId returns the element that has the matching data-testid atribute
		const customeElement = screen.getByTestId('custom-element');
		expect(closeElement).toBeInTheDocument();

		// NOTE: we can also pass regex and function on the 1st argumenet on any method above all we are using string below code is just to show a example how regex and function ca be used

		// WITH REGEX
		const paragraphElementWithRegex = screen.getByText(/All Field/i); // substring matche isnore cases
		expect(paragraphElementWithRegex).toBeInTheDocument();

		// WITH FUNCTION
		const paragraphElementWithFunc = screen.getByText((content) =>
			content.startsWith('All')
		);
		expect(paragraphElementWithFunc).toBeInTheDocument();
	});
});
