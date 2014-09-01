@annotation:tour intro
#INTRODUCTION TO JAVASCRIPT

We are now going to introduce you to Javascript. The way we are going to introduce Javascript to you is in three phases.

1. We are going to introduce the basics of Javascript in a fairly dry way but we will keep it short.
1. With the basics we learnt in the first step, we are going to apply this to HTML web pages.
1. In the 'DEEPER JS' courses, we will take a moew formal approach to learning Javascript and will look at the Javascript language in more detail.

@annotation:tour semicolon
#The Semi Colon
One thing you will notice in `example.js` is that javascript statements end the line with a `;` character. We will go into this in more detail another time, but for now follow these guidelines

- use a semi-colon at the end of a line unless that line ends in a `{` character (a so called 'block' delimiter).

@annotation:tour varconst
#Variables & Constants
From the Rocket menu, select 'Variables' to load the code.

Run a Preview and you'll see a circle drawn on a red background as some sound being played. This is all done using Javascript and we're going to see some variables in use here.

Variables are one of the fundamental thing in any programming language. so let's figure out what they do and why.

Open up `example.js` and let's see some variables in use.

```
  // Create a canvas x=50 and y=10, 400 side and 300 high
  var width=400;
  var height=300;
  var circleColor="#fff000";  
  
  // Create a drawing area (canvas) at the screen coordinate (100,50)
  var paper = Raphael(100, 50, width, height);
  
  // Draw a rectangle that fills the entire rectangle
  var rect = paper.rect(0, 0, width, height);
  
  // Fill it with a color
  rect.attr("fill", "#f00");

```

##Creating variables
Let's just look at the first 3 lines. We start off by defining 3 variables (width, height and circleColor) using `var` and then assign initial values to each of them (400, 300 and the [color value]() #fff000).

You could have used more or less any name under the sun rather than width or height but it obviously makes sense to choose a name that relates to what it is being used for.

##Choosing names for variables
Your variable names ...

- may *not* have spaces in the name (`box width` would be invalid)
- may not have any special characters like !, @, £, $, %, ^, &, *, (, ) etc. Basically you should restrict names to upper or lower case characters
- they may not *start* with a number but *may* contain numbers (`1color` is not valid, but `color1` is valid)
- they may contain the '-' character (`color_1`, for example)

##Naming conventions
There are a couple of variable naming conventions you can use. You should choose one andthen stick to it so you have consistency.

`circleColor` is the author's personal favorite, where the first word is lower case and the other words (if there are any) has their first character upper case.circleColor
`circle_color` is also fairly popular


##Using variables
Now look at the above code example again and look at where the variables `width` and `height` are actually used.

You can see that they have been used 

- to create the width and height of the drawing area canvas and 
- to create the rectangle we draw into the canvas.

You can see that we have used our variable definitions here
```
var paper = Raphael(100, 50, width, height);
```

We could just have easily have written this assign

```
var paper = Raphael(100, 50, 400, 300);
```

However, you can see that the following thing we do also used the width and height

```
  var rect = paper.rect(0, 0, width, height);
```

Now, imagine you wanted to change the width and the height. Rather than having to change both lines, or potentially lots of lines where width and height might be used, we can simply alter the variable and wherever that variable is used, those values will be applied.

@annotation:tour comments
#Comments
It is very important and good practice to include comments in your code to explain to anyone who may look at it (or even to remind yourself if you need to look at your code in the future) what it is doing.

As you can see from the code in `example.js`, wherever you want to write a comment, you simply start the line with `//`. 

You can also add a comment after a statement like this 

```
  var someNumber = (x+y)*10; // Result is 1500
```

If you want to write many lines of comments, you can do it like this

```
/* Comments can start anywhere from this line onwards
including this line
or this one
and ending with this one
*/
```

@annotation:tour indenting
#Indenting your code
Something else that you should religiously do, even thought it is not enforced in any way, is to *indent* your code. Good indentation makes your code far more readable.

Here is an example of some badly formatted code

```
	var x;
x=1;
		x=x*100;
```

