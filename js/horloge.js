/** 
*Une fonction qui retourne en type string l'heure actuelle 
*
*/
function getTime() {
     // Instanciation de la classe Date
    let now     = new Date(); 

    // Récuperation des methodes getHours, getMinutes et getSeconds de la classe Date
    let hour    = now.getHours();
    let minute  = now.getMinutes();
    let second  = now.getSeconds(); 
  
    // Gestion de l'affichage de l'heure, minute et seconde inférieure à 10
    if(hour.toString().length == 1) {
         hour = '0'+hour;
    }

    if(minute.toString().length == 1) {
         minute = '0'+minute;
    }

    if(second.toString().length == 1) {
         second = '0'+second;
    }   

    // Concaténation de l'heure, minute et seconde
    let time = hour+':'+minute+':'+second;   
    
    // L'heure retournée
    return time;
}


// L'appel de la fonction getTime à chaque seconde
setInterval(function(){
    currentTime = getTime();
    document.getElementById("heure").innerHTML = currentTime;
}, 1000);