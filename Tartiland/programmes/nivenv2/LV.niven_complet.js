//Nombre de Niven
//proposé par Nicole MONTENEGRO
//a compléter et à rendre via courrier électronique uniquement à prof.nicole.montenegro@gmail.com pour le vendredi 15 janvier 00h00 au plus tard
//penser à les renommer à vos initiales

//En mathématiques récréatives, un nombre de Niven, ou nombre multinumérique est un entier naturel qui est divisible par la somme de ses chiffres dans une base donnée.

//Cette fonction renvoie un booléen (rep) permettant de savoir si N est un nombre de Niven
//N est traité comme une chaine de caractères
function Niven(N){
    var taille = N.length; //permet de connaitre le nombre de chiffres composant N
    
    var som = 0; //som contient la somme des chiffres composant le nombre N
    for(var i=0;i<taille;i++){
        som += parseInt(N[i]);
    }

    var rep = false ;
    if (N % som == 0){//ligne a compléter
        rep = true ;
    }
    return rep;
}


function test(){
    var n = prompt("Donner un nombre entier : ");
    if (Niven(n)){
        document.write("Ce nombre "+n+" est un nombre de Niven");//ligne à compléter
        }
    else{
        document.write("Ce nombre "+n+" n'est pas un nombre de Niven");//ligne à compléter
        }
}


function niven1_100(){
    
    var dis = "Pour information, parmi les entiers compris entre 1 et 100, ";
    for(var i=10; i<101; i++){ 
        if (Niven(i+"")){ //L'expression i+"" permet d'associer à l'entier i le type chaine de caractère
            dis = dis+i+" ";
            }
        }
    dis = dis+" sont des nombres de Niven.";
    document.getElementById("resultat").innerHTML = dis;
}

//cette fonction à compléter permet d'afficher les cent premiers nombres de Niven  
function centNiven(){
    
    var k = 0;
    var l = 1;
    var disp = "Les cents premiers nombres de Niven sont: ";
    while (k < 100){
        if (Niven(l+"") == true){
            disp = disp+l+" ";
            l = l+1;
            k = k+1;
        }
        else{
            l = l+1;
        }   
    }
    document.getElementById("resultat").innerHTML = disp;
}

function niven(){
    var N = document.getElementById("num").value;
    var rep = "Ce nombre n'est pas un nombre de Niven.";
    if (Niven(N)){
        rep = "Ce nombre est un nombre de Niven.";
    }
    document.getElementById("resultat").innerHTML = rep;
}