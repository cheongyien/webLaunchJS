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

### <ins>Exercise 3</ins>

Create a button that will show this line of message on screen when it is clicked :

Hello, 
  Congratulations on finishing this part with me !
    Let's proceed to our last phase.

Regards,
  Yien
  
<details><summary> :crossed_flags: Click Me For Answer! :crossed_flags: </summary><br>

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="shortcut icon" href="favicon.png" />
    <title>WebLaunch 2020 : JavaScript</title>
  </head>

  <body>
      <h1>
        Welcome to Sunway Tech Club WebLaunch 2020 JavaScript Workshop
      </h1>
        
        This is the first line. <br />
        This is the second line. <br />
        
        <p id="change">Change me to something else please /.\</p>

        <script>
          function show(){
          document.write("Hello, \nCongratulations on finishing this part with me ! \nLet's proceed to our last phase.\n\nRegards, Yien");
        } 
        <script/>

      <button onclikc="show();">Don't Click Me</button>

  </body>
</html>
```
</details>

### <ins>Exercise 4</ins>

Create a button that will add a new text node when it is clicked.  
<details><summary> :crossed_flags: Click Me For Answer! :crossed_flags: </summary><br>

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="shortcut icon" href="favicon.png" />
    <title>WebLaunch 2020 : JavaScript</title>
  </head>

  <body>
      <h1>
        Welcome to Sunway Tech Club WebLaunch 2020 JavaScript Workshop
      </h1>
      <div id="content">
        <p>This is the first line.</p> <br />
        <p>This is the second line.</p> <br />
      </div>
      <p id="change">Change me to something else please /.\</p>

      <script>
        function add(){
            let new_text_node = document.createTextNode("I am new text node");
            document.querySelector("#content").appendChild(new_text_node);
      	}
      <script/>

      <button onclick="add();">Don't Click Me</button>

  </body>
</html>
```
</details>

<br><br>
>   :white_check_mark:  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Yeah 🎉🎉🎉You have now mastered the basics and control flow of JavaScript🎉🎉🎉!
<br><hr>

<br>
<a href="https://github.com/cheongyien/webLaunchJS/raw/master/hands_on/completed.zip" download="WebLaunch2020_JS_Completed"> :pushpin: Download completed files for hands on</a>

<br><br><br>
<hr>

[:arrow_backward: Previous Page : Control Flow : Function :triangular_flag_on_post: :unlock: ](function.md)  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[:house_with_garden:](../../README.md)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    [:arrow_forward: Next Page : ToDo hands on part ](https://github.com/cheongyien/webLaunchJS/raw/master/project/starter.zip)

