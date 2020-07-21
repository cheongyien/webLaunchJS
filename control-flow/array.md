# :unlock:  Array

Earlier, we have learnt how to create an [array](../basics-of-javascript/array.md). Over here, we will learn how to print the items in an array using a [for loop](loops/for-loop.md).

Using the same example in array:

```javascript
const colours = ['red','orange','yellow','green','blue','indigo','purple'];
```

Now, let's try printing the item in the **array** using a `for` loop as shown below:

```javascript
for (let count = 0; count < colours.length; count ++){
    console.log(colours[count]);
}
```

> :information_source:  **`colours[count]`** refers to the item in array **`colours`**, with the index number equivalent to count. If **`count = 0`**, **`colours[count]`** --&gt; **`colours[0]`** --&gt; **`'red'`**


<br><br><br>
<hr>

[:arrow_backward: Previous Page : Control Flow : Object :triangular_flag_on_post: :unlock: ](../object.md)  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[:house_with_garden:](../../README.md)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    [:arrow_forward: Next Page : Control Flow : Function :triangular_flag_on_post: :unlock: ](function.md)