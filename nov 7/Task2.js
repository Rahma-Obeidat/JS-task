function largestNumber(a,b)
{
    document.writeln("The two number are "+a+" and "+b+",");
if(a>b){
    document.writeln(" and The Largest Number is "+ a);
    return a;
}

else 
{
    document.writeln("The Largest Number "+ b);
    return b;
}

}

largestNumber(10,60);
