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

let nombreClics = 0;

function incrementOneNumber() {
    let compteur = document.getElementById("resultat");
    if (compteur.textContent == ""){
        nombreClics;
        compteur.innerHTML = nombreClics +" : "+fizzBuzz(nombreClics);
    }
    else{
        nombreClics++
        compteur.innerHTML = nombreClics +" : "+fizzBuzz(nombreClics);
    }
}


function decrementOneNumber() {
    let compteur = document.getElementById("resultat");
    nombreClics--;
    compteur.innerHTML = nombreClics +" : "+fizzBuzz(nombreClics);
}

decrementOneNumber;
incrementOneNumber;
