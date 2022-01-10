var utilisateur = {
    nom: "BREGLER",
    prenom: "Thomas",
    date: 2001,
    mdp: "azerty",
    diplomes : ["BAC STI2D","BAC+3"],
    experienceUtilisateur : ["experience1","experience2","experience3"],
    hobby : ["le Karting","les Jeux-vidéos","l'Airsoft"],
    codeur : true,
    github : "https://github.com/thomixlz"
};


var saisieTest = "azerty"

////////////////////////////////////////////////////////////////////////////

                                // PARTIE 1 // 

////////////////////////////////////////////////////////////////////////////

// Afficher les diplômes de l'utilisateur //

console.log("Diplômes = ", utilisateur.diplomes);

// Afficher les expériences de l'utilisateur //

console.log("Expériences = ", utilisateur.experienceUtilisateur);

// Afficher un message d'acceuil personnaliser //

console.log("Bonjour,", utilisateur.nom , utilisateur.prenom,"! Nous sommes content de vous voir ! :D");

// Calculer age de l'utilisateur //

console.log("Age =" , 2021 - utilisateur.date, "ans");


// Verification du mot de passe //

function motDePasseVerif(saisie) {
    if (saisie == utilisateur.mdp) {
        console.log("Mot de passe = True");
        return true 
    } else {
        console.log("Mot de passe = False");
        return false 
    }
}

motDePasseVerif(saisieTest);
console.log("//////////////////")

////////////////////////////////////////////////////////////////////////////

                                // PARTIE 2 // 

////////////////////////////////////////////////////////////////////////////


// let nomSaisie;
// let motDePasseSaisie;

// function verifDeMonPremierUtilisateur() {
//     nomSaisie = document.querySelector('.nom').value;
//     console.log(nomSaisie);
//     motDePasseSaisie = document.querySelector('.motDePasse').value;
//     console.log(motDePasseSaisie);

//     if (nomSaisie == utilisateur.nom && motDePasseSaisie == utilisateur.mdp) {
//         alert("Vous êtes connecté !")
        
//         document.querySelector('.non').style.display = "none"; 
//         document.querySelector('.exo1').style.display = "none"; 
//         document.querySelector('.connect').style.display = "block"; 

//         document.querySelector('.h1').textContent = "Bonjour, " + utilisateur.nom + " " + utilisateur.prenom;
//         document.querySelector('.nomutil').textContent = "Nom = " + utilisateur.nom;
//         document.querySelector('.prenom').textContent = "Prenom = " + utilisateur.prenom;
//         document.querySelector('.age').textContent = "Age = " + (2021 - utilisateur.date) + "ans" ;
//         document.querySelector('.github').textContent = "Github = " + utilisateur.github;
//         document.querySelector('.diplomes').textContent = "Diplômes = " + utilisateur.diplomes;
//         document.querySelector('.exp').textContent = "Expérience = " + utilisateur.experienceUtilisateur;
//         document.querySelector('.hobby').textContent = "Hobbies = " + utilisateur.hobby;
   
//     } else {
//         document.querySelector('.non').style.display = "block"; 
//     }

// }




// document.querySelector('.login').onclick = verifDeMonPremierUtilisateur;




////////////////////////////////////////////////////////////////////////////

                                // PARTIE 3 // 

////////////////////////////////////////////////////////////////////////////



let nomSaisie;
let motDePasseSaisie;
let mesUtilisateursNom = [];
let mesUtilisateursMdp = [];
let NombreUtilisateurs = [];

function verifUtilisateur() {
    nomSaisie = document.querySelector('.nom').value;
    console.log(nomSaisie);
    motDePasseSaisie = document.querySelector('.motDePasse').value;
    console.log(motDePasseSaisie);


    // on verifie si le nom rentrée existe dans la liste des noms
    let connectCheckNom = mesUtilisateursNom.includes(nomSaisie);

    
    // On recupère aussitot l'indice du noms dans la liste qui aura le meme index dans la liste des mot de passe
    let indiceNom = mesUtilisateursNom.indexOf(nomSaisie);

    // on verifie donc que le mot de passe correspondra à cette indice dans la liste des mdp



    if (connectCheckNom == true && motDePasseSaisie == mesUtilisateursMdp[indiceNom]) {
        alert("Vous êtes connecté !") 

        // pour simplement chercher dans la liste de tout les utilisateurs le bon 

        let user = mesUsers[indiceNom];

        document.querySelector('.non').style.display = "none"; 
        document.querySelector('.exo1').style.display = "none"; 
        document.querySelector('.connect').style.display = "block"; 

        document.querySelector('.h1').textContent = "Bonjour, " + user.nom + " " + user.prenom;
        document.querySelector('.nomutil').textContent = "Nom = " + user.nom;
        document.querySelector('.prenom').textContent = "Prenom = " + user.prenom;
        document.querySelector('.age').textContent = "Age = " + (2021 - user.date) + "ans" ;
        document.querySelector('.github').textContent = "Github = " + user.github;
        document.querySelector('.diplomes').textContent = "Diplômes = " + user.diplomes;
        document.querySelector('.exp').textContent = "Expérience = " + user.experienceUtilisateur;
        document.querySelector('.hobby').textContent = "Hobbies = " + user.hobby;     
        
    } else {
         document.querySelector('.non').style.display = "block"; 
    }

}              
 

function MonUtilisateur(nom, prenom, date, mdp, diplomes, experienceUtilisateur, hobby, codeur, github) {
    this.nom = nom;
    this.prenom = prenom;
    this.date = date;
    this.mdp = mdp;
    this.diplomes = diplomes;
    this.experienceUtilisateur = experienceUtilisateur;
    this.hobby = hobby;
    this.codeur = codeur;
    this.github = github;

    mesUtilisateursNom.push(nom);
    mesUtilisateursMdp.push(mdp);
}

const mesUsers = [
    new MonUtilisateur('CORLEONE', 'freeze', 1992, 'azertyuiop',"BAC",["experience1","experience2","experience3"],["musique","jeux-vidéos"],false,' '),
    new MonUtilisateur('TODO', 'Amari', 1678, 'azerty'," ",["experience1","experience2"],["dance","jeux-vidéos"],true,'https://github.com/amari'),
    new MonUtilisateur('BREGLER', 'Thomas', 2001, 'azerty',["BAC STI2D","BAC+3"],["experience1","experience2","experience3"],["le Karting","les Jeux-vidéos","l'Airsoft"],true,'https://github.com/thomixlz')
];

document.querySelector('.login').onclick = verifUtilisateur;
console.log(mesUtilisateursNom) // liste des utilisateurs des users
console.log(mesUtilisateursMdp) // liste de mot de passe des users
console.log(mesUsers) // Liste et nombre de mes users





