// Contenu de la carte friendship
function friendship(){
    let friendshipText =`Les noms des quelques personnages de la série "Friendship is magic", sous forme de liste non ordonnée.`;
    document.getElementById("friendship").innerHTML =friendshipText;
}

// Contenu de la carte horloge
function horloge(){
    let horlogeText =`Affichage de l'heure actuelle sous forme : "hh:mm:ss" au centre de la page.`;
    document.getElementById("horloge").innerHTML =horlogeText;
}

// Contenu de la carte fizzbuzz
function fizzbuzz(){
    let fizzbuzzText =`Une page qui affiche dans un champs de texte un compteur allant de 0 à 100. </br></br>
                        Il affiche :
                        <ul>
                                <li>
                                    fizz si c'est un multiple de 3
                                </li>
                                <li>
                                    Buzz si c'est un multiple de 5
                                </li>
                                <li>
                                    FizzBuzz si c'est un multiple de 3 et de 5                                
                                </li>
                            </ul>`;

    document.getElementById("fizzbuzz").innerHTML =fizzbuzzText;
}


// Contenu de la carte fizzbuzz
function fizzbuzzplus(){
    let fizzbuzzplusText =`Un nouveau FizzBuzz, sauf que :
                            <ul>
                                <li>
                                    Une case affichera le chiffre,
                                </li>
                                <li>
                                    Fizz, Buzz ou FizzBuzz s'afficheront au dessus du chiffre, en grand
                                </li>
                                <li>
                                    Les valeurs s'afficheront une à une, </br>
                                </li>
                                <li>
                                    Un boutton next permettra de passer à la valeur suivante </br>
                                </li>
                                <li>
                                    Un bouton "prev" permettra d'afficher la valeur précédente.                                </li>
                            </ul>`;
    document.getElementById("fizzbuzzplus").innerHTML =fizzbuzzplusText;
}


// Appel des fonctions
friendship();
horloge();
fizzbuzz();
fizzbuzzplus();