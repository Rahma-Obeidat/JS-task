
const array=["rahma" , "reem", "hala" ,"ali"];
function shorterInArray(a){
// let x=array[array.length];
// if(array[length]>x)
// return x;
// else 
// return array[length];
for(let i=0 ; i<array.length ;i++){


if((array[0].length) < (array[1].length))

return array[0];

else if((array[1].length) < (array[2].length) )
return array[1];

else if((array[2].length) < (array[3].length) )
return array[2];

else 
return array[3];
}
}
document.writeln(shorterInArray(array));