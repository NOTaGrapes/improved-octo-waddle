
function checkAgeB(age) 
{
    if (age > 18)
    {
        return true;
    } 
    else 
    {
        return confirm('Родители разрешили?');
    }
}
function checkAgeC(n) //checkAgeC using ?
{
    return (+n > 18) ? true : confirm("Are you'r parents know about u'r business here?");
}

function checkAgeL(n) //checkAgeC using ||
{
    return (+n > 18) || confirm("Are you'r parents know about u'r business here?");
}

let age = prompt("Age sir?","18");
alert(checkAgeB(age));
alert(checkAgeC(age));
alert(checkAgeL(age));