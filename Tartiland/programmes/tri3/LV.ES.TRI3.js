// tri3 en JS Lucas Vasseur
var x = parseInt(prompt("Donner un nombre"));
var y = parseInt(prompt("Donner un autre nombre"));
var z = parseInt(prompt("Donner un dernier nombre"));
if (x<y && y<z)
    {
    document.write("Les valeurs dans l'ordre croissant sont: ",x," ",y," ",z);
    }
if (x<z && z<y)
    {
    document.write("Les valeurs dans l'ordre croissant sont: ",x," ",z," ",y);
    }
if (y<x && x<z)
    {
    document.write("Les valeurs dans l'ordre croissant sont: ",y," ",x," ",z);
    }
if (y<z && z<x)
    {
    document.write("Les valeurs dans l'ordre croissant sont: ",y," ",z," ",x);
    }
if (z<x && x<y)
    {
    document.write("Les valeurs dans l'ordre croissant sont: ",z," ",x," ",y);
    }
if (z<y && y<x)
    {
    document.write("Les valeurs dans l'ordre croissant sont: ",z," ",y," ",x);
    }


