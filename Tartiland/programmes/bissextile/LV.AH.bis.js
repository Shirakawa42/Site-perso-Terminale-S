// année bissextile, de Lucas Vasseur et Adem Hadra
var a = parseInt(prompt("Donnez une année !"));
var b = (a % 4 == 0) ^ ((a % 100 == 0) ^ (a % 400 == 0));
if (b == 1)
    {
    document.write("l'année ",a," est bissextile");
    }
else
    {
    document.write("l'année ",a," n'est pas bissextile");
    }