// Strings method in JS.

// let name = "mayyas";
// document.write(name.repeat(5));
// document.write("<br>");


// document.write(name.length);
// document.write("<br>");


// document.write(name.charAt(3));
// document.write("<br>");


// document.write(name.indexOf("y"));
// document.write("<br>");


// document.write(text.split("_"));
// document.write("<br>");


// document.write(name.indexOf("y" , 3));
// document.write("<br>");


// document.write(name.lastIndexOf("y" , 3));
// document.write("<br>");


// document.write(name.slice(2,5));
// document.write("<br>");


// var text = "I_AmNikon"
// document.write(text.split(""));
// document.write("<br>");


// document.write(text.split("_" , 2));
// document.write("<br>");

let thename = "ahmed khaled hasan sdsl";

document.write (thename.charAt(4));

document.write ("<br>");

let thelastname = "       Haitham Al Hazaymeh       ";

document.write (thelastname.length);

document.write ("<br>");

document.write(thelastname.trim());

document.write ("<br>");


document.write(thelastname.toUpperCase());

document.write ("<br>");


document.write(thelastname.toLowerCase()+"<br>");
//////////////////////////////////////
let streetname = "   abuObaidhStreet   " ; 
 console.log(streetname.charAt(3)); 
 console.log(streetname.length); 
 console.log(streetname.trim().length);
 console.log(streetname.indexOf("a",5));
///////////////////////////////////////////////////////////////
const color=["Blue " , " Green "," Black ", " Yellow "," Red"];
document.writeln(color+"<br>"); 
document.writeln(color.length+"<br>");
document.writeln(color.length-1+"<br>");

color[0]="Pink";
color[3]="Blue";
color[5]=" pink";
color.push(" brown");

document.writeln(color+"<br>");

color[1]=color[2];
document.writeln(color+"<br>");
let colors=color[0];
document.writeln(colors+"<br>");

//////////////////////////////////////////////////
const cars = new Array("Saab", "Volvo", "BMW"); 
////////////////////////////////////////////// array are object
const person =["Rahma" , "Obeidat" , 23];
document.writeln(person[2]+"<br>");
document.writeln("**********************************"+"<br>");
document.writeln(person+"<br>");

////////////////////////////////////object
const person1={FirstName:"Rahma", LastName:"Obeidat", Age:25}
document.writeln(person1.FirstName+"<br>"); 
person1.LastName="Aktham";
document.writeln(person1.LastName+"<br>"); 


////////////////////////////////////
const array=[person];
document.writeln(array+"<br>");
//////////////////////////////////////////////

function myfunctio(p1,p2,p3){
    return p1*p2;
}
document.writeln(myfunctio(3));

