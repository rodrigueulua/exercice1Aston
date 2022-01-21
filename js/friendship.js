function namesPoney(){
    let noms = ["Twilight Sparkle", "Fluttershy", "Princesse Célestia", "Pinkie Pie", "Rainbow Dash"];
    const ul = document.getElementById("namesList");

    for(i = 0; i < noms.length; i++){
        ul.innerHTML += `
        <li>
            <figure>
                <img src="../images/${noms[i]}.png"
                alt="Elephant at sunset">
                <figcaption>${noms[i]}</figcaption>
            </figure>
        </li>`
}
}
namesPoney();