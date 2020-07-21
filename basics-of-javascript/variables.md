# Variables

Variable is used to store data temporarily in the computer's memory so that we can use them later. Before [ES6](https://www.w3schools.com/js/js_es6.asp), `var` is used to declare a variable and they found some issues using `var`. Hence, going forward from [ES6](https://www.w3schools.com/js/js_es6.asp), the best practice to store data is to declare `let`. Here's the examples:

```javascript
var surname = 'Cheong';
let name = 'Yien';
let birthDate = 10;

console.log(surname);
console.log(name);
console.log(birthDate);
```

In order to print the variables that you have keyed in to the console, you can use the `console.log()`, and fill up the name of the variable between the parentheses`()`. For example, `console.log(surname)` is used to print the **surname** in the console. 

> :information_source:  **You can press `Ctrl + Shift + i` to open the console in your browser.**


We can actually use the variable type, `string`, to store a string value.

```javascript
String name = 'Jeffrey';
```

This method is also called [static typing](../) and is not the best practise as the type of variable is set and cannot be changed in the future.

Thus, `let`or `var` is more widely use in declaring a variable as we can change the type of value stored in the variable. This is also called [dynamic typing.](../)

[:arrow_backward: Previous Page : How to write JavaScript in HTML :triangular_flag_on_post:](how-to-write-javascript-in-html.md)  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    [:arrow_forward: Next Page : Basics of JavaScript : Constant :unlock:](basics-of-javascript/constant.md)