which should be formatted like this

```
	var x;
	x=1;
	x=x*100;
```

With most code editors, you would use the tab key to indent rather than spaces, although both are acceptable.  It's up to you but you would normally choose 2 (the author's preference) or 4 spaces per tab indent.

@annotation:tour arithmetic
#Variable Arithmetic
Variable arithmetic is easy to understand. Here are some simple examples. Note the slightly different ways we are defining and initializing the variables.

##Addition
```
var x;
x=100;
x = x+x;
```

##Subtraction
```
var x=100;
var y=50;
var z;

z = x-y;
```

##Multiplication
```
var x=10;
var y=2;
var z;

z = x*y;
```

##Division
```
var x=10;
var y=2;
var z;

z = x/y;
```

There are also other types of variable arithmetic we can do but this will do for now.

@annotation:tour parentheses
#Expressions with parentheses
Parentheses are used in Javascript expressions in exactly the same way as they are in algebra.

The following two expressions obviously give differents results

```
  var x=100;
  var y=50;
  var someNumber = (x+y)*10; // 1500
  someNumber = x+y*10;       // 600
```


@annotation:tour strings
#String variables
A *string* is a piece of text. Below is an example of two different ways you can create a string variable (using either the `'` or the `"` characters. You can use either as long as they match).

```
var myName="Freddy";
var wifeName='Jessica';
```

##String arithmetic
As with number arithmetic, you can perform string arithmetic.

```
var myName="Freddy";
var wifeName='Jessica';
var gooeyString;
gooeyString=myName+' loves '+wifeName;
```


@annotation:tour boolean
#Boolean Variables
'Boolean' may not sound familiar but it is important and very easy to understand. A boolean variable can have only two values - *true* or *false*.

```
var isCold;
isCold = true;
isCold = false;
```

It's as simple as that. Programs are full of cases where you need to check whether something is true or false. We'll explor this in more detail in the next module.

@annotation:tour constants
#Constants
Constants are similar to variables but they have a specific purposes and are more restrictive.

```
var radius=100;
const pi=3.141;
var area = pi*radius*radius;
```

Above we have both a variable and a constant. The variable `x` can be modified by code statements afetr it has been defined.

A constant cannot ever be modified once it has been defined. Pi is obviously a constant value and would never be modified.

You could have defined Pi as a variable instead and it would work in exactly the same way, but defining it as a constant adds semantic clarity.

@annotation:tour play
#Play Time
From the Rocket menu at the top, select 'Playing with Variables'. This will give you a very basic pair of files to experiment with.

Don't worry about `index.html`, just look at `example.js` and start playing with it. If you mess things up just select `Playing with Variables` again from the Rocket menu.

Go ahead a experiment with defining variables and performing some variable arithmetic.

Add your own variables and expressions. Don't be timid about hacking the example around as much as you like.

##Display stuff in the Preview window
To display things in the Preview window, you use the `document.write()` function. You put whatever it is you want to display inside the `()`. The initial code show this.

##Writing to the 'Document' is HTML
In our default examples, you will notice that the content you write to the *document* (the browser page) is nothing other than HTML. 

You can see how we can include any valid HTML we wish and it applies exactly as it would had it been written inside an HTML file such as `index.html`.

Remembering the earlier CSS modules, it should be clear that you could the style your output in the same way using a CSS file. If you want to try this, you could add a `main.css` and then link to it by adding the following line to the <head> section of `index.html`.

```
  <link rel="stylesheet" type="text/css" href="./main.css">
```


@annotation:tour conditions
#Conditional Statements
A conditional statement simply tests whether something is true or false and can then execute on more statements if it is true and a different set of statements if false.

Here is how we write this in Javascript

```
var isCold=true;

if(isCold===true) {
  document.write("Brrrr, it's cold<br/>";
}
```
However, you can actually leave out the `===true` part, in which case Javacript will assume this is a test for 'true', so

```
var isCold=true;

if(isCold) {
  document.write("Brrrr, it's cold<br/>";
}
```

