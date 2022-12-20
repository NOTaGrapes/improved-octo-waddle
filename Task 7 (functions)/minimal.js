function min (a,b)
{
    return (+a < +b) ? a : b;
}
let a = prompt("Enter A");
let b = prompt("Enter B");
alert (`minimal value is equal to ${min(a,b)}`)