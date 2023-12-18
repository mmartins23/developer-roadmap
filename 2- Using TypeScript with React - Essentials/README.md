# Table of Contents

1. [Creating a React + TypeScript Project](#creating-a-react--typescript-project)
2. [Understanding the Role of tsconfig.json](#understanding-the-role-of-tsconfigjson)
3. [Building a First Component & Facing a Missing Type](#building-a-first-component--facing-a-missing-type)
4. [Defining Component Props Types](#defining-component-props-types)
5. [Storing Props Types as a Custom Type or Interface](#storing-props-types-as-a-custom-type-or-interface)
5. [Creating a Header Component](#creating-a-header-component)
6. [Using useState() and TypeScript](#using-usestate-and-typescript)
7. [Handling & Typing Events](#handling--typing-events)
8. [Working with Generic Event Types](#working-with-generic-event-types)
9. [Using useRef() with TypeScript](#using-useref-with-typescript)


***

# Creating a React + TypeScript Project

If you want to create a React + TypeScript project with JSX support using Vite, you can use the following command:

```bash
npm create vite@latest react-ts-basics --template react-ts
```

This command uses the Vite template for React with TypeScript (`react-ts`). The `--template` flag allows you to specify the template to use when creating the project. The `react-ts` template includes React and TypeScript configuration, making it suitable for React projects with TypeScript.

***

# Understanding the Role of tsconfig.json

The `tsconfig.json` file in a TypeScript project serves as the configuration file for the TypeScript compiler (`tsc`). It defines compiler options, file inclusion/exclusion, module resolution, source map generation, and other settings crucial for compiling TypeScript code into JavaScript. It provides a centralized way to manage project-specific TypeScript configurations.

***

# Building a First Component & Facing a Missing Type

It looks like you're building a React component called `CourseGoal`, and you're facing a missing type issue. In TypeScript, it's good practice to explicitly define the types for your components' props.

Here's an example of how you can define the prop types for your `CourseGoal` component:

```tsx
import React from 'react';

interface CourseGoalProps {
  title: string;
  description: string;
  onDelete: () => void;
}

const CourseGoal: React.FC<CourseGoalProps> = (props) => {
  return (
    <article>
      <div>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
      <button onClick={props.onDelete}>DELETE</button>
    </article>
  );
};

export default CourseGoal;
```

In this example:

- `CourseGoalProps` is an interface that defines the expected properties for your component.
- `React.FC<CourseGoalProps>` specifies that `CourseGoal` is a functional component that accepts `CourseGoalProps` as its props.

Now, when you use this component, you should provide the required props like this:

```tsx
import React from 'react';
import CourseGoal from './CourseGoal';

const App: React.FC = () => {
  const handleDelete = () => {
    // Handle the delete action
  };

  return (
    <div>
      <CourseGoal title="Your Title" description="Your Description" onDelete={handleDelete} />
    </div>
  );
};

export default App;
```

This way, TypeScript will help catch any potential issues related to incorrect prop types and provide better type safety in your React components.

***

# Defining Component Props Types

In React with TypeScript, defining component props types is essential for ensuring type safety and providing a clear contract for how components should be used. TypeScript allows you to specify the types of props that a component expects, making it easier to catch potential bugs and providing better code documentation.

Let's break down the code you provided:

### Defining Component Props Types:

```tsx
export default function CourseGoal({ title, description }: {
  title: string;
  description: string;
}) {
  // Component implementation
}
```

In this code:

- `title` and `description` are destructured from the `props` object.
- The colon (`:`) is used to specify the expected type for each prop.
- The entire object within curly braces `{}` defines the prop types.
- `string` indicates that both `title` and `description` should be of type string.

### Using the Component:

```tsx
import CourseGoal from "./components/CourseGoal";

export default function App() {
  return (
    <main>
      <CourseGoal 
        title="Learning React + TS" 
        description="Learning it from the ground up"
      />
    </main>
  );
}
```

Here's how the `App` component uses the `CourseGoal` component:

- The `App` component imports `CourseGoal` from the specified file.
- When using `CourseGoal`, it provides values for the `title` and `description` props.
- TypeScript ensures that the provided props match the expected types.

### Explanation:

- By defining prop types using TypeScript, you make it clear what data each prop should receive, enhancing code readability.
- TypeScript will raise a compile-time error if there's an attempt to use the component without providing the required props or if the provided props have incorrect types.
- This practice prevents runtime errors and makes the codebase more maintainable.

In summary, TypeScript's ability to define and enforce prop types enhances the development experience by catching errors early, improving code documentation, and making the codebase more robust. It's a valuable feature, especially in larger projects where type safety is crucial.

***

# Storing Props Types as a Custom Type or Interface

Storing prop types as a custom type or interface in TypeScript is a common practice in React development. This approach allows you to define a reusable type that represents the shape of the props a component expects. Let's break down the code you provided:

### Defining Props Types with Interface:

```tsx
interface CourseGoalProps {
  title: string;
  description: string;
}

export default function CourseGoal({ title, description }: CourseGoalProps) {
  // Component implementation
}
```

In this code:

- `CourseGoalProps` is an interface that specifies the shape of the props for the `CourseGoal` component.
- The interface has two properties: `title` and `description`, both of type string.
- The `CourseGoal` component uses the `CourseGoalProps` interface to define the types of its props.

### Using the Component:

```tsx
import CourseGoal from "./components/CourseGoal";

export default function App() {
  return (
    <main>
      <CourseGoal 
        title="Learning React + TS" 
        description="Learning it from the ground up"
      />
    </main>
  );
}
```

Here's how the `App` component uses the `CourseGoal` component:

- The `CourseGoal` component is imported into the `App` component.
- When using `CourseGoal`, it provides values for the `title` and `description` props.
- TypeScript ensures that the provided props match the shape defined by the `CourseGoalProps` interface.

### Explanation:

- **Reusability:** Storing props types as an interface promotes code reusability. If other components share the same prop types, you can simply import the interface and reuse it.

- **Readability:** Using a named interface improves code readability. The name `CourseGoalProps` provides clear information about the purpose of these props.

- **Type Inference:** TypeScript will infer the types automatically when you use the interface. This reduces redundancy and makes the code more concise.

- **Maintainability:** If you need to update the prop types, you can do it in one place (the interface) rather than updating each component individually.

By using interfaces or custom types for prop definitions, you leverage TypeScript's static typing capabilities to catch errors at compile-time, leading to more robust and maintainable React code.

***

# Defining a Type for Props with "children"

Defining a type for props that include a "children" prop is common in React components. This allows components to accept and render arbitrary content passed between their opening and closing tags. Here's an explanation of the code you provided:


```tsx
import { ReactNode } from "react";

interface CourseGoalProps {
    title: string;
    children: ReactNode;
}

export default function CourseGoal({ title, children }: CourseGoalProps) {
    return (
        <article>
            <div>
                <h2>{title}</h2>
                {children}
            </div>
            <button>DELETE</button>
        </article>
    )
}
```

In this code:

- `ReactNode` is imported from the "react" library. It's a type that represents any node that could be rendered in a React application, including strings, numbers, elements, or fragments.

- The `CourseGoalProps` interface defines the expected props for the `CourseGoal` component. It includes a `title` prop of type string and a `children` prop of type `ReactNode`.

### Using the Component:

```tsx
import CourseGoal from "./components/CourseGoal";

export default function App() {
  return (
    <main>
      <CourseGoal
        title="Learning React + TS">
        <p>Learning it from the ground up</p>
      </CourseGoal>
    </main>
  );
}
```

Here's how the `App` component uses the `CourseGoal` component:

- The `CourseGoal` component is imported into the `App` component.

- When using `CourseGoal`, it provides values for the `title` prop ("Learning React + TS") and includes arbitrary content (a `<p>` element) as the `children` prop.

### Explanation:

- **`ReactNode` Type:** By using `ReactNode` for the `children` prop, the `CourseGoal` component can accept and render any valid React content, such as text, elements, or even other components.

- **Flexibility:** Defining a `children` prop allows the component to be more flexible, as it can accept and render different types of content depending on how it's used.

- **Composition:** This pattern enables component composition, allowing developers to nest components and build complex UI structures while maintaining type safety.

- **Readability:** The use of `children` makes the code more readable, as it clearly indicates that the component can accept and render nested content.

By using the `children` prop and the `ReactNode` type, you create versatile components that can adapt to various content structures, promoting code reusability and readability.

***

# Creating a Header Component

### Exercise: Creating a Header Component

In this exercise, you're creating a `Header` component that accepts an image and children as props. The `App` component then uses this `Header` component along with the previously defined `CourseGoal` component.

### Code Explanation:

#### `Header` Component:

```tsx
// components/Header.tsx
import { ReactNode } from "react";

type HeaderProps = {
    image: {
        src: string;
        alt: string;
    };
    children: ReactNode;
};

export default function Header({ image, children }: HeaderProps) {
    return (
        <header>
            <img src={image.src} alt={image.alt} />
            {children}
        </header>
    );
}
```

- `HeaderProps` is a type that defines the expected props for the `Header` component. It includes an `image` prop, which is an object with `src` and `alt` properties, and a `children` prop of type `ReactNode`.

- The `Header` component takes in the `image` and `children` props and renders an `<img>` element with the specified image source and alt text, followed by the `children` content.

#### `App` Component:

```tsx
// App.tsx
import CourseGoal from "./components/CourseGoal";
import Header from "./components/Header";
import goalsImg from './assets/goals.jpg'

export default function App() {
    return (
        <main>
            <Header image={{ src: goalsImg, alt: 'A List of goals' }}>
                <h1>Your Course Goals</h1>
            </Header>
            <CourseGoal
                title="Learning React + TS">
                <p>Learning it from the ground up</p>
            </CourseGoal>
        </main>
    );
}
```

- The `App` component imports the `CourseGoal` and `Header` components.

- It also imports an image (`goalsImg`) from the `./assets/goals.jpg` path, which is used as the source for the image in the `Header` component.

- Inside the `return` statement, there's a `Header` component with an image prop and a nested `<h1>` element as children. This represents a header with an image and a title.

- Below the `Header`, there's a `CourseGoal` component with a title prop and nested `<p>` element as children, representing a course goal.

### Summary:

- The `Header` component is a reusable component that encapsulates a header structure with an image and arbitrary children.

- The `App` component demonstrates how to use the `Header` component along with other components, showcasing the composability of React components.

- This exercise promotes code organization, reusability, and the use of TypeScript to define clear prop types for better development practices.

***

# Using useState() and TypeScript

The `useState` hook in React is used to add state to functional components. When working with TypeScript, you can provide type annotations for the state variable to enhance type safety. Let's break down the code you provided:

#### Code Explanation:

```tsx
import { useState } from "react";
import CourseGoal from "./components/CourseGoal";
import Header from "./components/Header";
import goalsImg from './assets/goals.jpg'

type CourseGoal = {
  title: string;
  description: string;
  id: number;
}

export default function App() {
  // State variable: goals (array of CourseGoal objects) and setGoals (function to update the state)
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  // Function to handle adding a new goal to the state
  function handleAddGoal() {
    setGoals(prevGoals => {
      const newGoal: CourseGoal = {
        id: Math.random(),
        title: 'Learn React + TS',
        description: 'Learn it in depth!'
      };
      return [...prevGoals, newGoal];
    });
  }

  return (
    <main>
      {/* Header component with an image and title */}
      <Header image={{ src: goalsImg, alt: 'A List of goals' }}>
        <h1>Your Course Goals</h1>
      </Header>

      {/* Button to trigger adding a new goal */}
      <button onClick={handleAddGoal}>Add Goal</button>

      {/* List of goals rendered using the map method */}
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <CourseGoal title={goal.title}>
              <p>{goal.description}</p>
            </CourseGoal>
          </li>
        ))}
      </ul>
    </main>
  );
}
```

#### Breakdown:

1. **Importing `useState`:**
   - The `useState` hook is imported from the React library.

2. **Defining `CourseGoal` Type:**
   - The `CourseGoal` type is defined to represent the shape of each goal object. It includes properties such as `title`, `description`, and `id`.

3. **Using `useState` for Goals State:**
   - The `useState` hook is used to declare a state variable named `goals`. It is initialized as an empty array of `CourseGoal` objects.
   - `setGoals` is a function used to update the state.

4. **`handleAddGoal` Function:**
   - The `handleAddGoal` function is called when the "Add Goal" button is clicked.
   - It uses the functional form of `setGoals` to update the state based on the previous state.
   - It generates a new `CourseGoal` object with a random `id`, a static `title`, and a static `description`.
   - The new goal is added to the array of goals, and the state is updated.

5. **Rendering Components:**
   - The `Header` component is rendered with an image and a title.
   - A "Add Goal" button is rendered, and when clicked, it triggers the `handleAddGoal` function to add a new goal to the state.
   - A list of goals is rendered using the `goals.map` method, where each goal is rendered as a `CourseGoal` component.

### Note:

- The `key` attribute is used in the `<li>` element to help React efficiently update the DOM when the list of goals changes.

- The `handleAddGoal` function correctly uses the functional form of `setGoals` to ensure that the state is updated based on the previous state, preventing race conditions in asynchronous updates.

This code demonstrates a simple React application with a dynamic list of goals that can be added by clicking a button. TypeScript is used to define the types of the state and props, providing better type safety during development.

***

# Reusing Types Across Files

Reusing types across files is a common practice in TypeScript, especially in larger projects where types may be shared among multiple components or modules. This allows for consistency, maintainability, and easier collaboration among developers. Let's break down the code you provided to see how types are reused:

#### Code Explanation:

##### `App.tsx`:

```tsx
import { useState } from "react";
import CourseGoal from "./components/CourseGoal";
import Header from "./components/Header";
import goalsImg from './assets/goals.jpg';
import CourseGoalList from "./components/CourseGoalList";

export type CourseGoal = {
  title: string;
  description: string;
  id: number;
};

export default function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  function handleAddGoal() {
    setGoals(prevGoals => {
      const newGoal: CourseGoal = {
        id: Math.random(),
        title: 'Learn React + TS',
        description: 'Learn it in depth!'
      };
      return [...prevGoals, newGoal];
    });
  }

  return (
    <main>
      <Header image={{ src: goalsImg, alt: 'A List of goals' }}>
        <h1>Your Course Goals</h1>
      </Header>
      <button onClick={handleAddGoal}>Add Goal</button>
      <CourseGoalList goals={goals} />
    </main>
  );
}
```

- In `App.tsx`, the `CourseGoal` type is defined at the top of the file using `export type`. This makes the `CourseGoal` type accessible outside of the file.

- The `CourseGoal` type is then used in the state declaration and the `handleAddGoal` function.

- The `CourseGoalList` component is imported and used with the `goals` prop.

##### `CourseGoalList.tsx`:

```tsx
import CourseGoal from "./CourseGoal";
import { CourseGoal as CGoal } from '../App';

type CourseGoalListProps = {
  goals: CGoal[];
};

export default function CourseGoalList({ goals }: CourseGoalListProps) {
  return (
    <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <CourseGoal title={goal.title}>
            <p>{goal.description}</p>
          </CourseGoal>
        </li>
      ))}
    </ul>
  );
}
```

- In `CourseGoalList.tsx`, the `CourseGoal` type is imported using `import { CourseGoal as CGoal } from '../App';`. This allows the usage of the `CourseGoal` type within this file with the alias `CGoal`.

- The `CourseGoalList` component takes a `goals` prop with the type `CGoal[]`, which is an array of `CourseGoal` objects.

### Summary:

- Types are defined in one file (`App.tsx`) and exported using `export type` to make them available for reuse in other files.

- In the file where the type is reused (`CourseGoalList.tsx`), it is imported using `import { TypeAlias as AliasName } from 'filePath';`, and the imported type can be used locally with an alias if needed.

- Reusing types in this manner helps maintain consistency in the project, reduces redundancy, and makes it easier to understand and collaborate on code.

***

# Passing Functions as Values - In A Type-Safe Way

Passing functions as values, especially in the context of React, allows child components to communicate with their parent components. TypeScript can be used to ensure type safety when passing functions as props between components. Let's break down the code you provided:

#### Code Explanation:

##### `App.tsx`:

```tsx
import { useState } from "react";
import CourseGoal from "./components/CourseGoal";
import Header from "./components/Header";
import goalsImg from './assets/goals.jpg'
import CourseGoalList from "./components/CourseGoalList";

export type CourseGoal = {
  title: string;
  description: string;
  id: number;
};

export default function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  function handleAddGoal() {
    setGoals(prevGoals => {
      const newGoal: CourseGoal = {
        id: Math.random(),
        title: 'Learn React + TS',
        description: 'Learn it in depth!'
      };
      return [...prevGoals, newGoal];
    });
  }

  function handleDeleteGoal(id: number) {
    setGoals(prevGoals => prevGoals.filter(goal => goal.id !== id));
  }

  return (
    <main>
      <Header image={{ src: goalsImg, alt: 'A List of goals' }}>
        <h1>Your Course Goals</h1>
      </Header>
      <button onClick={handleAddGoal}>Add Goal</button>
      <CourseGoalList goals={goals} onDelete={handleDeleteGoal} />
    </main>
  );
}
```

- In `App.tsx`, the `handleAddGoal` function is responsible for adding a new goal to the state.

- The `handleDeleteGoal` function is responsible for deleting a goal based on its `id`.

- The `CourseGoalList` component is rendered and receives the `onDelete` prop, which is the `handleDeleteGoal` function.

##### `CourseGoal.tsx`:

```tsx
import { type ReactNode } from "react";

interface CourseGoalProps {
    id: number;
    title: string;
    children: ReactNode;
    onDelete: (id: number) => void;
}

export default function CourseGoal({ id, title, children, onDelete }: CourseGoalProps
) {
    return (
        <article>
            <div>
                <h2>{title}</h2>
                {children}
            </div>
            <button onClick={() => onDelete(id)}>Delete</button>
        </article>
    );
}
```

- In `CourseGoal.tsx`, the `onDelete` prop is of type `(id: number) => void`, indicating that it's a function that takes an `id` parameter and returns `void` (no return value).

- When the "Delete" button is clicked, the `onDelete` function is called with the current goal's `id`.

##### `CourseGoalList.tsx`:

```tsx
import CourseGoal from "./CourseGoal";
import { type CourseGoal as CGoal } from '../App';

type CourseGoalListProps = {
    goals: CGoal[];
    onDelete: (id: number) => void;
}

export default function CourseGoalList({ goals, onDelete }: CourseGoalListProps) {
    return (
        <ul>
            {goals.map((goal) => (
                <li key={goal.id}>
                    <CourseGoal id={goal.id} title={goal.title} onDelete={onDelete}>
                        <p>{goal.description}</p>
                    </CourseGoal>
                </li>
            ))}
        </ul>
    );
}
```

- In `CourseGoalList.tsx`, the `onDelete` prop is passed down to each `CourseGoal` component.

- When a specific `CourseGoal` component needs to be deleted, the `onDelete` function is triggered, providing the `id` of the goal to be deleted.

### Summary:

- TypeScript ensures type safety when passing functions as props by explicitly defining the function types.

- In this example, the `onDelete` function is defined with a specific signature `(id: number) => void`.

- The `CourseGoalList` component receives the `onDelete` function as a prop and passes it down to each `CourseGoal` component.

- This pattern facilitates communication between parent and child components in a type-safe manner.

***

# Handling & Typing Events

Handling and typing events in React involves defining event handlers and ensuring that the types of the events are correctly specified. TypeScript provides support for typing events, which helps catch potential issues and provides better tooling for developers. Let's break down the code you provided:

#### Code Explanation:

##### `App.tsx`:

```tsx
import { useState } from "react";
import CourseGoal from "./components/CourseGoal";
import Header from "./components/Header";
import goalsImg from './assets/goals.jpg'
import CourseGoalList from "./components/CourseGoalList";
import NewGoal from "./components/NewGoal";

export type CourseGoal = {
  title: string;
  description: string;
  id: number;
};

export default function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  function handleAddGoal() {
    setGoals(prevGoals => {
      const newGoal: CourseGoal = {
        id: Math.random(),
        title: 'Learn React + TS',
        description: 'Learn it in depth!'
      };
      return [...prevGoals, newGoal]
    });
  }

  function handleDeleteGoal(id: number) {
    setGoals(prevGoals => prevGoals.filter(goal => goal.id !== id))
  }

  return (
    <main>
      <Header image={{ src: goalsImg, alt: 'A List of goals' }}>
        <h1>Your Course Goals</h1>
      </Header>
      <NewGoal />
      <CourseGoalList goals={goals} onDelete={handleDeleteGoal} />
    </main>
  );
}
```

- In `App.tsx`, there are two event handlers:
  - `handleAddGoal`: Adds a new goal to the state.
  - `handleDeleteGoal`: Deletes a goal based on its `id`.

- These event handlers are passed down as props to child components.

##### `NewGoal.tsx`:

```tsx
import { type FormEvent } from 'react';

export default function NewGoal() {
  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    // Perform additional logic for form submission
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="goal">Your goal</label>
        <input id="goal" type="text" />
      </p>
      <p>
        <label htmlFor="summary">Short summary</label>
        <input id="summary" type="text" />
      </p>
      <p>
        <button>Add Goal</button>
      </p>
    </form>
  );
}
```

- In `NewGoal.tsx`, the `handleSubmit` function is an event handler for the form submission.

- The `FormEvent` type is imported from React to specify the type of the event object in the `handleSubmit` function.

- The `event.preventDefault()` is used to prevent the default form submission behavior.

- This component is a form with two input fields and a button. When the form is submitted, the `handleSubmit` function is called.

### Summary:

- Typing events in React involves specifying the types of event objects in event handler functions.

- TypeScript provides types for different kinds of events, such as `FormEvent` for form submissions.

- By specifying the types of events, TypeScript helps catch potential issues related to event handling and provides better code intelligence in editors.

- In the provided example, the `handleSubmit` function is an event handler for form submission, and the type `FormEvent` ensures that the event object is correctly typed.

***

# Working with Generic Event Types

In TypeScript, when working with event handlers in React, it's common to use generic event types to provide better type safety and to specify the type of the event target. The `FormEvent` you see in your code is a generic type provided by React that allows you to specify the type of the event target (e.g., `HTMLFormElement`). Let's break down the code and understand how generic event types work:

#### Code Explanation:

```tsx
import { type FormEvent } from 'react';

export default function NewGoal() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // Additional logic for form submission
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="goal">Your goal</label>
        <input id="goal" type="text" />
      </p>
      <p>
        <label htmlFor="summary">Short summary</label>
        <input id="summary" type="text" />
      </p>
      <p>
        <button>Add Goal</button>
      </p>
    </form>
  );
}
```

- **Import Statement:** The `FormEvent` type is imported from React. This type is a generic type that allows you to specify the type of the event target.

- **Event Handler Function:** The `handleSubmit` function is an event handler for the form's `onSubmit` event. It takes an event parameter with the type `FormEvent<HTMLFormElement>`. This means that the `event` object is expected to be an event related to a form (`HTMLFormElement`).

- **Preventing Default Action:** Within the `handleSubmit` function, `event.preventDefault()` is called. This prevents the default form submission behavior, which is essential when handling forms in React to control the submission process.

- **JSX:** The component renders a form with two input fields and a button. The `onSubmit` attribute of the form is set to the `handleSubmit` function.

### Generic Event Types Explained:

- **Generic Type (`FormEvent`):** The `FormEvent` type is a generic type in TypeScript that takes a type argument. In this case, the type argument is `HTMLFormElement`. This indicates that the event target (the element the event is triggered on) is expected to be an HTML form.

- **Type Argument (`HTMLFormElement`):** By specifying `HTMLFormElement` as the type argument, TypeScript provides type safety within the event handler. It ensures that properties and methods specific to an HTML form are accessible on the `event` object.

- **Usage in JSX:** When using the `onSubmit` attribute in JSX, the type of the event handler function is specified, ensuring that the correct event type is handled.

### Summary:

- Generic event types, like `FormEvent`, are used to provide type safety when working with events in React.

- They allow you to specify the type of the event target, ensuring that the properties and methods associated with that type are correctly inferred by TypeScript.

- In the provided example, `FormEvent<HTMLFormElement>` is used to handle the form submission event, providing type safety and preventing default form submission behavior.

***

# Using useRef() with TypeScript

In React, the `useRef()` hook is commonly used to create mutable objects that persist across renders. It is often used to reference and interact with DOM elements. When working with TypeScript, `useRef()` can be used with generics to specify the type of the object being referred to, providing type safety. Let's break down the code:

#### Code Explanation:

```tsx
import { useRef, type FormEvent } from 'react';

export default function NewGoal() {
  const goal = useRef<HTMLInputElement>(null);
  const summary = useRef<HTMLInputElement>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const enteredGoal = goal.current!.value;
    const enteredSummary = summary.current!.value;

    // Additional logic with enteredGoal and enteredSummary
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="goal">Your goal</label>
        <input id="goal" type="text" ref={goal}/>
      </p>
      <p>
        <label htmlFor="summary">Short summary</label>
        <input id="summary" type="text" ref={summary}/>
      </p>
      <p>
        <button>Add Goal</button>
      </p>
    </form>
  );
}
```

- **Import Statement:** The `useRef` hook and the `FormEvent` type are imported from the 'react' library. The `FormEvent` type is a generic type that can be used to specify the type of the event target.

- **Creating Refs:** Two `useRef` hooks are used to create refs for the `goal` and `summary` input elements. The type parameter `<HTMLInputElement>` is used to specify that these refs will be referencing `HTMLInputElement` elements.

- **Event Handler (`handleSubmit`):** The `handleSubmit` function is an event handler for the form's `onSubmit` event. It takes an event parameter with the type `FormEvent<HTMLFormElement>`, specifying that the event target is expected to be an HTML form.

- **Accessing Ref Values:** Within the `handleSubmit` function, the values of the `goal` and `summary` input fields are accessed using `goal.current!.value` and `summary.current!.value`. The use of `!` is a non-null assertion operator, indicating to TypeScript that it can be certain that `current` is not `null` or `undefined` at this point.

- **JSX and Ref Attachments:** In the JSX, the `ref` attribute is used to attach the `goal` and `summary` refs to the respective input elements.

### Benefits of Using useRef() with TypeScript:

1. **Type Safety:** TypeScript allows you to specify the type of the object being referenced by the `useRef` hook. This provides type safety when accessing properties or methods of the referenced object.

2. **Mutability:** `useRef` allows you to create mutable objects that persist across renders without causing re-renders when the referenced object changes.

3. **Interaction with DOM Elements:** `useRef` is commonly used to interact with and manipulate DOM elements directly.

### Summary:

- `useRef` with TypeScript provides type safety and mutability for references to DOM elements.

- Refs created with `useRef` can be attached to React elements, allowing you to interact with them imperatively.

- The `FormEvent` type helps specify the type of the event object for the form submission event.

- Accessing values via refs can be useful when handling form submissions or working with DOM elements directly.

***

# Handling User Input in a Type-Safe Way:

The provided code is a React application that demonstrates handling user input in a type-safe way using TypeScript. Let's break down the key aspects:

1. **CourseGoal Type:**
   
    ```tsx
    export type CourseGoal = {
      title: string;
      description: string;
      id: number;
    }
    ```

    - Defines a `CourseGoal` type, representing the structure of a course goal.
    - It includes properties `title` (string), `description` (string), and `id` (number).

2. **App Component:**
   
    ```tsx
    export default function App() {
      const [goals, setGoals] = useState<CourseGoal[]>([]);

      function handleAddGoal(goal: string, summary: string) {
        setGoals(prevGoals => {
          const newGoal: CourseGoal = {
            id: Math.random(),
            title: goal,
            description: summary,
          };
          return [...prevGoals, newGoal]
        });
      }

      function handleDeleteGoal(id: number) {
        setGoals(prevGoals => prevGoals.filter(goal => goal.id !== id))
      }
    ```
    - Manages the state of goals using `useState`. `goals` is an array of `CourseGoal`.
    - Provides two functions `handleAddGoal` and `handleDeleteGoal` to add and delete goals.

3. **NewGoal Component:**
   
    ```tsx
    import { useRef, type FormEvent } from 'react';

    interface NewGoalProps  {
      onAddGoal: (goal: string, summary: string) => void;
    }

    export default function NewGoal({onAddGoal}:NewGoalProps ) {
      const goal = useRef<HTMLInputElement>(null);
      const summary = useRef<HTMLInputElement>(null);

      function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const enteredGoal = goal.current!.value;
        const enteredSummary = summary.current!.value;

        event.currentTarget.reset();
        onAddGoal(enteredGoal, enteredSummary);
      }
    ```
   
    - Implements a `NewGoal` component that allows users to input new goals.
    - Utilizes `useRef` to get references to input elements (`goal` and `summary`).
    - Defines an `onAddGoal` prop, a callback function to handle adding new goals.

4. **Form Handling in NewGoal Component:**
   
    ```tsx
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="goal">Your goal</label>
        <input id="goal" type="text" ref={goal}/>
      </p>
      <p>
        <label htmlFor="summary">Short summary</label>
        <input id="summary" type="text" ref={summary}/>
      </p>
      <p>
        <button>Add Goal</button>
      </p>
    </form>
    ```

    - Renders a form with input fields for goal and summary.
    - Utilizes the `onSubmit` event to trigger the `handleSubmit` function.
    - Clears the form after submission by resetting the form's values.

In summary, this code illustrates how TypeScript can be used to define a type for the structure of data (in this case, `CourseGoal`). It also demonstrates the type-safe handling of user input in a React application by enforcing the types of input data and using TypeScript interfaces for prop definitions. This approach helps catch potential errors during development and enhances the overall maintainability of the code.