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