function addNbr(a){
    document.getElementById("saisie").innerHTML +=a;
}


function retour(){
    var docu = document.getElementById("saisie").value;
    var ret = docu.slice(0, -1);
    document.getElementById("saisie").value = ret;
}