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
