let mark=100;
if( mark>=0 && mark <= 49  )
{
document.writeln("F");
}
else if(mark >= 50 && mark <=59){
document.writeln("D");

}
else if(mark >=60 && mark <=69){
    document.writeln("C");
}
else if(mark >= 70 && mark<=79){
    document.writeln("B")
}
else if(mark >= 80 && mark <= 89){

    document.writeln("A")
}
else if(mark >= 90 && mark <=100){
    document.writeln("A+")
}
else if(mark <0 && mark >100){
    document.writeln("OUT OF THE RANGE")
}
else {
    document.writeln("None");
}


