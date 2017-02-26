// convertisseur binaire de Lucas Vasseur

var     a = parseInt(prompt("Entrez un entier naturel inferieur ou égal a 1 billiard"));
var     b = Math.pow(2,39);
var     char = "";
var     i = 0;

while(i != 40)
{
    if( a >= b )
    {
        char = char + "1";
        a = a - b;
    }
    else
       char = char + "0";
    b = b/2;
    i++;
}
document.write("Voici votre nombre en binaire: ", char);