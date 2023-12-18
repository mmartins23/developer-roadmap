# Our First Test

### Running the App:

- **To Run the App (`npm run start`):**
  - Execute `npm run start` in the terminal.
  - Starts the development server and launches the application.
  - Access the app in a web browser at the specified address (e.g., `http://localhost:3000`).

- **To Run Tests (`npm run test`):**
  - Execute `npm run test` in the terminal.
  - Runs test suites using Jest.
  - Provides feedback on test results.

### Jest Test Code Explanation:

```jsx
// Importing necessary testing utilities from '@testing-library/react'
import { render, screen } from '@testing-library/react';
// Importing user-event library for simulating user interactions
import user from '@testing-library/user-event';
// Importing the component to be tested (UserForm)
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

```

#### Explanation:

1. **Rendering the Component:**
   - `render(<UserForm />);`: Renders the `UserForm` component for testing.

2. **Querying Elements:**
   - `const inputs = screen.getAllByRole('textbox');`: Finds all elements with the role 'textbox' (input elements) and stores them in `inputs`.
   - `const button = screen.getByRole('button');`: Finds an element with the role 'button' and stores it in `button`.

3. **Expectations (Assertions):**
   - `expect(inputs).toHaveLength(2);`: Asserts that there are exactly 2 input elements.
   - `expect(button).toBeInTheDocument();`: Asserts that the button element is present in the document.

#### Comments:

- This Jest test checks if the `UserForm` component renders with two input elements and one button.
- The `screen` utility from `@testing-library/react` is used to query and interact with elements in the rendered component.
- The `expect` statements verify that the expected number of input elements is present, and the button is in the document.
- This test ensures that the basic structure of the `UserForm` component is as expected.