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


/**
 * Une fonction qui crée un élement P dans le DOM en appellant la fonction fizzBuzz en lui passant de nombre en paramètre de 0 à 100
 */
function incrementNumber(){
    let div = document.getElementById("resultats");
    for(i = 0; i <= 100; i++){
        div.innerHTML += `
        <p>
            ${i} : ${fizzBuzz(i)}      
        </p>
        `
    }
}

// appel de la fonction
incrementNumber();