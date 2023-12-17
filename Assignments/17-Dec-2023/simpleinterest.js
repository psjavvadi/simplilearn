function simpleIntereset1(p=0,r=0,t=0)
{
    return  p*(1+r*t);
}
let simpleIntereset2 = (p=0,r=0,t=0)=>{
    return p*(1+r*t);
}

let simpleIntereset3 = function(p=0,r=0,t=0){
    return p*(1+r*t);
}

console.log("simpleIntereset1: " + simpleIntereset1(200000,5.4,4));
console.log("simpleIntereset2: " + simpleIntereset1(200000,5.4,4));
console.log("simpleIntereset3: " + simpleIntereset1(200000,5.4,4));