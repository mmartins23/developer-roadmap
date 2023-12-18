import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import UserForm from './UserForm';

// Jest test case to check if UserForm renders two inputs and a button
test("It shows two inputs and a button", () => {
    // Rendering the UserForm component
    render(<UserForm />);

    // Finding all elements with the role 'textbox' and storing them in 'inputs'
    const inputs = screen.getAllByRole('textbox');
    // Finding an element with the role 'button' and storing it in 'button'
    const button = screen.getByRole('button');

    // Expectation: There should be exactly 2 input elements (textboxes)
    expect(inputs).toHaveLength(2);
    // Expectation: The button element should be present in the document
    expect(button).toBeInTheDocument();
});
