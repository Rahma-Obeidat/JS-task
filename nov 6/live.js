let text = "";

for (let i = 0; i < 5; i++) {
  text += "The number is " + i + "<br>";
//   text = text + "The number is " + i + "<br>";

}
document.writeln(text); 



//////////////////////////////////////////////

//var i = 5;
for (var i = 0; i <= 10; i++) {
    document.writeln(i);

}  
document.writeln("rahma");

//////////////////////////////////////////
document.write("<br>");

let b=5; 
for(let i =1; i<=6 ;i++){
if(b==5){
    document.writeln("yes");
   
}
else {
    document.writeln("NO");
}

    
}
document.writeln("OUT");

///////////////////////////////////////
document.write("<br>");
 let s=10;
for(let i =1; i<=6 ;i++){
if(s==5){
    document.writeln("yes");
}
else {
    document.writeln("NO");
}

    
}
document.writeln("OUT");
////////////////////////////////////////////////

document.write("<br>");

let text2 = "";
let c = 0;
while (c < 10) {
  text2 += "<br>The number is " + c;
  c++;  
}
document.writeln(text2);

//////////////////////////////////////////////////////////////////////////////////////

document.write("<br>");
let p=0;
let c1=3;  
while(c1<=6){
   p=p+1; 
  
   c1++; 
   
}
document.writeln(p);

/////////////////////////////////////////////////////////////////////////////////
document.write("<br>");
let text3 = ""
let c11 = 2; 

do {
  text3 += "<br>The number is " + c11;
  
  c11++; 
 
} 
while (c11 < 10);  
document.writeln(text3);






/////////////////////////////////////////


document.writeln("<br>");
let person = prompt("Please enter your name", "Your Name");
if (person != null) {
    document.writeln( "Hello " + person + "! How are you today?") ;
   
  }

  alert("rahma obeidat");
  document.writeln("<br>");


let N="12";
document.writeln(typeof N);
document.writeln("<br>");
document.writeln(Number (N));

////////////////////////////////////////
document.writeln("<br>");


var text33=new Date();
var months = text33.getMonth();

switch(months) {
  case "jan":
    document.writeln("the 1st month");
  
  case "feb":
    document.writeln("the 2cd  month");
   
  case "mar":
    document.writeln("the 3rd month");
 
  default:
    document.writeln("THIS IS april");
   
}
///////////////////////////
document.writeln("<br>")
let p1=" ";
for(let o =0;o <= 10 ;o++){

if(o %2 ==0){
    
    p1+="Even Number: " + o+"<br>";
  
}
else 
{
    p1+="Odd Number: " + o +"<br>";
}
}
document.writeln(p1);


let rows=5;
for(let z=1; z<=rows ;z++){

    for ( let x=0 ; x < rows-z ;x++)
        document.writeln("        ");
    
      for(let y=0; y< z*2-1 ; y++)
      document.writeln("*");
      document.writeln("<br>");
}

for(e =0 ; e< 4 ; e++){

       for( v = 0 ; v < 4 ; v++){
        document.writeln("*");
        }
        document.writeln("<br>");
}

for(k = 0 ;k < 10 ;k++){

    for(u = 0 ; u < 10 ; u++){

        document.writeln("*");
    }
    document.writeln("<br>");
}

function myfunctio(p1,p2){
    return p1*p2;
}
document.writeln(myfunctio(3,4));


///////////////////////////function expression 
const container =function(c1,c2){

   return c1+c2; 
}

document.writeln(container(5,10)); 
