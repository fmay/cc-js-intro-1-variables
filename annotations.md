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

@annotation:tour summary
#Summary
You now have grasped something basic but important. In the next module, we will move on to something much more interesting and practical that uses Javascript. 

We will use Javascript to interact and even modify our HTML content.














