# JavaScript For Loop — Basics and Usage

## 1. What Is a `for` Loop?

A `for` loop is used to **repeat a block of code** while a condition is true.

Instead of writing the same code multiple times, we can use a loop.

```javascript
console.log("Hello");
console.log("Hello");
console.log("Hello");
```

We can write the same thing using a `for` loop:

```javascript
for (let i = 0; i < 3; i++) {
  console.log("Hello");
}
```

**Output:**

```text
Hello
Hello
Hello
```

## 2. Why Do We Use a `for` Loop?

We use a `for` loop when we need to repeat an action multiple times.

Common scenarios:

- Repeating an action a known number of times.
- Printing numbers from 1 to 10.
- Going through items in an array.
- Processing multiple test data values.
- Running similar checks in QA automation.
- Performing calculations, such as sums and factorials.
- Repeating an operation until a condition becomes false.

**Important:** We often use a `for` loop when we know the number of iterations or have a clear counter-based condition. However, we do not always need to know the exact number of iterations in advance.

## 3. Basic Syntax

```javascript
for (initialization; condition; update) {
  // Code to repeat
}
```

The three parts inside the parentheses are separated by semicolons (`;`).

### Understanding I-C-U

You can use **I-C-U** as a memory aid:

| Part | Meaning | Example |
|---|---|---|
| I | Initialization | `let i = 1` |
| C | Condition | `i <= 5` |
| U | Update | `i++` |

These are memory aids, not JavaScript keywords.

### Example

```javascript
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
```

**Explanation:**

- `let i = 1` — Start the counter at 1.
- `i <= 5` — Continue while `i` is less than or equal to 5.
- `i++` — Increase `i` by 1 after each iteration.
- `console.log(i)` — Print the current value.

**Output:**

```text
1
2
3
4
5
```

## 4. How Does a `for` Loop Work?

Consider this example:

```javascript
for (let i = 1; i <= 3; i++) {
  console.log(i);
}
```

Execution order:

1. Initialize `i` to `1`.
2. Check whether `i <= 3`.
3. If the condition is true, execute the loop body.
4. Increase `i` by 1.
5. Check the condition again.
6. Stop when the condition becomes false.

When `i` becomes `4`, the condition `i <= 3` is false, so the loop stops.

**Remember the execution order:**

`Initialization → Condition → Loop body → Update → Condition again`

The initialization runs only once. The condition is checked before each iteration, and the update runs after the loop body completes normally.

## 5. Common Use Cases

### Scenario 1: Repeat an Action

```javascript
for (let i = 1; i <= 3; i++) {
  console.log("Test run:", i);
}
```

Useful when you need to repeat an action a fixed number of times.

### Scenario 2: Iterate Through an Array

```javascript
const browsers = ["Chrome", "Firefox", "Safari"];

for (let i = 0; i < browsers.length; i++) {
  console.log(browsers[i]);
}
```

**Output:**

```text
Chrome
Firefox
Safari
```

Here, `i` represents the array index. Array indexes start at `0`.

### Scenario 3: Check Multiple Test Data Values

```javascript
const usernames = ["alice", "bob", "charlie"];

for (let i = 0; i < usernames.length; i++) {
  console.log("Checking username:", usernames[i]);
}
```

In QA automation, loops can help apply similar checks to multiple data values.

### Scenario 4: Calculate a Total

```javascript
let total = 0;

for (let i = 1; i <= 5; i++) {
  total += i;
}

console.log(total);
```

**Output:**

```text
15
```

The loop adds the numbers from 1 to 5.

## 6. Understanding Array Index and Length

This is one of the most important concepts to understand before working with loops in JavaScript.

### Example

```javascript
const fruits = ["Apple", "Banana", "Mango"];
```

| Index | Value |
|---:|---|
| 0 | Apple |
| 1 | Banana |
| 2 | Mango |

**Important differences:**

- `fruits.length` is `3` because the array contains three elements.
- The first element is at index `0`.
- The last element is at index `2`.
- The last index is `length - 1`.

```javascript
console.log(fruits.length); // 3
console.log(fruits[0]);     // Apple
console.log(fruits[2]);     // Mango
console.log(fruits[3]);     // undefined
```

### Why Does Indexing Start at 0?

JavaScript arrays use zero-based indexing. This means the first element has index `0`, not `1`.

For an array containing `n` elements, the usual valid indexes are from `0` through `n - 1`.

### Correct Loop for an Array

```javascript
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
```

The condition `i < fruits.length` ensures that the loop visits indexes `0`, `1`, and `2`.

### Common Index Mistake: Using `<=`

```javascript
for (let i = 0; i <= fruits.length; i++) {
  console.log(fruits[i]);
}
```

The loop runs with `i = 3` as well. However, `fruits[3]` does not refer to an existing element, so it returns `undefined`.

**Remember:**

- Use `i < array.length` when iterating through every element of a normal array.
- Do not confuse the number of elements with the last index.
- This type of boundary mistake is called an **off-by-one error**.

## 7. Understanding `i++` and Other Updates

The expression `i++` increases the value of `i` by one.

```javascript
let i = 1;

i++;

console.log(i);
```

**Output:**

```text
2
```

Other update examples:

