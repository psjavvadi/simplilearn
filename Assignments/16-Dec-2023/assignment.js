let day=2;
switch(day)
{
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednessday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("Wrong week day number");

}


let evensum = 0;
let oddsum = 0;
let i;
for(i=1;i<=50;i++)
{
    if(i%2 == 0)
        evensum += i;
    else
        oddsum +=i;
}
console.log("Sum of even numbers from 1-50: " + evensum);
console.log("Sum of dd numbers from 1-50: " + oddsum);
