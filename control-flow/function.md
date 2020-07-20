---
description: JavaScript function is a block of code designed to perform a particular task.
---

# Function

We have actually used a **function** many times without us knowing, that is [`alert()`](../how-to-write-javascript-in-html.md#how-to-write-a-message-in-javascript),which displays an alert box with a specified message on it.

A **function** is written with the **`function`**keyword, followed by a name of the function, and a  parentheses \(\).

This is how we create a **function**. 

```javascript
function name_of_function (parameters){
    //code to be executed
}
```

{% hint style="info" %}
**`parameters`** can be empty **`()`** if there is no argument to be passed in.
{% endhint %}

For instance, i would like to create a **function** named greet, that will pop up a hi message with the user's name when he or she login. This is how i do it:

```javascript
function greet (name){
    alert("Hi, " + name);
}
```

