# Switch and Case

Let's try making the application to print out the choice that you have input using a switch case.

{% hint style="info" %}
First, create a variable **`choice`**. 

Then in the parenthesis of **`switch`**, key in the name of the input that will be tested, in this case choice.

After the word **`case`**, key in the possible choice, as such 'A', 'B', or 'C'.

**`default`** means other than the input that you have stated in the case.
{% endhint %}

```javascript
let choice;

switch (choice){
    case 'A':
        console.log('I chose A');
        break;
    case 'B':
        console.log('I chose B');
        break;
    case 'C':
        console.log('I chose C');
        break;
    default:
        console.log('Please make a choice');
    
}
```

In fact, this can actually be done using if and else statement! This is how to do it:

```javascript
if (choice === 'A'){
    console.log('I chose A');
}
else if (choice === 'B'){
    console.log('I chose B');
}
else (choice === 'C'){
    console.log('I chose C');
}
else{
    console.log('Please make a choice');
```

Now, let's try an exercise!

### Exercise

I have strawberries, mango, durian. I want the application to print out `"I Love Strawberries!"` if I choose A , and mango if i choose B, vice versa.

{% tabs %}
{% tab title="Your Answer" %}
```javascript

```
{% endtab %}

{% tab title="My Answer" %}
```javascript
let choice;

switch (choice){
    case 'A'
        console.log("I LOVE Strawberries!");
        break;
    case 'B'
        console.log("I LOVE Mango!");    
        break;
    case 'C'
        console.log("I LOVE Durian!");
        break;
    default:
        console.log("Please make a choice.");
}

```
{% endtab %}
{% endtabs %}

