---
title: "Multithreading and Concurrency in Java"
date: 2024-04-09
tags: ["Java", "OOP"]
---

## Introduction

Multithreading is a powerful feature in Java that allows multiple threads to execute concurrently within a single program. This capability is essential for building responsive and high-performance applications, especially in scenarios involving tasks like I/O operations, background processing, or parallel computations. However, multithreading also introduces challenges such as thread synchronization, race conditions, and deadlocks. This guide explores the fundamentals of multithreading in Java, including thread creation, synchronization, and best practices.

## Creating Threads

In Java, threads can be created in two primary ways:

1. **By extending the `Thread` class**.
2. **By implementing the `Runnable` interface**.

### Example: Extending the `Thread` Class

```java
class MyThread extends Thread {
    public void run() {
        for (int i = 0; i < 5; i++) {
            System.out.println(Thread.currentThread().getId() + " Value " + i);
        }
    }
}

public class ThreadExample {
    public static void main(String args[]) {
        MyThread t1 = new MyThread();
        MyThread t2 = new MyThread();
        t1.start();
        t2.start();
    }
}

```

### Key Points:

- run() Method: The run() method contains the code that will be executed when the thread starts.

- start() Method: The start() method initiates the thread's execution, which internally calls the run() method.

- Thread IDs: Each thread has a unique ID, which can be accessed using Thread.currentThread().getId().

### Example: Implementing the Runnable Interface

```java

class MyRunnable implements Runnable {
    public void run() {
        for (int i = 0; i < 5; i++) {
            System.out.println(Thread.currentThread().getId() + " Value " + i);
        }
    }
}

public class RunnableExample {
    public static void main(String args[]) {
        Thread t1 = new Thread(new MyRunnable());
        Thread t2 = new Thread(new MyRunnable());
        t1.start();
        t2.start();
    }
}

```

### Key Points:

- Flexibility: Implementing Runnable is preferred over extending Thread because it allows your class to extend another class if needed.

- Thread Creation: A Runnable object is passed to the Thread constructor to create a thread.

### Synchronization

When multiple threads access shared resources, there is a risk of race conditions, where the outcome depends on the order of thread execution. To prevent this, Java provides synchronization mechanisms to ensure that only one thread can access a shared resource at a time.

### Example: Synchronized Method

```java

class Counter {
    private int count = 0;

    public synchronized void increment() {
        count++;
    }

    public int getCount() {
        return count;
    }
}

public class SynchronizationExample {
    public static void main(String[] args) throws InterruptedException {
        Counter counter = new Counter();
        Thread t1 = new Thread(() -> {
            for (int i = 0; i < 1000; i++) {
                counter.increment();
            }
        });
        Thread t2 = new Thread(() -> {
            for (int i = 0; i < 1000; i++) {
                counter.increment();
            }
        });

        t1.start();
        t2.start();
        t1.join();
        t2.join();

        System.out.println("Final count: " + counter.getCount());
    }
}

```

### Key Points:

- synchronized Keyword: The synchronized keyword ensures that only one thread can execute the increment() method at a time.

- Thread Safety: Synchronization prevents race conditions and ensures thread-safe access to shared resources.

- join() Method: The join() method ensures that the main thread waits for t1 and t2 to complete before printing the final count.

### Common Multithreading Challenges

- Race Conditions: Occur when multiple threads access shared data concurrently, leading to inconsistent results.

- Deadlocks: Occur when two or more threads are blocked forever, waiting for each other to release locks.

- Starvation: Occurs when a thread is unable to gain access to a shared resource and is perpetually delayed.

### Example: Deadlock Scenario

```java

class Resource {
    public synchronized void method1(Resource other) {
        System.out.println(Thread.currentThread().getName() + " executing method1");
        other.method2();
    }

    public synchronized void method2() {
        System.out.println(Thread.currentThread().getName() + " executing method2");
    }
}

public class DeadlockExample {
    public static void main(String[] args) {
        Resource r1 = new Resource();
        Resource r2 = new Resource();

        Thread t1 = new Thread(() -> r1.method1(r2));
        Thread t2 = new Thread(() -> r2.method1(r1));

        t1.start();
        t2.start();
    }
}

```

### Key Points:

- Deadlock Prevention: Avoid circular dependencies and use timeouts or lock ordering to prevent deadlocks.

### Best Practices for Multithreading

- Prefer Runnable Over Thread: Use the Runnable interface for better flexibility and code reusability.

- Use Thread Pools: Instead of creating new threads manually, use thread pools (e.g., ExecutorService) to manage threads efficiently.

- Minimize Synchronization: Synchronization can lead to performance bottlenecks. Use it only when necessary.

- Use Concurrent Collections: Java provides thread-safe collections like ConcurrentHashMap and CopyOnWriteArrayList for concurrent access.

- Avoid Blocking Operations: Long-running or blocking operations in threads can degrade performance. Use asynchronous programming techniques where possible.

### Conclusion

Multithreading and concurrency are essential for building high-performance Java applications. By understanding thread creation, synchronization, and common challenges, you can write efficient and thread-safe code. Always follow best practices to avoid pitfalls like race conditions, deadlocks, and performance bottlenecks. With careful design and implementation, multithreading can significantly enhance the responsiveness and scalability of your applications.
