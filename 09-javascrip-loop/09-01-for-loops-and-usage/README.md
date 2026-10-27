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
- Printing numbers from 1 to 10.
- Going through items in an array.
- Checking multiple test data values.
- Repeating a task a specific number of times.
- Running similar checks in QA automation.

## 3. Basic Syntax

```javascript
for (initialization; condition; update) {
  // Code to repeat
}
```

The three parts inside the parentheses are separated by semicolons (`;`).

### Understanding `i`, `c`, and `u`

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

## 6. Understanding `i++`

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
```

## 7. Common Mistakes

### Mistake 1: Using `<` Instead of `<=`

```javascript
for (let i = 1; i < 5; i++) {
  console.log(i);
}
```

Output: `1, 2, 3, 4`

The number `5` is not printed because the condition is `i < 5`.

To include `5`, use `i <= 5`.

### Mistake 2: Forgetting to Update the Counter

```javascript
// Be careful: this loop never ends because i does not change.
for (let i = 1; i <= 5; ) {
  console.log(i);
}
```

If the condition never becomes false, the loop may run indefinitely.

### Mistake 3: Using the Wrong Array Index

```javascript
const fruits = ["apple", "banana", "mango"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
```

Start at `0` to access the first array item.

## 8. Quick Summary

- **Initialization:** Where the loop starts.
- **Condition:** Determines whether the loop continues.
- **Update:** Changes the counter after each iteration.
- **Loop body:** The code that runs each time.

Remember the basic pattern:

```javascript
for (let i = 0; i < 5; i++) {
  // Code to repeat
}
```

## 9. Practice Exercises

Try solving these without looking at the examples:

1. Print numbers from 1 to 10.
2. Print even numbers from 2 to 10.
3. Print every item in this array:

   ```javascript
   const cities = ["Colombo", "Kandy", "Galle"];
   ```

4. Predict the output:

   ```javascript
   for (let i = 0; i < 4; i++) {
     console.log(i);
   }
   ```