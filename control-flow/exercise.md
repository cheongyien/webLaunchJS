# :dart:    Exercise

>   Let's practise how to use what you have learnt under control flow!


### <ins>Exercise 1 </ins>

Create a function named sum, that will return the total,that was calculated by adding from numbers that are divisible by either 3 or 5 in the range of value stated.

>   :information_source:    &nbsp;&nbsp;&nbsp;&nbsp;**For instance:** <br>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    `sum(5)`<br>    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    **Output:**<br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    `8`<br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    **Output = 3 + 5, that is anything divisible by 3 or 5 that is within the range of 5.**
<br><hr>

<details><summary> :crossed_flags: Click Me For Answer! :crossed_flags: </summary><br>

```javascript
function sum (num){
    let total = 0;
    for (let count = 0; count <= num; count++)
        if (count%3===0 ||count%5===0)
            total += count;
    
    return total;
}
```
</details>

### <ins>Exercise 2</ins>

Print the pattern of asterisks\(\*\) as shown below:

\*<br>
\*\*<br>
\*\*\*<br>
\*\*\*\*<br>
\*\*\*\*\*

>   :information_source: The number of asterisks \(\*\) is proportional to its row number.
<br><hr>

<details><summary> :crossed_flags: Click Me For Answer! :crossed_flags: </summary><br>

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
</details>


>   :white_check_mark:  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Yeah 🎉🎉🎉You have now mastered the basics and control flow of JavaScript🎉🎉🎉!
<br><hr>

<br><br><br>
<hr>

[:arrow_backward: Previous Page : Control Flow : Function :triangular_flag_on_post: :unlock: ](function.md)  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[:house_with_garden:](../../README.md)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    [:arrow_forward: Next Page : Pupu's part ](exercise.md)

