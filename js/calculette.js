var operateur = '';
var ch1 = '';
var ch2 = '';

function addNbr(a)
{
    if (operateur == '')
    {
        document.getElementById('saisie').innerHTML += a;
        ch1 = ch1 += a; 
    } 
    else
    {
        document.getElementById('saisie').innerHTML += a;
        ch2 = ch2 += a ;
    }
}

function addOp(a)
{
    if (operateur == ''){
        document.getElementById('saisie').innerHTML += a;
        operateur = a;
    }
    else{
        document.getElementById('saisie').innerHTML = ch1 + a;
        operateur = a;
    }
}

function plusMoins()
{
    if (ch2 == ''){
        ch1 = -ch1;
        document.getElementById('saisie').innerHTML = ch1;
    }
    else{
        ch2 = -ch2;
        document.getElementById('saisie').innerHTML = ch1 + operateur + '(' + ch2 + ')';
    }
}

function retour()
{
    if (operateur == ''){
        ch1 = ch1.slice(0, -1);
        document.getElementById('saisie').innerHTML = ch1;
    }
    else {
        ch2 = ch2.slice(0, -1);
        document.getElementById('saisie').innerHTML = ch1 + operateur + ch2;
    }
}

function effacer()
{
    document.getElementById('saisie').innerHTML = '';
    ch1 = '';
    ch2 = '';
    operateur = '';
}

function annul()
{
    if (operateur == ''){
        ch1 = ''; 
        document.getElementById('saisie').innerHTML = '';
        console.log ("ch1:", ch1, "ch2:", ch2, "op:", operateur);
    }
    else if (operateur != '' && ch2 == ''){
        ch1 = '';
        operateur = '';
        console.log ("ch1:", ch1, "ch2:", ch2, "op:", operateur);
        document.getElementById('saisie').innerHTML = '';
    }
    else{
        ch2 = '';
        console.log ("ch1:", ch1, "ch2:", ch2, "op:", operateur);
        document.getElementById('saisie').innerHTML = ch1 + operateur + '';
    }
}

function calc(){

    switch (operateur)
    {
        case '+':
            var calcul = parseFloat(ch1) + parseFloat(ch2);
            break;
        case '-':
            var calcul = parseFloat(ch1) - parseFloat(ch2);
            break;
        case '*':
            var calcul = parseFloat(ch1) * parseFloat(ch2);
            break;
        case '/':
            var calcul = parseFloat(ch1) / parseFloat(ch2);
            break;
    }

    ch1 = '' + calcul;
    document.getElementById('saisie').innerHTML = ch1;
    operateur = '';
    ch2 = '';
};