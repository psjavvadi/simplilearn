function area(length=0,breath=0)
{
    return length*breath;
}

let perimeter =()=>30;
function calculate(a,b=20,c=b*area(), d = c+perimeter()){
    return a+b+c+d;
}

console.log("calculate(20): " + calculate(20));
console.log("calcualte(40,50,70,60): " + calculate(40,50,70,60));
console.log("calcualte(40,50): " + calculate(40,50));

