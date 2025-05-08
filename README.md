# Blog 1 : interface vs type in TypeScript — What You Must Know

TypeScript makes our JavaScript code more powerful and secure.
One of its biggest strengths is its type system.
In this system, we can define types in two ways using interface and type.
Many people think they’re the same, but in reality, there are some important differences.
<br>
<br>

## The Battle of Two Titans:
### ✅ Similarities (Why People Get Confused):

interface User {
name: string;
age: number;
};

type User = {
name: string;
age: number;
};

<br>
<br>


## 🔍 Key Differences You Must Know

### Declaration:

interface Person {
name: string;
};
<br>

interface Person {
age: number;
};

// Now Person has both `name` and `age`

<br>
<br>

### Extending Types – Both Can, But Differently:

interface Animal {
name: string;
};
<br>

interface Dog extends Animal {
breed: string;
};
<br>

## With type:
type Animal = {
name: string;
};

type Dog = Animal & {
breed: string;
};

### Union & Intersection Types – Only With type:

type ID = string | number; <br>
type ApiResponse = Success | Error;

### Primitive Types, Tuples, & Utility Types – type is More Versatile:
type Age = number;<br>
type Point = [number, number];<br>
type ReadOnlyUser = Readonly<User>;

## ✅ Final Overview

Use interface when working with class-based code and object structures.<br>
Use type when working with complex type expressions like unions, intersections, or primitives.

<br>
<br>
<br>
<hr>
<br>

# Blog 2 : What is the Use of the keyof Keyword in TypeScript?

TypeScript enhances JavaScript by providing static typing and powerful type manipulation tools. One such tool is the keyof keyword.

## What is keyof?

The keyof keyword in TypeScript is used to create a type that represents the keys of an object type

### Syntax:
keyof Type


## Why Is keyof Useful?

1. Type Safety
2. Dynamic Property Access
3. Generic Programming

### Example:

interface User {
  name: string;
  age: number;
  email: string;
};<br>

type UserKeys = keyof User;<br>

const key: UserKeys = "name";<br>
const anotherKey: UserKeys = "email";

## Key Takeaways:
 1. Type Safety
 2. Flexibility

## ✅ Final Overview
1. keyof is a TypeScript keyword that extracts the keys of an object type as a union of string literals.
2. It enhances type safety by ensuring only valid property names can be used.

3. It is especially powerful when combined with generics to build flexible and reusable functions.

<br>
<br>
<br>
<br>
<hr>

<br>

# Blog 3: What is the Use of Enums in TypeScript? (With Numeric & String Examples)

TypeScript enums provide a convenient way to define and use named constant values in your code, making it more readable, maintainable, and type-safe.

## What is an Enum?
An enum is a TypeScript feature that lets you define a group of named constants.

### Enums are especially helpful when:
1. You have a fixed set of values.
2. You want to prevent magic strings or hardcoded numbers in your code.
3. You want autocomplete and type-checking benefits.

## Numeric Enums:
By default, TypeScript assigns numeric values starting from 0 to the enum members.

### Example:
enum Direction {<br>
  Up,     // 0 <br>
  Down,   // 1<br>
  Left,   // 2<br>
  Right   // 3<br>
}

let move: Direction = Direction.Up;

## String Enums:
String enums give each member a specific string value, which can be more meaningful and readable especially useful for things like API status codes or user roles.


### Example:

enum UserRole {<br>
  Admin = "ADMIN",<br>
  Vendor = "VENDOR",<br>
  Customer = "CUSTOMER"<br>
}

const role: UserRole = UserRole.Admin;


## ✅ Final Overview:
1. Enums in TypeScript allow you to define named constants.
2. Numeric enums are auto-incremented starting from 0
3. String enums assign specific string values to enum members for better clarity