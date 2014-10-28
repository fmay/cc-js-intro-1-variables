---
title: "VARIABLES & CONSTANTS"
files: []
editable: true
layout: 2-panels-tree

---
#'Forking' this module
If you check the url address bar of your browser, if it starts with `https://codio.com/anon/....` then this means it is an anonymous project and any changes you make will be lost when you close down the browser tab. This will be the case if you access the module from the Codio Courses screen.

To avoid losing changes, you can 'fork' the module into your own Codio account where it will appear in your projects list. To do this, select the **'Project->Fork'** menu item and choose a suitable name for the project.

#A few words about the Codio Guide
Before we start with this module here are a few pointers about using this Codio Guide.

If you've already read this in another Guide then skip to the next section.

![](.guides/img/guides-helper.jpg)

#The File Tree
The left most panel is the File Tree **(1)**. This is where your project's files are stored. You can open up files you see listed there by clicking on them.

#About the Codio Guide
The Codio Guide **(2)** is the content you are reading right now. It's worth knowing the following

- if you ever close the Guide tab by mistake, simply open in from the View menu **(3)**.
- you can expand and collapse the Guide's Table of Contents **(4)** with the Hamburger icon **(5)**
- you move from one section of the Guide to the next using either the Table of Contents or the Navigation Buttons (6)

#The Rocket Menu
The Rocket menu **(7)** is a dropdown menu that lets you load code into your file tree when you click it as different sections might want to show different bits of code.

You are usually encouraged to mess around with the live code. It is perfectly likely that you can wreck the code so pressing the Rocket menu button will restore the code again to its original state.

#Previewing
The Preview button **(8)** lets you run your web application. When you press it, it will open up a preview window so you can play with your app.

#Code Tabs
When you open some code from the file tree or the Codio Guide opens a file for you automatically, they will appear within a tab **(9)** in one of the panels. You can have several of these open at one time so you may need to click on the respective tab to get to see the file you want.


---
title: Introduction
files: []
editable: false
layout: ""

---
Introducing variables and constants is usually the first thing you learn in any programming language.

It may feel a bit dry but we'll build up to some fun stuff, so persevere.
---
title: The Semi Colon
files:
  - path: example.js
    panel: 0
    ref: ""
    lineCount: 0
editable: true
layout: ""

---
One thing you will notice in `example.js`, which should be in the left hand panel, is that javascript statements end the line with a `;` character. We will go into this in more detail another time, but for now follow these guidelines

- use a semi-colon at the end of a line unless that line ends in a `{` character (a so called 'block' delimiter).

---
title: Variables in action
files:
  - path: example.js
    action: open
    panel: 0
    ref: " // Create a canvas x=50 and y=10, 400 side and 300 high"
    lineCount: 13
editable: true
layout: ""

---
Press 'Preview' (right most menu at the top) or **[Click here](open_preview index.html)** and you'll see a yellow circle drawn on a red background and hear a sound being played. This is all done using Javascript and we're going to see some variables in use here.

Variables are one of the fundamental things in any programming language. so let's figure out what they do and why.

Look at the `example.js` and let's see some variables in use.

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
Let's just look at the first 3 lines. We start off by defining 3 variables (width, height and circleColor) using `var` and then assign initial values to each of them (400, 300 and the [color value](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#Values) #fff000).

You could have used more or less any name under the sun rather than width or height but it obviously makes sense to choose a name that relates to what it is being used for.

##Choosing names for variables
Your variable names ...

- may *not* have spaces in the name (`box width` would be invalid).
- may not have any special characters like !, @, £, $, %, ^, &, *, (, ) etc. 
- Basically you should restrict names to upper or lower case characters and numbers.
- they may not *start* with a number but *may* contain numbers (`1color` is not valid, but `color1` is valid).
- they may contain the '_' character (`color_1`, for example).

##Naming conventions
There are a couple of variable naming conventions you can use. You should choose one and then stick to it so you have consistency.

`circleColor` is my personal favorite, where the first word is lower case and the other words (if there are any) have their first character upper cased.
`circle_color` is also fairly popular



---
title: A bit more ...
files:
  - path: "#all"
    action: close
    ref: ""
  - path: example.js
    action: open
    panel: 0
    ref: "var paper = Raphael(100, 50, width, height);"
    lineCount: 1
editable: true
layout: ""

---
##Using variables
Now look at the above code example again and look at where the variables `width` and `height` are actually used.

You can see that they have been used 

- to create the width and height of the drawing area canvas.
- to create the rectangle we draw into the canvas.

You can see that we have used our variable definitions here
```
var paper = Raphael(100, 50, width, height);
```

