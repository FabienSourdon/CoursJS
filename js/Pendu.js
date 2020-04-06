var motADeviner = ["tortue", "ninja", "finale", "fantaisie", "dragon", "quete", "ecole", "haut", "couteau", "etoile", "noire", ]
var aleatoire = motADeviner[Math.floor(Math.random() * motADeviner.length)];
var aleatoireLong = aleatoire.length;
var coups = 9;
var tabAleatoire = aleatoire.split('');
var tabAleatoireTmp = aleatoire.split('')
var tabUndr = [];
console.log('al:', aleatoire, 'allong:', aleatoireLong, 'table:', tabAleatoire, 'tabletmp:', tabAleatoireTmp);

for (var i=0; i< aleatoireLong; i++){
    tabUndr.push("_");
    document.getElementById('affiche').innerHTML = tabUndr.join(' ');
}
console.log('tabUn:', tabUndr)

function verifLettre(x){

    if (coups != 0){
        if (tabAleatoire.includes(x)){
            for(var i=0; i<aleatoireLong; i++){
                var index = tabAleatoire.indexOf(x);
                console.log("oui", "ind:", index)
                tabUndr[index] = x;
                tabAleatoire[index] = '_';
                console.log(tabUndr, tabAleatoire);
                document.getElementById('affiche').innerHTML = tabUndr.join(' ')
            }
        }
        else {
            console.log("non");
            coups --;
            console.log(coups);
        }
    }
    else{
        document.getElementById('affiche').innerHTML = "PERDU !"
    }
}