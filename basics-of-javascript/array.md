---
description: We use array to store list of items.
---

# Array

Let's try making a list of colour using **array**.

First of all we need to declare a variable name `colours` and assign it with a square bracket `[ ]`.

```javascript
let colours = [];
```

So the square brackets `[ ]` are called the **array** literals and they indicate an empty **array**.

Now, let's fill in the arrays with some colours and use `console.log()` to show your colours in the console.

```javascript
let colours = ['red','orange','yellow','green','violet'];
console.log(colours);
```

{% tabs %}
{% tab title="This is the output in the console" %}
![](../.gitbook/assets/image%20%285%29.png)
{% endtab %}

{% tab title="You will see this by expanding the array" %}
![](../.gitbook/assets/image%20%2813%29.png)
{% endtab %}
{% endtabs %}

You will see an **array** of the 5 elements and each have them have an index number that determines the position of each colour in the array.

If i were to display the last element in the array, i use the index number to call them. This is how:

```javascript
console.log(colours[4]);
```

 and I will see **`violet`** in the console.

Let's try adding colour `'blue'` into the **array**.

{% hint style="info" %}
Since the index number for the last item is 4, adding a new colour into the list will take up index 5. Therefore, we assign index number 5 with **`'blue'`**.
{% endhint %}

#### Copy the code below and check if you get the same output as shown in the console tab.

{% tabs %}
{% tab title="Adding and element" %}
```javascript
colours[5]='blue';
```
{% endtab %}

{% tab title="Console" %}
And you should see this in your console.

![](../.gitbook/assets/image%20%287%29.png)
{% endtab %}
{% endtabs %}

In JavaScript we can store different types of data in an **array**. You can try adding a number at the end of the list. This is how you can do it, and the output is shown in the console tab.

{% tabs %}
{% tab title="JavaScript" %}
```javascript
colours[6]=123;
console.log(colours);
```
{% endtab %}

{% tab title="Console" %}
![](../.gitbook/assets/image%20%2811%29.png)
{% endtab %}
{% endtabs %}



