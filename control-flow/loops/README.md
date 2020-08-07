# :unlock:  Loops

>Loops are used to repeat the action stated in the curly braces { }.


There are mainly two types of loop that we will be learning:

<details><summary>While Loop</summary><br>

> **[While loop](while-loop.md)**

Have the following syntax

```javascript
while (condition) {
  // code block to be executed
  }
```

Here's an example:

```javascript
  let counter = 0
  while(counter < 5){
    console.log('Hi');
    counter ++;
  }
```
</details>

<details><summary>For Loop</summary><br>

> **[For loop](for-loop.md)**

Have the following syntax

```javascript
for (statement 1; statement 2; statement 3) {
// code block to be executed
}
```

> **Statement 1** is executed \(one time\) before the execution of the code block.

> **Statement 2** defines the condition for executing the code block.

> **Statement 3** is executed \(every time\) after the code block has been executed.

So here's an example: 

```javascript
for ( let counter = 0; counter <=5; counter ++ ){
    console.log('HI');
}
```
</details>

<br><br><br>
<hr>

[:arrow_backward: Previous Page : Conditional Statements : Switch and Case :key: ](../conditional-statements/switch-and-case.md)  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[:house_with_garden:](../../README.md)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    [:arrow_forward: Next Page : Loops : While Loop :key: ](while-loop.md)
