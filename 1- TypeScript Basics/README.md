# Table of Contents

- [Working with Types Type Inference Explicit Type Annotations](#working-with-types-type-inference-explicit-type-annotations)
  - [1. Type Inference](#1-type-inference)
  - [2. Explicit Type Annotations](#2-explicit-type-annotations)
  - [Conclusion](#conclusion)

- [Basic Primitive Types](#basic-primitive-types)
  - [1. Boolean](#1-boolean)
  - [2. Number](#2-number)
  - [3. String](#3-string)
  - [4. Null and Undefined](#4-null-and-undefined)
  - [5. Void](#5-void)
  - [6. Any](#6-any)
  - [7. Never](#7-never)

- [Combining Types Union Types](#combining-types-union-types)
  - [Example 1: Union Types in Variables](#example-1-union-types-in-variables)
  - [Example 2: Union Types in Function Parameters](#example-2-union-types-in-function-parameters)
  - [Example 3: Union Types with Custom Types](#example-3-union-types-with-custom-types)

- [Working with Object Types](#working-with-object-types)
  - [Example 1: Basic Object Type](#example-1-basic-object-type)
  - [Example 2: Optional Properties](#example-2-optional-properties)
  - [Example 3: Readonly Properties](#example-3-readonly-properties)

***

# Working with Types Type Inference Explicit Type Annotations

In TypeScript, working with types involves specifying the data types of variables, parameters, and return values in your code. TypeScript supports both type inference and explicit type annotations to help developers catch errors early and improve code readability.

### 1. Type Inference:

TypeScript has a feature known as type inference, which allows the compiler to automatically determine the data type of a variable based on its initialization value. This helps reduce the need for explicit type annotations in many cases, making code more concise. Here's an example:

```typescript
// Type inference
let message = "Hello, TypeScript!"; // TypeScript infers the type as string
let count = 42; // TypeScript infers the type as number

// TypeScript understands the types
console.log(message.length); // OK, length property on a string
console.log(count.toFixed(2)); // OK, toFixed method on a number
```

In the above example, TypeScript infers the types of `message` and `count` based on their assigned values.

### 2. Explicit Type Annotations:

While type inference is powerful, there are cases where you want to explicitly define the data type of a variable, parameter, or function return type. This can enhance code clarity and provide more robust type checking. Here's an example using explicit type annotations:

```typescript
// Explicit type annotations
let userName: string = "John"; // Variable with explicit string type
let userAge: number = 25; // Variable with explicit number type

// Function with explicit type annotations
function greet(name: string): string {
    return `Hello, ${name}!`;
}

// Using explicit type annotations for function parameters and return type
function addNumbers(a: number, b: number): number {
    return a + b;
}

// TypeScript checks types
console.log(greet(userName)); // OK
// console.log(greet(userAge)); // Error: Argument of type 'number' is not assignable to parameter of type 'string'

console.log(addNumbers(10, 20)); // OK
// console.log(addNumbers("10", 20)); // Error: Argument of type '"10"' is not assignable to parameter of type 'number'
```

In this example, `userName` and `userAge` have explicit type annotations. The `greet` function and `addNumbers` function also have explicit type annotations for parameters and return types.

By using explicit type annotations, you provide additional information to the TypeScript compiler, making it easier to catch type-related errors during development.

### Conclusion:

TypeScript's combination of type inference and explicit type annotations gives developers flexibility and control over how types are specified in their code. It allows for a balance between concise, readable code and strong static typing, helping catch potential issues early in the development process.


***

# Basic Primitive Types

In TypeScript, primitive types are the basic building blocks for defining the types of variables and values in your code. Here are some of the basic primitive types in TypeScript, along with examples:

In TypeScript, primitive types are the basic building blocks for defining the types of variables and values in your code. Here are some of the basic primitive types in TypeScript, along with examples:

### 1. Boolean:

Represents a boolean value, either `true` or `false`.

```typescript
let isDone: boolean = false;
console.log(isDone); // Output: false
```

### 2. Number:

Represents numeric values, including integers and floating-point numbers.

```typescript
let count: number = 42;
let price: number = 19.99;
console.log(count, price); // Output: 42 19.99
```

### 3. String:

Represents textual data, enclosed in single or double quotes.

```typescript
let message: string = "Hello, TypeScript!";
console.log(message); // Output: Hello, TypeScript!
```

### 4. Null and Undefined:

`null` and `undefined` are values that represent the absence of a value.

```typescript
let data: null = null;
let value: undefined = undefined;
console.log(data, value); // Output: null undefined
```

### 5. Void:

Indicates that a function does not return a value.

```typescript
function logMessage(): void {
    console.log("This function does not return a value.");
}
logMessage();
```

### 6. Any:

Represents a value of any type. Avoid using `any` if possible, as it undermines TypeScript's static type checking.

```typescript
let dynamicValue: any = "This can be any type.";
console.log(dynamicValue); // Output: This can be any type.
```

### 7. Never:

Represents a value that never occurs. Often used for functions that throw exceptions or never return.

```typescript
function throwError(message: string): never {
    throw new Error(message);
}
```

These are the basic primitive types in TypeScript. Leveraging these types in your code helps TypeScript catch errors during development and improves code maintainability. Consider using more specific types whenever possible to benefit from TypeScript's strong static typing features.

***


# Combining Types Union Types

In TypeScript, union types allow you to specify that a variable or parameter can have multiple types. A union type is formed by using the `|` (pipe) operator between the types. This provides flexibility, allowing a variable to hold values of different types. Union types are particularly useful when you want a function or variable to accept or return values that can be of different types.

Here's a brief explanation of union types with examples:

### Example 1: Union Types in Variables

```typescript
// Union type for a variable
let result: string | number;

result = "Success";
console.log(result.length); // OK, result is a string

result = 42;
console.log(result.toFixed(2)); // OK, result is a number
```

In this example, the variable `result` can be either a string or a number. TypeScript allows you to perform operations that are valid for both types without causing type errors.

### Example 2: Union Types in Function Parameters

```typescript
// Union type for function parameters
function displayInfo(value: string | number): void {
    if (typeof value === "string") {
        console.log(`String length: ${value.length}`);
    } else {
        console.log(`Numeric value: ${value.toFixed(2)}`);
    }
}

displayInfo("Hello"); // String length: 5
displayInfo(42);      // Numeric value: 42.00
```

In this example, the `displayInfo` function can accept either a string or a number as its parameter. Inside the function, TypeScript uses a type guard (`typeof`) to distinguish between the types and perform type-specific operations.

### Example 3: Union Types with Custom Types

```typescript
// Union type with custom types
type Shape = "circle" | "square" | "triangle";

function getShapeArea(shape: Shape, size: number): number {
    switch (shape) {
        case "circle":
            return Math.PI * Math.pow(size / 2, 2);
        case "square":
            return Math.pow(size, 2);
        case "triangle":
            return (Math.sqrt(3) / 4) * Math.pow(size, 2);
        default:
            throw new Error("Invalid shape");
    }
}

console.log(getShapeArea("circle", 4));    // Area of a circle
console.log(getShapeArea("square", 5));    // Area of a square
console.log(getShapeArea("triangle", 6));  // Area of an equilateral triangle
```

In this example, the `Shape` type is a union type consisting of string literal types. The `getShapeArea` function accepts a shape and a size, and it returns the area based on the shape. The `Shape` type restricts the allowed values for the `shape` parameter.

Union types provide a powerful way to express that a value can have more than one type, offering flexibility and type safety in TypeScript. They are commonly used in scenarios where the type of a variable or parameter is not fixed and can vary under certain conditions.

***

# Working with Object Types

In TypeScript, object types allow you to define the shape of an object by specifying the types of its properties. You can also define optional properties, readonly properties, and specify the types of the property values. Here's an example of working with object types in TypeScript:

### Example 1: Basic Object Type

```typescript
// Define an object type
type Person = {
    firstName: string;
    lastName: string;
    age: number;
};

// Create an object with the defined type
let person: Person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
};

// Access properties
console.log(person.firstName); // Output: John
console.log(person.age);        // Output: 30
```

In this example, we've defined an object type `Person` with three properties: `firstName`, `lastName`, and `age`. We then create an object of type `Person` with specific values for each property.

### Example 2: Optional Properties

```typescript
// Define an object type with optional properties
type Car = {
    brand: string;
    model: string;
    year?: number; // Optional property
};

// Create objects with optional properties
let car1: Car = {
    brand: "Toyota",
    model: "Camry",
};

let car2: Car = {
    brand: "Honda",
    model: "Civic",
    year: 2020,
};
```

In this example, the `year` property is marked as optional with the `?` syntax. This means you can choose to include or omit the `year` property when creating objects of type `Car`.

### Example 3: Readonly Properties

```typescript
// Define an object type with readonly properties
type Point = {
    readonly x: number;
    readonly y: number;
};

// Create an object with readonly properties
let point: Point = {
    x: 10,
    y: 20,
};

// Attempt to modify a readonly property (will result in a TypeScript error)
// point.x = 30; // Error: Cannot assign to 'x' because it is a read-only property.
```

In this example, the `x` and `y` properties are marked as `readonly`, meaning their values cannot be modified after the object is created.


These are basic examples of working with object types in TypeScript. Object types are a powerful feature that allows you to enforce the structure of your objects and catch potential errors during development. They provide a way to define and work with complex data structures in a statically-typed manner.

***

# Working with Array Types

In TypeScript, array types allow you to define the types of elements within an array. You can specify the type of elements that an array should contain, ensuring type safety during development. Here's an example of working with array types in TypeScript:

### Example: Array Types

```typescript
// Array of numbers
let numbers: number[] = [1, 2, 3, 4, 5];
console.log(numbers); // Output: [1, 2, 3, 4, 5]

// Array of strings
let fruits: string[] = ["apple", "banana", "orange"];
console.log(fruits); // Output: ["apple", "banana", "orange"]

// Mixed-type array
let mixedArray: (string | number)[] = ["apple", 42, "orange", 99];
console.log(mixedArray); // Output: ["apple", 42, "orange", 99]

// Array using the Array constructor
let colors: Array<string> = new Array("red", "green", "blue");
console.log(colors); // Output: ["red", "green", "blue"]

// Readonly array
let readOnlyNumbers: ReadonlyArray<number> = [1, 2, 3];
// readOnlyNumbers.push(4); // Error: Property 'push' does not exist on type 'readonly number[]'

// Two-dimensional array
let matrix: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
console.log(matrix); // Output: [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
```

In this example:

- `numbers` is an array that can only contain numbers.
- `fruits` is an array that can only contain strings.
- `mixedArray` is an array that can contain both strings and numbers.
- `colors` is an array created using the `Array` constructor.
- `readOnlyNumbers` is a readonly array, preventing modification after initialization.
- `matrix` is a two-dimensional array containing arrays of numbers.

By specifying the types of elements within an array, TypeScript helps catch potential type-related errors during development. Arrays in TypeScript can be used with various types and configurations to suit different scenarios.

***

# Adding Types to Functions - Parameter & Return Value Types

In TypeScript, you can add types to function parameters and return values to provide clarity and enable the TypeScript compiler to perform static type checking. This helps catch potential errors early in the development process. Here's an example of adding types to function parameters and return values:

```typescript
// Function with parameter and return type annotations
function addNumbers(a: number, b: number): number {
    return a + b;
}

// Function with no return type annotation (implicitly returns 'void')
function logMessage(message: string): void {
    console.log(message);
}

// Function with complex parameter and return types
function getUserDetails(id: number): { name: string; age: number } {
    // Simulating fetching user details from a database
    const user = {
        name: "John Doe",
        age: 30,
    };

    return user;
}

// Function with optional parameter
function greet(name: string, greeting?: string): string {
    if (greeting) {
        return `${greeting}, ${name}!`;
    } else {
        return `Hello, ${name}!`;
    }
}

// Function with default parameter value
function calculateArea(radius: number = 1): number {
    return Math.PI * Math.pow(radius, 2);
}

// Using the functions
const sum = addNumbers(10, 20); // sum is inferred as a number
logMessage("Hello, TypeScript!"); // No return value (void)

const userDetails = getUserDetails(123); // userDetails is inferred as { name: string, age: number }

const greetingMessage = greet("Alice"); // greetingMessage is inferred as string
const personalizedGreeting = greet("Bob", "Good evening"); // personalizedGreeting is inferred as string

const area1 = calculateArea(); // Uses the default radius (1)
const area2 = calculateArea(5); // Provides a specific radius (5)
```

In this example:

- The `addNumbers` function takes two parameters of type `number` and returns a value of type `number`.
- The `logMessage` function takes a parameter of type `string` and returns no value (implicitly `void`).
- The `getUserDetails` function takes a parameter of type `number` and returns an object with properties `name` (string) and `age` (number).
- The `greet` function demonstrates an optional parameter (`greeting`). If `greeting` is provided, it returns a personalized greeting; otherwise, it defaults to a standard greeting.
- The `calculateArea` function has a default parameter (`radius = 1`), allowing the function to be called without providing a value for `radius`.

Adding types to function parameters and return values enhances code readability and helps prevent potential errors by enforcing type constraints. It also provides clear documentation for developers working with the code.

***

# Defining Function Types

Let's go through the explanation of defining function types with the provided example:

```typescript
// Function: Adds two numbers
function add(a: number, b: number): number {
  const result = a + b;
  return result;
}

// Type: Function type for adding two numbers
type AddFn = (a: number, b: number) => number;

// Function: Takes two numbers and a function adhering to AddFn type
function calculate(a: number, b: number, calcFn: AddFn) {
  // Calls the provided function with the two numbers, but the result is not used
  calcFn(a, b);
}

// Call the 'calculate' function with the 'add' function
calculate(2, 5, add);
```

Explanation:

1. **`add` Function**: This function takes two parameters `a` and `b`, both of type `number`, and returns their sum as a `number`.

2. **`AddFn` Type**: This type represents a function type that takes two parameters `number` and returns a `number`. It is similar to the signature of the `add` function.

3. **`calculate` Function**: This function takes two numbers `a` and `b`, and a function `calcFn` that adheres to the `AddFn` type. However, the result of calling `calcFn(a, b)` is not used or returned.

4. **Calling `calculate` with `add`**: The `calculate` function is called with the numbers `2` and `5`, and the `add` function. The purpose of this is to demonstrate passing the `add` function to `calculate`.

In TypeScript, defining function types helps establish clear contracts about the expected structure of functions used in your code. In this example, `AddFn` describes the type of functions that take two numbers and return another number, ensuring that the function passed to `calculate` adheres to this format.

***

# Creating Custom Types / Type Aliases

Let's explore creating custom types or type aliases in TypeScript with various code examples.

### 1. Basic Type Aliases:

```typescript
// Custom type aliases for basic types
type Age = number;
type Name = string;

const userAge: Age = 25;
const userName: Name = "John";
```

In this example, `Age` and `Name` are custom type aliases representing `number` and `string` types, respectively.

### 2. Union Types with Type Aliases:

```typescript
// Custom type alias for a union type
type Result = string | number;

const value1: Result = "Hello";
const value2: Result = 42;
```

Here, `Result` is a type alias for a union type that can hold either a `string` or a `number`.

### 3. Object Type with Type Aliases:

```typescript
// Custom type alias for an object type
type Person = {
  name: string;
  age: number;
};

const user: Person = {
  name: "Alice",
  age: 30,
};
```

In this example, `Person` is a type alias representing an object type with `name` (a string) and `age` (a number) properties.

### 4. Function Type with Type Aliases:

```typescript
// Custom type alias for a function type
type MathOperation = (a: number, b: number) => number;

const add: MathOperation = (a, b) => a + b;
const subtract: MathOperation = (a, b) => a - b;
```

Here, `MathOperation` is a type alias for a function that takes two numbers and returns a number.

### 5. Generic Type Aliases:

```typescript
// Generic type alias
type Pair<T> = {
  first: T;
  second: T;
};

const numberPair: Pair<number> = { first: 1, second: 2 };
const stringPair: Pair<string> = { first: "one", second: "two" };
```

In this example, `Pair` is a generic type alias that can be used with different types.

### 6. Intersection Types with Type Aliases:

```typescript
// Custom type aliases for intersection types
type Employee = {
  name: string;
  role: string;
};

type Manager = {
  meetings: number;
};

type ManagerEmployee = Employee & Manager;

const manager: ManagerEmployee = {
  name: "John",
  role: "Manager",
  meetings: 3,
};
```

Here, `ManagerEmployee` is a type alias for an intersection type combining properties from `Employee` and `Manager`.

Custom types or type aliases provide a way to create meaningful names for various types in your code, making it more readable and maintainable.

***

# Defining Object Types with Interfaces

Certainly! In TypeScript, you can use interfaces to define object types, allowing you to enforce a specific structure for objects. Here are examples of defining object types with interfaces:

### 1. Basic Object Type with Interface:

```typescript
// Defining a basic object type with an interface
interface Person {
  name: string;
  age: number;
}

// Using the defined interface
const user: Person = {
  name: "Alice",
  age: 30,
};
```

In this example, the `Person` interface defines an object type with `name` (a string) and `age` (a number) properties. The `user` object adheres to this interface.

### 2. Optional Properties:

```typescript
// Object type with optional properties using an interface
interface Car {
  brand: string;
  model: string;
  year?: number; // Optional property
}

// Objects with optional properties
const car1: Car = {
  brand: "Toyota",
  model: "Camry",
};

const car2: Car = {
  brand: "Honda",
  model: "Civic",
  year: 2020,
};
```

In this example, the `Car` interface includes an optional property `year`, allowing flexibility in object creation.

### 3. Readonly Properties:

```typescript
// Object type with readonly properties using an interface
interface Point {
  readonly x: number;
  readonly y: number;
}

// Object with readonly properties
const point: Point = {
  x: 10,
  y: 20,
};

// Attempting to modify a readonly property (will result in a TypeScript error)
// point.x = 30; // Error: Cannot assign to 'x' because it is a read-only property.
```

Here, the `Point` interface includes readonly properties `x` and `y`, ensuring that their values cannot be modified after object creation.

### 4. Extending Interfaces:

```typescript
// Extending interfaces to create a new one
interface Shape {
  color: string;
}

interface Circle extends Shape {
  radius: number;
}

// Object adhering to the extended interface
const myCircle: Circle = {
  color: "blue",
  radius: 5,
};
```

In this example, the `Circle` interface extends the `Shape` interface, inheriting the `color` property.

### 5. Function Type in Interface:

```typescript
// Interface with a function type
interface Greeter {
  greet: (name: string) => string;
}

// Object adhering to the interface with a function property
const myGreeter: Greeter = {
  greet: (name) => `Hello, ${name}!`,
};
```

Here, the `Greeter` interface defines an object type with a function property `greet`.

These examples showcase how interfaces in TypeScript provide a powerful way to define and enforce the structure of object types, promoting code readability and maintainability.

***

# Interfaces vs Custom Types

In TypeScript, both interfaces and type aliases can be used to define custom types. However, there are some differences between the two. Here's an explanation with code examples:

### Interfaces:

Interfaces are often used for defining object shapes and contracts. They can be extended and implemented, allowing for a more object-oriented approach.

#### Example:

```typescript
// Interface defining an object shape
interface Person {
  name: string;
  age: number;
}

// Using the defined interface
const user: Person = {
  name: "Alice",
  age: 30,
};
```

#### Extending Interfaces:

```typescript
// Extending interfaces
interface Employee extends Person {
  role: string;
}

const employee: Employee = {
  name: "Bob",
  age: 25,
  role: "Developer",
};
```

### Types:

Type aliases provide a way to name any type. They are often used for creating union types, intersection types, or for simplifying complex types.

#### Example:

```typescript
// Type alias for a union type
type Result = string | number;

const value1: Result = "Hello";
const value2: Result = 42;
```

#### Intersection Types with Type Aliases:

```typescript
// Intersection types with type aliases
type A = { a: number };
type B = { b: string };

type C = A & B;

const obj: C = { a: 1, b: "two" };
```

### When to Use Interfaces or Types:

- **Use interfaces when**:
  - You want to define the shape of an object.
  - You want to extend or implement an existing type.
  - You are working with classes and want to define contracts.

- **Use types when**:
  - You want to create union types, intersection types, or other complex types.
  - You want to create aliases for primitive types, making your code more expressive.

### Key Differences:

- **Declaration Merging**: Interfaces support declaration merging, meaning you can extend them multiple times to add more properties. Types do not support declaration merging.

```typescript
// Interface with declaration merging
interface Car {
  brand: string;
}

interface Car {
  model: string;
}

const myCar: Car = { brand: "Toyota", model: "Camry" };
```

- **Implements and Extends**: Interfaces can be implemented by classes, and they can extend other interfaces. Types cannot be implemented or extended.

```typescript
// Interface with extends
interface Animal {
  sound(): void;
}

interface Dog extends Animal {
  bark(): void;
}

// Error: 'type' cannot be used here
type AnimalType = {
  sound(): void;
};
```

In summary, both interfaces and types have their use cases, and the choice between them often depends on the specific requirements of your code. Use interfaces for defining object shapes and contracts, and use types for creating more complex type compositions.

***

# Merging Types

Combining types in TypeScript can be done using the `&` (intersection) operator to create a new type that includes properties from multiple types. Let's explore this with examples using both interfaces and type aliases:

### Combining Interfaces with `&`:

```typescript
// First interface declaration
interface Person {
  name: string;
  age: number;
}

// Second interface declaration with the same name
interface Employee {
  role: string;
  salary: number;
}

// Combined interface using '&'
interface EmployeeDetails extends Person, Employee {
  // Combining properties from both interfaces
}

// Using the combined interface
const myDetails: EmployeeDetails = {
  name: "Alice",
  age: 30,
  role: "Developer",
  salary: 60000,
};
```

In this example, the `EmployeeDetails` interface is created by combining the properties of both `Person` and `Employee` using the `&` operator.

### Combining Type Aliases with `&`:

```typescript
// First type alias declaration
type Point2D = {
  x: number;
  y: number;
};

// Second type alias declaration with the same name
type Point2D = {
  z: number;
};

// Error: Duplicate identifier 'Point2D'.
```

Type aliases do not support merging, so attempting to declare a type alias with the same name more than once will result in an error.

However, you can achieve a similar effect with `&` directly in the type alias:

```typescript
// Type alias with '&'
type Point3D = Point2D & {
  z: number;
};

// Using the type alias
const point3D: Point3D = { x: 1, y: 2, z: 3 };
```

In this case, the `Point3D` type alias is created by intersecting `Point2D` with an object containing a `z` property.

These examples illustrate how combining types using `&` allows you to create more complex types by merging properties from different sources, whether they are interfaces or type aliases.

***

# Being Specific With Literal Types

In TypeScript, literal types allow you to be very specific about the exact values that a variable can hold. Literal types are types that represent exactly one value. Here's an explanation with code examples:

### String Literal Types:

```typescript
// String literal type
let status: "success" | "error";

status = "success"; // Valid
// status = "warning"; // Error: Type '"warning"' is not assignable to type '"success" | "error"'.
```

In this example, `status` can only be assigned the values `"success"` or `"error"`. Any other string value will result in a TypeScript error.

### Numeric Literal Types:

```typescript
// Numeric literal type
let speed: 50 | 100;

speed = 50; // Valid
// speed = 75; // Error: Type '75' is not assignable to type '50 | 100'.
```

Here, `speed` can only be assigned the values `50` or `100`. Attempting to assign any other numeric value will result in an error.

### Boolean Literal Types:

```typescript
// Boolean literal type
let hasPermission: true | false;

hasPermission = true; // Valid
// hasPermission = 0; // Error: Type '0' is not assignable to type 'true | false'.
```

In this case, `hasPermission` can only be `true` or `false`. Assigning any other boolean value will cause a TypeScript error.

### Combining Literal Types:

You can also combine literal types to create more specific combinations:

```typescript
// Combining literal types
let result: "success" | "error" | "loading";

result = "success"; // Valid
// result = "timeout"; // Error: Type '"timeout"' is not assignable to type '"success" | "error" | "loading"'.
```

Here, `result` can be `"success"`, `"error"`, or `"loading"`. Any other string value will result in a TypeScript error.

Literal types provide a powerful way to express and enforce specific values for variables, making your code more robust and self-documenting. They are particularly useful in scenarios where you want to be explicit about the expected values.

***