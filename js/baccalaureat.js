let note = parseFloat(prompt("qu'elle est t'as moyenne ?")) ;

if (note < 10 ){
    alert("Tu est recalé !"); 
} else if ((note >= 10) && (note < 12)){
    alert("Tu passe !");
} else if ((note >= 12 ) && (note <= 20 )){
    alert("Bravo pour la mentions !");
}else {
    alert("Et de 0 à 20 ça donne...");
}