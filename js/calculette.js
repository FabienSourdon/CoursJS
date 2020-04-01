var operateur = '';
var ch1 = '';
var ch2 = '';

function addNbr(a)
{
    
    if (operateur == '')
    {
        document.getElementById('saisie').innerHTML += a;
        ch1 = ch1 += a;
        console.log('ch1:', ch1, 'ch2:', ch2);
        
        
    } 
    else
    {
        document.getElementById('saisie').innerHTML += a;
        ch2 = ch2 += a ;
        console.log('ch1:', ch1, 'ch2:', ch2);
    }


}



function addOp(a)
{
    if (operateur == ''){
        document.getElementById('saisie').innerHTML += a;
        operateur = a;
        console.log(operateur);
    }
    else{
        document.getElementById('saisie').innerHTML = ch1 + a;
        operateur = a;
        console.log(operateur);
    }
}

function retour()
{
    var origine = document.getElementById('saisie').innerHTML;
    destina = origine.slice(0, -1);
    document.getElementById('saisie').innerHTML = destina;
}

function effacer()
{
    document.getElementById('saisie').innerHTML = '';
    ch1 = '';
    ch2 = '';
    operateur = '';
    console.log('ch1:', ch1, 'ch2:', ch2, 'opérateur :', operateur);
}

function annul()
{
    var origine = document.getElementById('saisie').innerHTML;
    destina = origine.slice(0, -ch2.length);
    document.getElementById('saisie').innerHTML = destina;
    ch2 = '';
    console.log('ch1:', ch1, 'ch2:', ch2, 'opérateur :', operateur);
}

function calc(){

    switch (operateur)
    {
        case '+':
            var calcul = parseFloat(ch1) + parseFloat(ch2);
            console.log(calcul);
            break;
        case '-':
            var calcul = parseFloat(ch1) - parseFloat(ch2);
            console.log(calcul);
            break;
        case '*':
            var calcul = parseFloat(ch1) * parseFloat(ch2);
            console.log(calcul);
            break;
        case '/':
            var calcul = parseFloat(ch1) / parseFloat(ch2);
            console.log(calcul);
            break;
    }

    ch1 = calcul;
    document.getElementById('saisie').innerHTML = ch1;
    operateur = '';
    ch2 = '';
};
