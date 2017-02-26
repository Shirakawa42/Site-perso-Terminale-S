// Programme écrit et éxécuter par Lucas Vasseur et Abdelkarim Kaddouri
var A = [ [7,5,9], [1,5,7], [2,4,8] ];
var B = [ [3,2,2], [8,6,3], [7,5,3] ];
var C = [[],[],[]];
for (var i = 0; i<3; i++)
    {
    for (var w = 0; w<3; w++)
        {
        C[i][w] = A[i][w] + B[i][w];
        }
    }
document.write("Lorsque l'on additionne chaque termes des tableaux suivants: <br /><br />");
document.write("A = <br />")
for (var i = 0; i<3; i++)
    {
    for (var w = 0; w<3; w++)
        {
        document.write(A[i][w]," ");
        }
    document.write("<br />");
    }
document.write("<br />B = <br />");
for (var i = 0; i<3; i++)
    {
    for (var w = 0; w<3; w++)
        {
        document.write(B[i][w]," ");
        }
    document.write("<br />");
    }
document.write("<br />On obtient le tableau suivant: <br /><br />C = <br />")
for (var i = 0; i<3; i++)
    {
    for (var w = 0; w<3; w++)
        {
        document.write(C[i][w]," ");
        }
    document.write("<br />");
    }