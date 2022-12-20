function pow (x,n)
{
    return (+x) ** (+n);
}
let x = prompt("enter value");
let n = prompt("enter pow");
alert (`${x}^${n} = ${pow(x,n)}`)
