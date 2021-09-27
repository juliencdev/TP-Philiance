var tableauUser = [
    {
        firstname : "John",
        name : "Doe",
        age : 25,
        permis : true
    } ,
    {
        firstname : "Antoine",
        name : "Mauron",
        age : 17,
        permis : false
    },
    {
        firstname : "Cedric",
        name : "Bodolec",
        age : 14,
        permis : false
    },
    {
        firstname : "Fred",
        name : "Esteban",
        age : 28,
        permis : true
    },
    {
        firstname : "Greg",
        name : "Lorient",
        age : 19,
        permis : true
    },
    {
        firstname : "Tony",
        name : "Montana",
        age : 32,
        permis : false
    },
    {
        firstname : "Intrus",
        name : "Petrus",
        age : 16,
        permis : false
    },
    {
        firstname : "john",
        nom : "doe",
        age : 26,
        permis : true
    },
    {
        firstname : "Antoine",
        nom : "Capel",
        age : 40,
        permis : true
    },
    {
        firstname : "Rachid",
        nom : "Ein",
        age : 34,
        permis : true
    }       
]

var tableauPermis = []
for (var i=0; i<tableauUser.length; i++) {
   console.log ("affichage de l'âge", tableauUser[i].age) ;
   if (tableauUser[i].permis == true){
       tableauPermis.push(tableauUser[i])
   }
}
console.log ("affichage du tableau avec les gens ayant le permis", tableauPermis)



// Vous avez un tableau de user juste au dessus, voici les consignes : 

// 1. Afficher dans la console l'age pour chaque utilisateur (utiliser la boucle)
// 2. Me mettre dans un nouveau tableau toute les personnes ayant le permis, créer cette variable qui correspondra au tableau avant la boucle
// le  tableau s'appellera tableauPermis,
//  voci les étapes :
                    // Initaliser une variable tableauPermis (soit un tableau vide)
                    // Créer votre boucle par rapport à tableauUser
                    // Il va falloir créer une condition qui à chaque tour de boucle va checker si la personne à le permis ou pas
                    // Si elle a le permis je met cette personne dans tableauPermis
                    // Faire un console.log de tableauPermis après la boucle pour vérifier votre résultat final