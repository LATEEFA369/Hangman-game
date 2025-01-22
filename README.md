Writing a Function in JavaScript

In JavaScript, functions are blocks of reusable code. They allow you to bundle functionality, make it more readable, and avoid repetition. Here's a brief tutorial on writing an arrow function in JavaScript.

1. Basic syntax

const functionName = (params) => {
  // code to be executed
}

const: const should be used whenever a function expression is assigned to a variable.
The function name: The name you choose for the function.
Parameters: Optional comma separated parameters. This is the data passed into the function. If there are no parameters, the () is still required.
The arrow syntax: Indicates that this will be a function.
The body: The statements that make up the function itself. Surrounded by curly braces.

Example:

const greet = (name) => {
  console.log("Hello, " + name + "!");
}

Tip: Functions often perform actions, so naming with a verb can make it clear what the function does. Examples include fetchData( ), calculateArea( ), or printReport( ). 

2. Calling a function

To execute the function, you call or invoke it by using its name followed by parentheses.

Example:

greet('Alice'); // Outputs: Hello, Alice!

3. Return values

Functions can process data input and output a value using the return keyword.

Example: 

const addNums = (numA, numB) => {
  return numA + numB
}

const total = addNums(2, 4);

console.log(total) // Expected value: 6

For more information on functions and how they are used in JS, check out the MDN docs. 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions

# h1
## h2
### h3
#### h4
##### h5
###### h6


This text is **bold**. This text is also __bold__.
This text is in *italics*. This text is also in _italics_.
This text is ***bold and italicized***. This text is also ___bold and italicized___.



 
you Do: Format some text
Find the "Basic syntax" section in your README.md file. Look for these five lines describing the syntax of arrow functions:

const: ...
The function name: ...
Parameters: ...
The arrow syntax: ...
The body: ...
Make all the words before the colons (:) on each line bold.

In the "Calling a function" section, make the words "call" and "invoke" italicized. This signals that these are new vocabulary words that require emphasis.

Do the same for the word "return", when it's introduced in the "Return values" section.

Above each code snippets you'll find the word "Example:" Format these as bold, italic, or both. You choose.

**const**: ...
**The function name**: ...
**Parameters**: ...
**The arrow syntax**: ...
**The body**: ...

In this section, we will *call* and *invoke* functions.

In this section, we will discuss how to use the **return** keyword to return values from a function.
***Example:***


3. Creating lists

* Item 1
* Item 2
  * Subitem 2.1
  * Subitem 2.2
    * Subitem 2.2.1
1. First item
2. Second item
   1. Subitem 2.1
   2. Subitem 2.2

you Do: Make a list
In the "Basic syntax" section, find the five components of syntax again (we made them bold earlier). Format them as an ordered or unordered list.


   1. **const**: ...
2. **The function name**: ...
3. **Parameters**: ...
4. **The arrow syntax**: ...
5. **The body**: ...


* **const**: ...
* **The function name**: ...
* **Parameters**: ...
* **The arrow syntax**: ...
* **The body**: ...

4. Code snippets

Use the `console.log()` function to print values to the console.
```javascript
const printItem = (item) => {
  console.log(item);
}
```
const printItem = (item) => {
  console.log(item);
}
5. Adding link

you Do: Cite the docs
Locate the link to the MDN page at the bottom of the README.md, and format it as an inline style link.

[MDN JavaScript Functions Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)



6. Blockquotes

> This is a blockquote.


 You Do: Create a blockquote
Locate the helpful "Tip:" at the end of the "Basic syntax" section in your README.md. Format this text as a blockquote.

> **Tip:** Functions often perform actions, so naming with a verb can make it clear what the function does. Examples include fetchData( ), calculateArea( ), or printReport( ).

7. Adding images
![some alt text](www.url_to_an_image.com/image)
![Computer with Code](https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&q=80&w=1631&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)


![Computer with Code](./assets/james-harrison-unsplash.jpg)