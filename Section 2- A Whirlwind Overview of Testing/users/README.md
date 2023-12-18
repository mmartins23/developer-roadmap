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

***

# Element Query System

In Jest, the Element Query System refers to the set of utility functions provided by the `@testing-library/react` library for querying and interacting with elements rendered in a React component during testing. This system is designed to mimic how users interact with the actual DOM and provides a more user-centric approach to testing.

Key functions provided by the Element Query System include:

1. **`screen.getBy*` and `screen.getAllBy*`:**
   - These functions are used to query elements based on their roles, labels, text content, and other accessible properties.
   - Examples:
     ```javascript
     const buttonElement = screen.getByRole('button');
     const inputElements = screen.getAllByRole('textbox');
     ```

2. **`screen.queryBy*` and `screen.queryAllBy*`:**
   - Similar to `getBy*` and `getAllBy*`, but these functions return `null` if the element is not found, allowing you to use them in conditional logic.
   - Examples:
     ```javascript
     const buttonElement = screen.queryByRole('button');
     const inputElements = screen.queryAllByRole('textbox');
     ```

3. **`screen.findBy*` and `screen.findAllBy*`:**
   - These functions are asynchronous and return promises that resolve when the element is found. They are useful for handling asynchronous operations, such as data fetching or animations.
   - Examples:
     ```javascript
     const buttonElement = await screen.findByRole('button');
     const inputElements = await screen.findAllByRole('textbox');
     ```

4. **`within`:**
   - The `within` function allows scoping queries to a specific element, making it easier to find nested elements.
   - Example:
     ```javascript
     const formElement = screen.getByRole('form');
     const inputElement = within(formElement).getByRole('textbox');
     ```

By using these functions, testers can write expressive and resilient tests that closely resemble how users interact with the application. The Element Query System promotes the use of semantic queries based on the role, label, or text content of elements, contributing to more maintainable and robust tests. It helps avoid direct dependencies on the component's implementation details, making tests more resilient to changes in the UI structure.

***