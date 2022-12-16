let taskNum = 0;
let userInput ="";
taskNum = +prompt("Chose which task to do: 1 - JavaScript true naming, 2 - show number sight");
if (taskNum != 1 && taskNum != 2)
{
    alert("ERROR: Can't read user request");
}
else
{
    if(taskNum==1)
    {
       userInput = prompt("Please, type JavaScript official name:")
       if(userInput!="ECMAScript")
       {
            alert("U dont know? it ECMAscript!");
       }
       else
       {
            alert("Correct!");
       }
    }
    if(taskNum==2)
    {
        userInput = +prompt("Please, type any number (Example: -3.14)");
        if(userInput!=NaN)
        {
           if(userInput>0)
           {
                alert(`input ${userInput} is positive value`);
           }
           else if(userInput<0)
           {
                alert(`input ${userInput} is negative value`);
           }           
           else if(userInput==0)
           {
                alert(`input ${userInput} is equal to zero (=0)`);
           }
           else
           {
                alert("ERROR: Something goes wrong!");
           }
        }
        else
        {
             alert("ERROR: Invalid input!");
        }        
    }
}