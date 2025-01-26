---
title: "Understanding Java's Object-Oriented Programming Principles"
date: 2024-01-11
tags: ["Java", "OOP"]
---

Understanding the principles of OOP is crucial for effective Java programming. In this blog post, we will explore the four main principles of OOP in Java: Encapsulation, Inheritance, Polymorphism, and Abstraction. We will illustrate these concepts using a practical example of a Bank Account.

## Classes and Objects

### What are Classes?

A class is a blueprint for creating objects. It defines properties (attributes) and behaviors (methods) that the objects created from the class can have. In Java, classes are the foundation of OOP, allowing developers to model real-world entities. A class encapsulates data for the object and methods to manipulate that data.

### What are Objects?

An object is an instance of a class. Each object can hold different values for its properties but will share the same methods defined in the class. Objects represent specific instances of classes and encapsulate both data and behavior, allowing for organized and modular code.

### Example: Bank Account Class

Let’s create a simple BankAccount class that encapsulates all relevant data and methods related to a bank account.

```java
public class BankAccount {
    private String accountNumber; // Unique identifier for the account
    private String accountHolderName; // Name of the account holder
    private double balance; // Current balance in the account

    // Constructor to initialize a new bank account
    public BankAccount(String accountNumber, String accountHolderName) {
        this.accountNumber = accountNumber;
        this.accountHolderName = accountHolderName;
        this.balance = 0.0; // Initial balance set to zero
    }

    // Method to deposit money into the account
    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount; // Increase balance by deposit amount
            System.out.println("Deposited: " + amount);
        } else {
            System.out.println("Deposit amount must be positive.");
        }
    }

    // Method to withdraw money from the account
    public void withdraw(double amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount; // Decrease balance by withdrawal amount
            System.out.println("Withdrew: " + amount);
        } else {
            System.out.println("Invalid withdrawal amount.");
        }
    }

    // Method to get the current balance
    public double getBalance() {
        return balance;
    }

    // Method to get account details as a string
    public String getAccountDetails() {
        return "Account Number: " + accountNumber + ", Account Holder: " + accountHolderName + ", Balance: " + balance;
    }
}

```

In this example, BankAccount is a class that contains private fields for accountNumber, accountHolderName, and balance, along with methods to deposit, withdraw, and retrieve account details. An object of this class can be created to represent a specific bank account.

## Encapsulation

Encapsulation is one of the fundamental principles of OOP. It refers to the bundling of data (attributes) and methods (functions) that operate on that data within a single unit, typically a class. This principle restricts direct access to some of an object's components, which helps prevent unintended interference and misuse of the methods and data.

### Key Features:

- Access Modifiers: The use of private, protected, and public keywords to control access to class members.
- Getters and Setters: Public methods that allow controlled access to private fields.

### Example:

In our BankAccount class:

- The attributes accountNumber, accountHolderName, and balance are marked as private. This means they cannot be accessed directly from outside the class.
- Public methods (deposit, withdraw, getBalance, and getAccountDetails) provide controlled access to these private fields.

```java
public class BankAccount {
    private String accountNumber;
    private String accountHolderName;
    private double balance;

    // Constructor and other methods...

    public double getBalance() {
        return balance; // Controlled access to balance
    }

    public String getAccountDetails() {
        return "Account Number: " + accountNumber + ", Account Holder: " + accountHolderName + ", Balance: " + balance;
    }
}

```

By using encapsulation, we ensure that any changes to the internal state of an object must occur through its methods, which can include validation logic (e.g., ensuring that deposits are positive). This approach not only protects data integrity but also makes it easier to maintain and extend our code in the future.

## Inheritance

Inheritance allows one class (the child or subclass) to inherit fields and methods from another class (the parent or superclass). This promotes code reusability and establishes a natural hierarchy between classes.

### Types of Inheritance:

- Single Inheritance: A subclass inherits from one superclass.
- Multilevel Inheritance: A subclass inherits from a superclass which is also a subclass of another class.
- Hierarchical Inheritance: Multiple subclasses inherit from a single superclass.

### Example:

Let’s create two subclasses, SavingsAccount and CheckingAccount, that extend our base BankAccount class.

```java
public class SavingsAccount extends BankAccount {
    private double interestRate; // Interest rate for savings

    public SavingsAccount(String accountNumber, String accountHolderName, double interestRate) {
        super(accountNumber, accountHolderName); // Call constructor of superclass
        this.interestRate = interestRate; // Set interest rate
    }

    public void applyInterest() {
        double interest = getBalance() * interestRate / 100; // Calculate interest
        deposit(interest); // Deposit interest into the account
        System.out.println("Interest applied: " + interest);
    }
}

public class CheckingAccount extends BankAccount {
    private double overdraftLimit; // Overdraft limit for checking accounts

    public CheckingAccount(String accountNumber, String accountHolderName, double overdraftLimit) {
        super(accountNumber, accountHolderName); // Call constructor of superclass
        this.overdraftLimit = overdraftLimit; // Set overdraft limit
    }

    @Override
    public void withdraw(double amount) {
        if (amount > 0 && amount <= (getBalance() + overdraftLimit)) { // Allow withdrawal within limit
            super.withdraw(amount); // Call method from superclass
        } else {
            System.out.println("Withdrawal exceeds overdraft limit.");
        }
    }
}

```

