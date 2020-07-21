# :key: Switch and Case

Let's try making the application to print out the choice that you have input using a switch case.

> :information_source:  First, create a variable **`choice`**. 
<br><hr>

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

### <ins>Exercise</ins>

I have strawberries, mango, durian. I want the application to print out `"I Love Strawberries!"` if I choose A , and mango if i choose B, vice versa.

<details>
<summary>Want Answer? Press me!</summary>
<br>

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
</details>

<br><br><br>
<hr>

[:arrow_backward: Previous Page : Conditional Statements : If...Else :key: ](if-and-else-if....else.md)  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[:house_with_garden:](../../README.md)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    [:arrow_forward: Next Page : Control Flow : Loops :triangular_flag_on_post: :unlock:](../loops/README.md)
