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