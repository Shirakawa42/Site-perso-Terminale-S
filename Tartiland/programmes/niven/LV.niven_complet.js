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
    
    document.write("<br/>Pour information, parmi les entiers compris entre 1 et 100, ");
    for(var i=10; i<101; i++){ //Un nombre de Niven étant un nombre multinumerique, i commence a 10.
        if (Niven(i+"")){ //L'expression i+"" permet d'associer à l'entier i le type chaine de caractère
            document.write(i+" ");
            }
        }
    document.write(" sont des nombres de Niven.");
}

//cette fonction à compléter permet d'afficher les cent premiers nombres de Niven  
function centNiven(){
    
    document.write("<br/>Les cent premiers nombres de Niven sont : ");
    var k = 0;
    var l = 1;
    while (k < 100){
        if (Niven(l+"") == true){
            document.write(l, " ");
            l = l+1;
            k = k+1;
        }
        else{
            l = l+1;
        }   
    }
}




            /***** MAIN *****/

test();
document.write("<br /><br />")
niven1_100();
document.write("<br /><br />")
centNiven();