In this example:

The SavingsAccount subclass inherits properties and methods from BankAccount. It adds an additional method called applyInterest that calculates and deposits interest based on the current balance.
The CheckingAccount subclass also inherits from BankAccount but overrides the withdraw method to include logic for handling overdrafts.
This hierarchical structure allows us to reuse code effectively while also providing specialized behavior for different types of accounts.

## Polymorphism

Polymorphism enables objects to be treated as instances of their parent class, allowing for method overriding and method overloading. This principle provides flexibility in programming by allowing one interface to be used for a general class of actions.

### Types of Polymorphism:

- Compile-time Polymorphism: Achieved through method overloading.
- Runtime Polymorphism: Achieved through method overriding.

### Example:

In our banking application, we can demonstrate polymorphism by treating different types of accounts as instances of BankAccount.

```java
public class Main {
    public static void main(String[] args) {
        BankAccount mySavings = new SavingsAccount("12345", "Alice", 2.5);
        BankAccount myChecking = new CheckingAccount("67890", "Bob", 500);

        mySavings.deposit(1000);
        mySavings.withdraw(200);

        ((SavingsAccount) mySavings).applyInterest(); // Applying interest

        myChecking.deposit(500);
        myChecking.withdraw(700); // Should succeed due to overdraft limit

        System.out.println(mySavings.getAccountDetails());
        System.out.println(myChecking.getAccountDetails());
    }
}

```

In this example:

- Both mySavings and myChecking are treated as instances of BankAccount.
- We can call methods defined in the base class while also utilizing overridden methods in derived classes (like withdraw in CheckingAccount).
- The line (SavingsAccount) mySavings demonstrates casting, allowing us to access subclass-specific methods like applyInterest.
  Polymorphism enhances flexibility in code design since it allows programmers to write more generic code that can work with objects of different classes while still maintaining specific behavior where necessary.

## Abstraction

Abstraction focuses on hiding complex implementation details while exposing only the necessary parts of an object. This simplifies interaction with objects by reducing complexity and increasing efficiency.

### Implementation Techniques:

- Abstract Classes: Classes that cannot be instantiated on their own but can define abstract methods that must be implemented by subclasses.
- Interfaces: Contracts that define methods without providing implementations, which must be fulfilled by implementing classes.

### Example:

To further illustrate abstraction in our banking application, we could define an interface for transactions:

```java
public interface Transactional {
    void deposit(double amount);
    void withdraw(double amount);
}

```

Both SavingsAccount and CheckingAccount could implement this interface:

```java
public class SavingsAccount extends BankAccount implements Transactional {
   // Implementations...
}

public class CheckingAccount extends BankAccount implements Transactional {
   // Implementations...
}

```

By implementing this interface, both subclasses agree to provide concrete implementations for depositing and withdrawing funds while hiding their internal complexities from users. This allows users to interact with different types of accounts through a common interface without needing to understand their internal workings.

## Conclusion

Understanding these four principles—Encapsulation, Inheritance, Polymorphism, and Abstraction—is essential for mastering Java's object-oriented programming paradigm. Each principle contributes uniquely to creating robust applications:

- Encapsulation protects data integrity by restricting direct access to an object's internal state. This not only enhances security but also makes it easier for developers to manage changes within their classes without affecting other parts of the program.
- Inheritance promotes code reuse by allowing new classes to inherit properties and behaviors from existing ones. This hierarchical structure simplifies maintenance since common functionality can be centralized in parent classes while still allowing specialized behavior in child classes.
- Polymorphism enhances flexibility by enabling objects of different types to be treated as instances of their parent type. This allows developers to write more generic code that can work with various objects while still providing specific implementations where needed.
- Abstraction simplifies complex systems by exposing only necessary functionalities while hiding intricate details. By focusing on what an object does rather than how it does it, developers can create cleaner interfaces that are easier for others (and themselves) to use.

The example of a bank account illustrates how these principles work together harmoniously within an application. By leveraging OOP effectively, developers can create systems that are not only easier to understand but also scalable and maintainable over time.
In conclusion, mastering these OOP principles is not just about learning syntax or features; it’s about adopting a mindset that prioritizes organization, clarity, and efficiency in software development. As you continue your journey with Java or any other object-oriented language, keep these principles at the forefront of your design decisions. They will serve as invaluable tools in your programming toolkit, enabling you to tackle complex problems with elegance and confidence. Happy coding!
