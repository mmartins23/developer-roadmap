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