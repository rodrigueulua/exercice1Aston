/**
 * Une fonction qui modifie le DOM en créant une liste non ordonnée qui contient en elle une figure, une image et une description de l'image.
 */
function namesPoney(){
    // Liste des poneys
    let noms = ["Twilight Sparkle", "Fluttershy", "Princesse Célestia", "Pinkie Pie", "Rainbow Dash"];
    
    // Récuperation de la balise UL à partir de son ID
    let ul = document.getElementById("namesList");

    // Une boucle qui modifie le DOM en ajoutant dans une liste une image et une description
    for(i = 0; i < noms.length; i++){
        ul.innerHTML += `<li>
                            <figure>
                                <img src="../images/${noms[i]}.png"
                                alt="Elephant at sunset">
                                <figcaption>${noms[i]}</figcaption>
                            </figure>
                        </li>`
    }
}

// L'appel de la fonction
namesPoney();