We could just have easily have written this as

```
var paper = Raphael(100, 50, 400, 300);
```

However, you can see that the following thing we do also used the width and height

```
var rect = paper.rect(0, 0, width, height);
```

Now, imagine you wanted to change the width and the height. Rather than having to change both lines, or potentially lots of lines where width and height might be used, we can simply alter the variable and wherever that variable is used, those values will be applied.

##Always declare variables with `var`
It is very important that you declare your variables with `var`. You will discover that things still work if you use a variable without first declaring it, but this will create a *global* variable rather than a *local* variable. 

We'll go into this in more detail in anotehr module, but a global variable can be used in any functions and keeps its value whereas a local variable only exists within the function you are in and will lose its data when the function temrinates.

##Change some variable values
Feel free to modify some of the variable values and see what effect it has. Once you have changed them, switch back to the Preview tab on the left, or press the Preview button again.

If you mess things up, press the 'Variables' button again from the ![](.guides/img/rocket.png) Rocket menu and it will restore your code.
---
title: Comments
files:
  - path: example.js
    action: open
    ref: "// Create a canvas x=50 and y=10, 400 side and 300 high"
    lineCount: 0
editable: true
layout: ""

---
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
---
title: Indenting your code
files:
  - path: example.js
    action: open
    panel: 0
    ref: var width=400;
    lineCount: 3
editable: true
layout: ""

---
Something else that you should religiously do, even though it is not enforced in any way, is to *indent* your code. Good indentation makes your code far more readable.

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
---
title: Variable Arithmetic
files:
  - path: "#all"
    action: close
    ref: ""
editable: false
layout: ""

---
Variable arithmetic is easy to understand. Here are some simple examples. Note the slightly different ways we are defining and initializing the variables.

##Addition
```
var x;
var y=20;
var z=30;
x = y+z;
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
---
title: Expressions with parentheses
files: []
editable: false
layout: ""

---
Parentheses are used in Javascript expressions in exactly the same way as they are in algebra.

The following two expressions obviously give differents results

```
  var x=100;
  var y=50;
  var someNumber = (x+y)*10; // 1500
  someNumber = x+y*10;       // 600
```

---
title: String variables
files: []
editable: false
layout: ""

---
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

---
title: Boolean Variables
files: []
editable: false
layout: ""

---
'Boolean' may be a word you've heard before but it is important and very easy to understand. A boolean variable can have only two values - *true* or *false*.

```
var isCold;
isCold = true;
isCold = false;
```

It's as simple as that. Programs are full of cases where you need to check whether something is true or false. We'll explore this in more detail in the next module.
---
title: Constants
files: []
editable: false
layout: ""

---
Constants are similar to variables but they have a specific purpose and are more restrictive.

```
var radius=100;
const pi=3.141;
var area = pi*radius*radius;
```

Above we have both a variable and a constant. The variable `x` can be modified by code statements after it has been defined.

A constant cannot ever be modified once it has been defined. Pi is obviously a constant value and would never be modified.

You could have defined Pi as a variable instead and it would work in exactly the same way, but defining it as a constant adds semantic clarity.

---
title: Play Time
files:
  - path: "#cmd: bash .guides/restore.sh 02-varplay, example.js"
    action: open
    panel: 0
    ref: ""
editable: true
layout: ""

---
From the ![](.guides/img/rocket.png) Rocket menu at the top, select 'Play'. This will give you a very basic pair of files to experiment with.

Don't worry about `index.html`, just look at `example.js` and start playing with it. If you mess things up just select `Playing with Variables` again from the Rocket menu.

Go ahead a experiment with defining variables and performing some variable arithmetic.

Add your own variables and expressions. Don't be timid about hacking the example around as much as you like.

##Display stuff in the Preview window
To display text in the Preview window, you use the `document.write()` function. You put whatever it is you want to display inside the `()`.

You will see, however, that *literal* text should be enclosed in single or double quotes. Look at `example.js` to see it in use (make sure you have selected 'Play' from the Rocket menu).

Here you can see a mixture of literal text and a variable (`area`) combined.

```js
document.write("Area is " + area + "<br/>");
```


##Writing to the 'Document' is HTML
In our default examples, you will notice that the content you write to the *document* (the browser page) is nothing other than HTML. 

You can see how we can include any valid HTML we wish and it applies exactly as it would had it been written inside an HTML file such as `index.html`.

Remembering the earlier CSS modules, it should be clear that you could style your output in the same way using a CSS file. If you want to try this, you could add a `main.css` and then link to it by adding the following line to the <head> section of `index.html`.

```
  <link rel="stylesheet" type="text/css" href="./main.css">
```
