---
description: 'Loops are use to repeat the action stated in the curly braces { }.'
---

# Loops

There are mainly two types of loop that we will be learning:

* [While loop](for-loop-1.md)

Have the following syntax

```javascript
while (condition) {
  // code block to be executed
}
```

Here's an example:

```javascript
while(let counter = 0){
    console.log('Hi');
    counter ++;
}
```

* [For loop](for-loop.md)

Have the following syntax

```javascript
for (statement 1; statement 2; statement 3) {
  // code block to be executed
}
```

**Statement 1** is executed \(one time\) before the execution of the code block.

**Statement 2** defines the condition for executing the code block.

**Statement 3** is executed \(every time\) after the code block has been executed.

So here's an example: 

```javascript
for ( let counter = 0; counter <=5; counter ++ ){
    console.log('HI');
}
```

