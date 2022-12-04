import { isValidDateValue } from "@testing-library/user-event/dist/utils";

const alphanum = new RegExp(
    '^[a-zA-Z]+[a-zA-Z0-9. _\-]{2,25}$'
 );
const validDescription= new RegExp('^[a-zA-Z]+[a-zA-Z0-9. _\-]{9,25}$')
const validPrice= new RegExp('^[0-9]*$')
const validNumber= new RegExp('^[0-9]+.?[0-9]*$')
const validYear= new RegExp('^[0-9]{4}$')
const validTel= new RegExp('^[0-9]{8}$')
const validName= new RegExp('^[a-zA-Z]{3,25}$')
const validEmail= new RegExp("")

function validatePost(post,stepname){
 const errors={}
 
 if(stepname=="stepcommun"){
    if(post.cat.length==0){
        errors['cat']="Sélectionner une catégorie";
    }
    if(post.sousCat.length==0){
        errors['sousCat']="Sélectionner une sous catégorie";
    }
    
 if(post.titre.length==0){
    errors['titre']="saisir un titre";
   }
   else if(!alphanum.test(post.titre)){
    errors['titre']="saisir un titre valide";
   }
   
   if(post.description.length==0){
    errors['description']="saisir une description";
   }
   else if(!validDescription.test(post.description)){
    errors['description']="saisir une description valide";
   }
   if(post.prix.length==0){
    errors['prix']="saisir le prix";
   }
   else if(!validPrice.test(post.prix)){
    errors['description']="saisir un prix valide";
   }

}
else if(stepname=="stepveh"){

   if(post.kil.length==0){
    errors['kil']="saisir un kilométrage";
   }
   else if(!validNumber.test(post.kil))
   errors['kil']="saisir un kilométrage valide"

   if(post.annee.length==0)
    errors['annee']="saisir une annee"
    else if(!validYear.test(post.annee))
    errors['annee']="saisir une année valide"    

    if(post.boite.length==0){
        errors['boite']="Sélectionner le type de la boite";
    }
    if(post.energie.length==0){
        errors['energie']="Sélectionner l'energie";
    }
    if(post.marque.length==0){
        errors['marque']="Sélectionner la marque";
    }
    if(post.modele.length==0){
        errors['modele']="Sélectionner le modele";
    }
    if(post.pf.length==0){
        errors['pf']="Sélectionner la puissance fiscale";
    }
    if(post.couleur.length==0){
        errors['couleur']="Sélectionner la couleur";
    }
}

if(stepname=="stepinfo"){
if (post.ville.length==0)
  errors['ville']="sélectionner une ville"
if(post.del.length==0)
 errors['del']="sélectionner une délégation"
if(post.tel.length>0){
    if(!validTel.test(post.tel))
    errors['tel']="saisir un numéro tel valide"
}
}
if(stepname=="stepimmo"){
if(post.type.length==0)
errors['type']="séléctionner le type"
if(post.sb.length==0)
errors['sb']="saisir salle de bain"
else if(!validNumber.test(post.sb))
errors['sb']="saisir un nombre valide"
if(post.chambre.length==0)
errors['chambre']="saisir le nombre de chambres"
else if(!validNumber.test(post.chambre))
errors['chambre']="saisir un nombre valide"
if(post.superficie.length==0)
errors["superficie"]="saisir la superficie"
else if(!validNumber.test(post.superficie))
errors["superficie"]="saisir un nombre valide"

}

 
 return errors

}

function validateUser(user){
    const errors={}

    if(user.nom.length==0){
        errors['nom']="saisir un nom"
    }
    else if (!validName.test(user.nom)){
        errors['nom']="saisir un nom valide"
    }
    if(user.prenom.length==0){
        errors['prenom']="saisir un prenom"
    }
    else if (!validName.test(user.prenom)){
        errors['prenom']="saisir un prenom valide"
    }
    if(user.email.length==0){
        errors['email']="saisir un email"
    }
    else if (!validEmail.test(user.email)){
        errors['email']="saisir un email valide"
    }
    if(user.tel.length==0){
        errors['tel']="saisir un numéro de téléphone"
    }
    else if (!validTel.test(user.tel)){
        errors['tel']="saisir un numéro de téléphone valide"
    }
    if(user.pwd.length==0){
        errors['pwd']="saisir un mot de passe"
    }
    else if (user.pwd.length<8){
        errors['pwd']="8 caractères au moins"
    }
    if(user.cpwd != user.pwd){
        errors['cpwd']='vérifier la correspondance des mots de passe'
    }
    return errors
}

export default {
    validatePost,
    validateUser
}