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

# Understanding ARIA Roles

Understanding ARIA (Accessible Rich Internet Applications) roles is crucial for building web applications that are accessible to people with disabilities. ARIA roles provide semantic information about the roles of elements in a web page, enabling assistive technologies to convey the content and functionality to users who may have visual or cognitive impairments. Here are some key aspects of understanding ARIA roles:

### 1. **What are ARIA Roles?**

- **Definition:** ARIA roles are a set of attributes that define the purpose and behavior of HTML elements on a webpage.
  
- **Accessibility Enhancement:** They are designed to enhance the accessibility of web content by providing additional information to assistive technologies such as screen readers.

### 2. **Common ARIA Roles:**

- **`role` Attribute:** ARIA roles are applied using the `role` attribute in HTML elements. Some common ARIA roles include:

  - **`role="button"`:** Represents a button element.
  - **`role="link"`:** Represents a hyperlink.
  - **`role="heading"`:** Represents a heading (e.g., `<h1>`, `<h2>`).
  - **`role="img"`:** Represents an image.

### 3. **Why Use ARIA Roles?**

- **Semantic Information:** ARIA roles provide semantic information beyond the standard HTML elements, helping assistive technologies understand the purpose of different parts of the page.

- **Interactive Elements:** They are especially useful for making interactive elements, such as custom buttons or navigation components, accessible to users with disabilities.

### 4. **How to Use ARIA Roles:**

- **Adding Roles:** You can add ARIA roles to HTML elements using the `role` attribute. For example:

  ```html
  <button role="button">Click me</button>
  ```

- **ARIA States and Properties:** In addition to roles, ARIA includes states and properties to provide more detailed information about the current state of an element.

### 5. **Testing ARIA Roles:**

- **Jest and Testing Library:** When testing React components, tools like Jest and Testing Library can be used to ensure that ARIA roles are correctly applied. This involves querying the DOM for elements based on their ARIA roles and asserting that they meet the expected criteria.

### 6. **ARIA Best Practices:**

- **Use Native Semantics:** Whenever possible, use native HTML elements with built-in semantics (e.g., `<button>`, `<a>`, `<h1>`) rather than relying solely on ARIA roles.

- **Ensure Compatibility:** ARIA roles should be used in a way that complements, not contradicts, the native semantics of HTML elements. This ensures compatibility with a wide range of user agents and assistive technologies.

Understanding and applying ARIA roles contribute to creating a more inclusive web experience. By providing clear and accurate information about the structure and purpose of content, developers can build web applications that are accessible to everyone, regardless of their abilities or disabilities.

***