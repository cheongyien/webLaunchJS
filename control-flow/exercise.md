---
description: Let's practise how to use what you have learnt under control flow!
---

# Exercise

### Exercise 1 

Create a function named sum, that will return the total,that was calculated by adding from numbers that are divisible by either 3 or 5 in the range of value stated.

{% hint style="info" %}
**For instance:**

`sum(5)`

**Output:**

`8`

**Output = 3 + 5, that is anything divisible by 3 or 5 that is within the range of 5.**
{% endhint %}

{% tabs %}
{% tab title="Your Answer" %}
```javascript

```
{% endtab %}

{% tab title="My Answer" %}
```javascript
function sum (num){
    let total = 0;
    for (let count = 0; count <= num; count++)
        if (count%3===0 ||count%5===0)
            total += count;
    
    return total;
}
```
{% endtab %}
{% endtabs %}

### Exercise 2

Print the pattern of asterisks\(\*\) as shown below:

\*

\*\*

\*\*\*

\*\*\*\*

\*\*\*\*\*

{% hint style="info" %}
The number of asterisks \(\*\) is proportional to its row number.
{% endhint %}

{% tabs %}
{% tab title="Your Answer" %}
```javascript

```
{% endtab %}

{% tab title="My Answer" %}
```javascript
function showStars(num){
    for (let row = 1; row<= num; row++){
        let star = '';
            for(let col = 1; col<= row; col++)
                star +='*';
                console.log(star);
    }
}
```
{% endtab %}
{% endtabs %}

{% hint style="success" %}
Yeah 🎉🎉🎉You have now mastered basics and control flow of JavaScript🎉🎉🎉!
{% endhint %}

