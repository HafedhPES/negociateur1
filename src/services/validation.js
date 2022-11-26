const alphanum = new RegExp(
    '^[a-zA-Z]+[a-zA-Z0-9. _\-]{2,25}$'
 );
const validDescription= new RegExp('^[a-zA-Z]+[a-zA-Z0-9. _\-]{9,25}$')
const validPrice= new RegExp('^[0-9]*$')
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

}

 
 return errors

}

export default {
    validatePost
}