function nbAnimaux(poulets, vaches, chevaux){
    return poulets + vaches + chevaux;
}

function nbPattes(nbPoulets, nbVaches, nbChevaux){
    return nbPoulets * 2 + (nbVaches + nbChevaux) * 4;
}

let userPoulets = parseInt(prompt('Vous avez combien de poulet?'));
let userVaches = parseInt(prompt('Vous avez combien de vache?'));
let userChevaux = parseInt(prompt('Vous avez combien de chevau?'));

let resultNbanimaux = nbAnimaux(userPoulets, userVaches, userChevaux);
let resultNbpattes = nbPattes(userPoulets, userVaches, userChevaux);
document.write(`<p> Vous avez ${resultNbanimaux} animaux et ${resultNbpattes} pattes </p>`);