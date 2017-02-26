// convertisseur binaire RGB de Lucas Vasseur
var b = Math.pow(2,7);
var char = "";
for ( var e = 0; e != 3; e++ )
    {
    var a = parseInt(prompt("Entrez un entier naturel inferieur ou égal a 255"));
    for ( var i = 0; i != 8; i++ )
        {
            if( a >= b )
            {
                char = char + "1";
                a = a - b;
            }
            else
            {
                char = char + "0";
            }
        b = b/2;
        }
    var b = Math.pow(2,7);
    char = char + " ";
    }
document.write("Voici vos 3 composantes RGB en binaire: ", char);