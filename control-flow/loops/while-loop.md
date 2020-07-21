# While Loop

**While loop** comes into handy if i were to repeat the same task several times.

For instance, i want to print **`"I Love WebLaunch!"`** for 100 times in the console, it's troublesome for me to type **`console.log("I Love WebLaunch!");`**for 100 times. Hence, i can use **while loop**, to iterate the command for 100 times. Here's how to do it:

```javascript
let count = 1;
while(count <=100){
    console.log("I Love WebLaunch!");
    count ++;
}
```

{% hint style="info" %}
First, initialise the **`count`** to 1.

Set the condition to**`count <=100`**so that the loop will goes on as long as the count is less than or equals to 100.

Lastly, in the while loop, remember to state if the count will be of increment value **`count ++`** or decrement value **`count --`**
{% endhint %}

