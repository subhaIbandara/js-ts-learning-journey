// ============================================================================
// JavaScript for Loop Interview Bank — Basic → Medium → Advanced
// ============================================================================
//
// Rules of the game (for all tasks):
//
// Solve with a classic for loop (or while).
//
// No array methods: no map, filter, reduce, forEach, flat, includes, indexOf,
// slice, splice, sort, reverse, split, join, Set, Map.
//
// Arrays may be input data — that's fine. The solution must be a loop.
//
// Always state edge cases: empty input, null, 0, negative numbers, duplicates,
// Unicode strings.
//
// ============================================================================
// LEVEL 1: BASIC — LOOP FUNDAMENTALS
// ============================================================================

// --------------------------------------------------------------------------
// Exercise 1: Print Numbers
// --------------------------------------------------------------------------

// 1. Print numbers from 1 to 10
//
// Print each number on a separate line.

 for (let number = 1; number <= 10; number++) {

     console.log("Number", number)
 }

// 2. Print numbers from 10 to 1
//
// Count backwards.

 for(let number = 10; number >=1; number--){
     console.log("Number", number)
 }

// 3. Print even numbers from 2 to 20
//
// Print only even numbers.

 for(let number = 2; number <= 20; number++){

     if(number%2 === 0) {
         console.log("Even Number", number)
     }
 }

// ============================================================================
// LEVEL 2: EVEN, ODD AND DIVISIBILITY
// ============================================================================

// Exercise 2: Even and Odd Numbers

// 1. Print even numbers from 1 to 20.

for(let number = 1; number <= 20; number++ ){

    if(number % 2 === 0) {
        console.log(`Number is Even ${number}`)
    }
}

////2. Print odd numbers from 1 to 20.
//
for(let number = 1; number <= 20; number++){
    if(number % 2 === 1){
     console.log(`Number is Odd ${number}`)
    }
}

// 3. Print multiples of 3 from 1 to 30.

for(let number = 1; number <= 30; number++){

    console.log(`Number Multiplication of 3  ${number * 3}`)
}

// 4. Print multiples of 5 from 1 to 100.

for(let number = 1; number <= 100; number++){
    console.log(` Number multiples by 5 is ${number * 5}`)
}

// 5. Print numbers between 1 and 50 that are divisible by both 3 and 5.
//
for(let number =1; number <= 50; number++){
    if ( number % 3 === 0 && number % 5 === 0)
    console.log("number ", number , "divisible by both 3 and 5.")
}

// ============================================================================
// LEVEL 3: CALCULATING TOTALS
// ============================================================================

// Exercise 3: Calculate Totals

// 1. Calculate the sum of numbers from 1 to 10.

let total = 0;
for(let number = 1; number <= 10; number++){

    total += number;
}
console.log("sum of numbers from 1 to 10", total)

// Note : total += number; is a shortcut in JavaScript. It means add the current
// value of number to total and update total.
// It is exactly the same as: total = total + number;
//
// | Shortcut          | Meaning        | Example                  |
// | `total += number` | Addition       | `total = total + number` |
// | `total -= number` | Subtraction    | `total = total - number` |
// | `total *= number` | Multiplication | `total = total * number` |
// | `total /= number` | Division       | `total = total / number` |
// | `total %= number` | Remainder      | `total = total % number` |

// Important Note: Order of Execution and Operator Precedence

let totalOperatorPrecedence = 10;

for (let number = 1; number <= 3; number++) {
    totalOperatorPrecedence += number * 2;
}

console.log("Total is ",totalOperatorPrecedence);

// 1. Order of execution
// total += number * 2 is equivalent to:
// `total = total + (number * 2);``
// Multiplication (*) has higher operator precedence than addition (+).
//
// JavaScript follows operator precedence.
//
// | Operator      | Priority                      |
// | `()`          | First                         |
// | `*`, `/`, `%` | Before addition               |
// | `+`, `-`      | After multiplication/division |
// | `=`           | Assignment                    |

