for (let i = 1; i <= 10; i++){
    document.write("<p style='color:red'>C'est le tour de manége n° " + i + "</p>");
}

let tour = 0;
while(tour < 10){
    tour++;
    document.write("<p style='color:green'>C'est le tour de manége n° " + tour + "</p>");
}

// ------------------QUESTION 2
let question = parseInt(prompt("Combien de tours voulez-vous faire ?"));
let compteur = 0;
while(compteur < question){
    compteur++;
    document.write("<p style='color:green'>C'est la tour de manége n° " + compteur + "</p>");
}

let nbTour = parseInt(prompt("Combien de tours voulez-vous faire ?"));
for(let compte=1; compte <= nbTour; compte++){
    document.write("<p style='color:pink'>C'est la tour de manége n° " + compte+ "</p>");
}