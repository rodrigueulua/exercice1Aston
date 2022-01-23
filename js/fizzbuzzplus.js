/**
 * Une fonction qui attend un nombre en paramètre et retourne FIZZ si le nombre est mutiple de 3, BUZZ s'il est multiple de 5 ou FIZZBUZZ s'il est multiple de 3 et 5.
 * @param { integer } number
 */
function fizzBuzz(number){
    let reponse = "";

    if (number % 15 == 0){
        reponse = "FizzBuzz";
    }
    else if ((number % 3) == 0){
    reponse = "Fizz";
    }
    else if ((number % 5) == 0){
        reponse = "Buzz";
    }
    else{
        reponse="PAS MULTIPLE DE 3 ou DE 5";
    }

    return reponse;
}

// Initialisation variable qui gère le nombre de clics
let nombreClics = 0;


/**
 * Une fonction qui permet d'incrémenter la valeur afficher dans le DOM
 * 
 */
function incrementOneNumber() {
    // Récuperation de l'element H3 par son ID
    let compteur = document.getElementById("resultat");

    // Récuperation de l'element P par son ID
    let chiffre = document.getElementById("chiffre");
    
    // Test de la valeur afficher dans le DOM et affectation de la valeur
    if (compteur.textContent == ""){
        nombreClics;
        compteur.innerHTML =fizzBuzz(nombreClics);
        chiffre.innerHTML = nombreClics;
    }
    else{
        nombreClics++
        compteur.innerHTML = fizzBuzz(nombreClics);
        chiffre.innerHTML = nombreClics;
    }
}

/**
 * Une fonction qui permet de décrémenter la valeur afficher dans le DOM
 * 
 */
function decrementOneNumber() {
    // Récuperation de l'element DIV par son ID
    let compteur = document.getElementById("resultat");

    // Récuperation de l'element P par son ID
    let chiffre = document.getElementById("chiffre");

    // Décrémentation
    nombreClics--;

    // Affectation de la valeur dans le DOM
    compteur.innerHTML = fizzBuzz(nombreClics);
    chiffre.innerHTML = nombreClics;

}

// Appel des fonctions
decrementOneNumber;
incrementOneNumber;
