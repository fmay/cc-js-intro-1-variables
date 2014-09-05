/**
* Created with cc-jsintro-1-intro.
* User: fmay
* Date: 2014-08-24
* Time: 09:41 PM
* Playing with variables
*/

function play() {
  
  var x=100;
  var y=50;
  var z;

  var myName="Freddy";
	var wifeName='Jessica';
	var gooeyString;
  
  // Note that '<br/>' is simply HTML for a new line
  z = x*50;
  document.write(z + "<br/>");
  
  // String arithmetic and display
	gooeyString=myName+' loves '+wifeName;  
  document.write(gooeyString + "<br/>");
  
  // String display showing how output is regular HTML
  document.write("<h1>" + gooeyString + "</h1><br/>");
  
  // Calculate the areas of a circle
  var radius=11;
  const pi=3.141;
  var area = pi*radius*radius;  
	document.write("Area is " + area + "<br/>");

  // Numeric arithmetic using parentheses
  var someNumber = (x+y)*10;
  document.write("First someNumber is : " + someNumber + "<br/>");
  someNumber = x+y*10;
  document.write("First someNumber is : " + someNumber + "<br/>");
 
  
 
  
}