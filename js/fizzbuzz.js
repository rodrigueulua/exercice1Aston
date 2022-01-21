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

incrementNumber();