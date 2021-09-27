// Modifier le tableau d’objets ci-dessous pour modifier le format du numéro de téléphone, créer un type de contact admin et supprimer les doublons :

var contacts = [
   {
       prenom : 'john',
       telephone : '0611223344',
   },
   {
       prenom : 'elise',
       telephone : '0655667799'
   },
   {
       prenom : 'franck',
       telephone : '0612345678'
   },
   {
       prenom : 'elisa',
       telephone : '0612345678'
   }
]
var tableau = []
for (var i=0 ; i<contacts.length; i++) {
    
    console.log("+33" + contacts[i].telephone)
    
}
var test = '0611223344';
console.log ("+33" + test)
console.log ("+33" + test.slice (1));

var resultat1 =[]
for (var i=0;i<contacts.length;i++){
console.log (contacts[i])
resultat1.push ({
    prenom: contacts[i].prenom,
    telephone: "+33" +contacts [i].telephone.slice (1)
})
}
console.log (resultat1)
var resultat2 =[]
for (var i=0; i <resultat1.length; i++){
    console.log(resultat1[i])
    if (resultat1[i].prenom=== "john"){
        resultat2.push({
            prenom:resultat1[i].prenom,
            telephone:resultat1[i].telephone,
            admin: true

        })
        else{
            resultat2.push({
                prenom: resultat1[i].prenom,
                telephone : resultat1[i].telephone
                admin = false
            })
        
    




// 1 -  Téléphone

// 👉 Dans ce challenge, il faut modifier les numéros de téléphone afin de les afficher en format international +33612345678.

// 👉 Le résultat doit être un nouveau tableau.




// 2 -  Admin

// 👉 Modifiez votre tableau pour créer une nouvelle propriété “admin” pour chaque contact

// Cette propriété doit être à true si le contact est admin, à false sinon.

// 👉 Faire en sorte que John soit admin, les autres non.

// 👉 Le résultat doit être un nouveau tableau.
