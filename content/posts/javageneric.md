---
title: "Java Generics"
date: 2024-05-26
tags: ["Java", "OOP"]
---

## Introduction

Generics in Java allow you to write flexible, reusable, and type-safe code. By using generics, you can create classes, interfaces, and methods that operate on any data type while ensuring type safety at compile time. This eliminates the need for explicit type casting and reduces the risk of runtime errors. This guide explores the fundamentals of Java generics, including generic classes, generic methods, and best practices.

## Generic Class

A generic class is a class that can work with any data type. You define a generic class by specifying a type parameter in angle brackets (`<>`). This type parameter can then be used throughout the class to define fields, methods, and return types.

### Example: Generic Class

```java
public class Box<T> {
    private T content;

    public void set(T content) {
        this.content = content;
    }

    public T get() {
        return content;
    }
}

public class GenericExample {
    public static void main(String[] args) {
        Box<Integer> integerBox = new Box<>();
        integerBox.set(10);
        System.out.println("Integer Value: " + integerBox.get());

        Box<String> stringBox = new Box<>();
        stringBox.set("Hello Generics");
        System.out.println("String Value: " + stringBox.get());
    }
}

```

### Key Points:

- Type Parameter (T): The T in Box<T> is a placeholder for any data type. You can use any valid identifier (e.g., E, K, V) for type parameters.

- Type Safety: Generics ensure type safety at compile time. For example, you cannot add a String to a Box<Integer>.

- Reusability: The same Box class can be used to store Integer, String, or any other type.

### Generic Method

A generic method is a method that can accept parameters of any type. Like generic classes, generic methods use type parameters to define the types they operate on. You can also apply constraints to type parameters using bounded types.

### Example: Generic Method with Bounded Type

```java

public class Utilities {
    public static <T extends Comparable<T>> T findMax(T a, T b) {
        return a.compareTo(b) > 0 ? a : b;
    }
}

public class GenericMethodExample {
    public static void main(String[] args) {
        System.out.println("Max of 3 and 7: " + Utilities.findMax(3, 7));
        System.out.println("Max of 'apple' and 'orange': " + Utilities.findMax("apple", "orange"));
    }
}

```

### Key Points:

- Type Parameter in Method: The <T extends Comparable<T>> syntax defines a type parameter T that must implement the Comparable interface.

- Bounded Types: Bounded types restrict the types that can be used as arguments. In this example, T must be a type that implements Comparable.

- Flexibility: Generic methods can be used with any type that meets the specified constraints.

### Wildcards in Generics

Wildcards (?) are used in generics to represent unknown types. They are particularly useful when working with collections or methods that need to accept a range of types.

### Example: Wildcard with Upper Bound

```java

import java.util.List;

public class WildcardExample {
    public static double sumOfList(List<? extends Number> list) {
        double sum = 0.0;
        for (Number num : list) {
            sum += num.doubleValue();
        }
        return sum;
    }

    public static void main(String[] args) {
        List<Integer> integers = List.of(1, 2, 3);
        List<Double> doubles = List.of(1.5, 2.5, 3.5);

        System.out.println("Sum of integers: " + sumOfList(integers));
        System.out.println("Sum of doubles: " + sumOfList(doubles));
    }
}
```

### Key Points:

- Upper-Bounded Wildcard (? extends T): Accepts any type that is a subclass of T. For example, List<? extends Number> can accept List<Integer>, List<Double>, etc.

- Lower-Bounded Wildcard (? super T): Accepts any type that is a superclass of T. For example, List<? super Integer> can accept List<Number>, List<Object>, etc.

- Unbounded Wildcard (?): Accepts any type. For example, List<?> can accept a list of any type.

### Best Practices for Using Generics

- Use Descriptive Type Parameter Names: Use meaningful names like T for type, E for element, K for key, and V for value.

- Prefer Generic Types Over Raw Types: Always use generic types to ensure type safety and avoid runtime errors.

- Use Bounded Types When Necessary: Apply constraints to type parameters to ensure they meet specific requirements.

- Avoid Using Wildcards Unnecessarily: Wildcards can make code harder to read. Use them only when needed for flexibility.

- Leverage Generic Methods: Use generic methods to write reusable and type-safe utility functions.

### Common Pitfalls

- Type Erasure: At runtime, generic type information is erased. This can lead to issues when working with reflection or casting.

- Raw Types: Using raw types (e.g., List instead of List<String>) can lead to unchecked warnings and runtime errors.

- Overcomplicating Generics: Avoid overly complex generic code that can make your program difficult to understand and maintain.

### Conclusion

Generics are a powerful feature in Java that enable you to write flexible, reusable, and type-safe code. By understanding generic classes, methods, and wildcards, you can create robust and efficient programs. Always follow best practices to avoid common pitfalls and ensure your code is clean and maintainable. With generics, you can build applications that are both scalable and type-safe.
