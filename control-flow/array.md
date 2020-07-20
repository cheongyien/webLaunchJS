# Array

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

{% hint style="info" %}
**`colours[count]`** refers to the item in array **`colours`**, with the index number equivalent to count. If **`count = 0`**, **`colours[count]`** --&gt; **`colours[0]`** --&gt; **`'red'`**
{% endhint %}