// 2. Calculate the sum of numbers from 1 to 100.

let sum1and100 = 0;
for(let number = 1; number <= 100; number++ ){

//    sum = sum + number;
    sum1and100 += number;
    console.log( "sum", sum1and100 ," ", "Number", number )
}
console.log( "sum of numbers from 1 to 100.", sum1and100)

// 3. Calculate the sum of even numbers from 1 to 50.

let sum1and50 = 0;

for(let number =1; number <= 50; number++){

    if(number % 2 === 0){
        sum1and50+= number;
        console.log( "sum", sum1and50 ," ", "Number", number )
    }
}
console.log("sum of even numbers from 1 to 50.", sum1and50)

// Optimization – Skip odd numbers

let totalSkipOddNumbers = 0;
for(let number = 2; number <=50; number+= 2){

    totalSkipOddNumbers+= number;
}
console.log("sum of even numbers from 1 to 50.- Optimization – Skip odd numbers", totalSkipOddNumbers)

// 4. Calculate the sum of odd numbers from 1 to 50.

let totalOdd = 0;
for(let number = 1; number <= 50; number+=2){
    totalOdd += number;
}
console.log("sum of odd numbers from 1 to 50.- Optimization – Skip Even numbers", totalOdd)

// 5. Calculate the sum of numbers between 20 and 50.

let total20and50 = 0;

for(let number = 20; number <=50; number++){

    total20and50+= number;
}
console.log("sum of numbers between 20 and 50.", total20and50)

// ============================================================================
// LEVEL 4: MATHEMATICAL THINKING AND OPTIMIZATION
// ============================================================================

// Mathematical formula
// We can calculate the sum without a loop.
// Formula:
// Sum = n * (n + 1) / 2
// For a range starting at 20, subtract the sum before 20 from the sum up to 50.

let sumMath = 0;
const end = 50;
const start = 19;
sumMath = end * (end + 1 ) / 2 - start * (start + 1)/2
console.log("subtract the sum before 20 from the sum up to 50", sumMath)

// 6. Calculate the sum of numbers divisible by both 3 and 5 between 1 and 100.

 let sum3and5 = 0;
 for (let number = 1; number <= 100; number++){

    if(number%3 ===0 && number%5 ===0 )
    sum3and5 += number;
 }
console.log ("sum of numbers divisible by both 3 and 5 between 1 and 100.", sum3and5)

// Use LCM (Least Common Multiple)
//
// A number divisible by both 3 and 5 must be divisible by 15.
//
// Therefore, instead of checking two conditions, we can check one.

let sum3and5LCM = 0;

for( let number = 15; number <= 100; number++) {

    if(number%3 ===0 && number%5 ===0 ){
         sum3and5LCM += number;
    }

}
console.log("sum of numbers divisible by both 3 and 5 between 1 and 100. with LCM", sum3and5LCM)

// Mathematical formula
//
// Sum = d * count(count+1)}{2}
// Where:
// - `d` = The common multiple (e.g. 5, 7, 12, 20).
// - `count` = How many multiples fit within the given range.
//
// Note: Remainder % > Use when you want to check the remainder or divisibility.

// ============================================================================
// LEVEL 5: MULTIPLICATION TABLES
// ============================================================================

// 7. Multiplication Tables
// 7.1. Print the multiplication table of 2.

let mulNumber = 2;
for (let number = 1; number <= 100; number++){

    console.log(`Multiplication by ${mulNumber} * ${number}`, mulNumber * number);
}

// Multiplication tables from 2 to 12

for (let number = 2; number <= 12; number++) {

    console.log("Multiplication Table of " + number);

    for (let i = 1; i <= 10; i++) {
        console.log(number + " x " + i + " = " + (number * i));
    }

    console.log("------------------");
}

// ============================================================================
// END OF JAVASCRIPT FOR LOOP INTERVIEW BANK
// ============================================================================