```javascript
i--;    // Decrease by 1
i += 2; // Increase by 2
i -= 2; // Decrease by 2
i *= 2; // Multiply by 2
```

### Example: Increase by 2

```javascript
for (let i = 2; i <= 10; i += 2) {
  console.log(i);
}
```

**Output:**

```text
2
4
6
8
10
```

The update expression determines how the counter changes after each iteration.

## 8. Common Mistakes

### Mistake 1: Using `<` Instead of `<=`

```javascript
for (let i = 1; i < 5; i++) {
  console.log(i);
}
```

Output:

```text
1
2
3
4
```

The number `5` is not printed because the condition is `i < 5`.

To include `5`, use `i <= 5`.

### Mistake 2: Forgetting to Update the Counter

```javascript
// Be careful: this loop does not terminate normally.
for (let i = 1; i <= 5;) {
  console.log(i);
}
```

The counter never changes, so the condition remains true. This creates an infinite loop.

### Mistake 3: Updating the Counter in the Wrong Direction

```javascript
for (let i = 1; i <= 5; i--) {
  console.log(i);
}
```

The counter starts at `1` and decreases. It will remain less than or equal to `5`, so the loop does not terminate normally.

### Mistake 4: Using the Wrong Array Index

```javascript
const fruits = ["Apple", "Banana", "Mango"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
```

Start at `0` to access the first array item. Starting at `1` would skip the first item.

### Mistake 5: Adding a Semicolon After the Loop Header

```javascript
for (let i = 0; i < 3; i++);
{
  console.log("Hello");
}
```

The semicolon ends the `for` loop with an empty body. The block that follows is separate and executes once, so `"Hello"` is printed only once.

### Mistake 6: Using a Step That Skips the Target

```javascript
for (let i = 1; i != 5; i += 2) {
  console.log(i);
}
```

The counter takes the values `1`, `3`, `5`, so this particular loop reaches `5` and stops. But if the target changes to `6`, the counter will skip it and continue indefinitely.

For most counter-based loops, a boundary condition such as `i < limit` or `i <= limit` is safer than `i != limit`.

## 9. Tricky Interview Output Questions

Try to predict the output before running each example.

### Question 1: Basic Boundary

```javascript
for (let i = 0; i < 4; i++) {
  console.log(i);
}
```

Think about:

- What is the initial value?
- When does the condition become false?
- Is `4` printed?

### Question 2: Counter Updated Twice

```javascript
for (let i = 0; i < 5; i++) {
  i++;
  console.log(i);
}
```

Think about how `i++` inside the loop body interacts with the update expression in the loop header.

### Question 3: `continue` and `break`

```javascript
for (let i = 1; i <= 6; i++) {
  if (i === 3) continue;
  if (i === 5) break;

  console.log(i);
}
```

Identify which iterations are skipped and when the loop stops.

### Question 4: Variable Scope

```javascript
for (let i = 0; i < 3; i++) {
  console.log(i);
}

console.log(i);
```

Does the final statement print a value or throw an error? Explain why.

### Question 5: A Loop That Never Reaches Its Target

```javascript
for (let i = 0; i <= 10; i += 3) {
  console.log(i);
}
```

Does the loop print `10`? Explain how the update step affects the values reached by the counter.

## 10. Quick Summary

- **Initialization:** Where the loop starts.
- **Condition:** Determines whether the loop continues.
- **Update:** Changes the counter after each iteration.
- **Loop body:** The code that runs each time.
- **Array length:** The number of elements in an array.
- **Array index:** The position of an element, starting at `0`.
- **Last array index:** Usually `array.length - 1`.
- **Off-by-one error:** A mistake that causes a loop to run one time too many or too few.
- **Infinite loop:** A loop that does not reach its stopping condition.

Remember the basic pattern:

```javascript
for (let i = 0; i < 5; i++) {
  // Code to repeat
}
```

For an array:

```javascript
for (let i = 0; i < array.length; i++) {
  // Access the current element using array[i]
}
```

## 11. Practice Exercises

Try solving these without looking at the examples.

### Basic

1. Print numbers from 1 to 10.
2. Print even numbers from 2 to 10.
3. Print numbers from 10 down to 1.
4. Calculate the sum of numbers from 1 to 10.
5. Print the multiplication table of 7.

### Array Index and Length

6. Print every item in this array:

   ```javascript
   const cities = ["Colombo", "Kandy", "Galle"];
   ```

7. Print the first and last elements of the `cities` array using indexes.
8. What is the value of `cities.length`?
9. What does `cities[3]` return, and why?
10. Explain why `i < cities.length` is normally used instead of `i <= cities.length`.

### Debugging and Output Prediction

11. Predict the output:

    ```javascript
    for (let i = 1; i <= 5; i++) {
      console.log(i);
    }
    ```

12. Find and fix the bug:

    ```javascript
    for (let i = 1; i <= 5; i--) {
      console.log(i);
    }
    ```

13. Predict the output:

    ```javascript
    for (let i = 1; i <= 5; i++) {
      console.log(i++);
    }
    ```

14. Explain why this loop may never terminate:

    ```javascript
    for (let i = 1; i != 6; i += 2) {
      console.log(i);
    }
    ```

15. Write a loop that runs exactly 10 times and explain how you know it executes exactly 10 iterations.