##The '===' is really important
It is very important to use `===` when testing whether the left operator is equal to the right operator. If you used just `=` you would assign the right operator to the left one.

This is a very common cause of errors for beginners, so if you see unexpected behavior, then you check you have written this correctly.

@annotation:tour not
#The Not operator "!"
The not operator is the opposite of the === operator.

```
var isCold=false;

if(isCold!==true) {
  document.write("It's not cold<br/>";
}
```

We can write this in shorthand as follows 

```
var isCold=false;

if(!isCold) {
  document.write("It's not cold<br/>";
}
```


@annotation:tour conditionelse
#Else
The next thing you should now about is the `else` statement. This is best explained by looking at the following code

```
var isCold=true;

if(isCold) {
  document.write("Brrrr, it's cold<br/>";
}
else {
  document.write("It's not cold, but should I turn on the aircon?<br/>";
}
```

@annotation:tour conditionltgt
#Testing for less than and greater than
As well as testing simple boolean variables, another very common thing is to test for greater than or less than.

- "Less than" : if(x<100) 
- "Less than or equal to" : if(x<=100) 
- "Greater than " : if(x>100) 
- "Greater than or equal to" : if(x>=100) 

And here is a good example 

```
var temperature=12;

if(temperature<18) {
  document.write("Brrrr, it's cold<br/>";
}
if(temperature>=26) {
  document.write("It's getting pretty hot<br/>";
}
```

@annotation:tour logicalops
#Logical Operators
Sticking to our temperature theme, what happens if we want to deal with Cold, Pleasant and Hot situations?

Here's the english language approach

```
If it's less than 18 degrees, then it's cold
If it's 18 degrees or more **AND** (`&&`) less than 28 degrees then it's pleasant
Another way of saying this is if its less than 18 degrees **OR** (`||`) it's 28 degrees or more then it's not pleasant
If it's 28 degrees of more, then it's hot
```

This is written as 

```
var temperature=20;

if(temperature<18) {
  document.write("Brrrr, it's cold<br/>";
}
if(temperature>=18 && temperature<28) {
  document.write("It's really rather pleasant<br/>";
}
if(temperature<18 || temperature>=28) {
  document.write("It's really rather pleasant<br/>";
}
if(temperature>=28) {
  document.write("It's hot<br/>";
}
```

##ANDing (&&) more formally
When two things are ANDed together, then *both* must be true in order for the result to be true.

- `true && true` yields `true`
- `true && false` yields `false`
- `false && true` yields false
- `false && false` yields false


##ORing (||) more formally
When two things are ORed together, then *either* can be true in order for the result to be true.

- `true || true` yields `true`
- `true || false` yields `true`
- `false || true` yields true
- `false || false` yields false


@annotation:tour complexlogic
#Using parentheses in logical expressions
There are situations where it is very important or even esential to use parentheses in your logical expressions.

1. Use them to make your code readable. 
1. Many epressions will only evaluate correctly if you use parentheses.



@annotation:tour elseif
#Else If
We can also write if/else statements in the following way

```
var temperature=14;

if(temperature===0) {
  document.write("It's literally freezing<br/>";
}
else if(temperature>0 && temperature<=10) {
  document.write("It's very cold indeed<br/>";
}
else if(temperature>10 && temperature<=17) {
  document.write("It's 'parky' as they say in England<br/>";
}
else if(temperature>17 && temperature<=22 ) {
  document.write("It's pleasant<br/>";
}
else if(temperature>22 && temperature<=28) {
  document.write("It's just perfect!<br/>";	
}
else {
  document.write("It's too hot<br/>";	
}
```

There are some important things to note here

- it will run through each test until a condition is true. At this point it will execute the statement(s) within the `{ }` block. Once it has done that it will skip past all of the remaining tests, including the last `else`.
- in the code above, it result in "It's 'parky' as they say in England"
- the final `else` `{ }` block will execute if none of the above consitions were met. So, if we set `temperature` to be anything above 28, it will display "It's too hot".

















