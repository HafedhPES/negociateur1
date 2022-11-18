const catOptions=["Immobilier","Véhicules","Hi-Teck","Nautique","Meubles","Loisirs","Autres"]
               
const sousCatOptions=(cat)=>{
switch(cat){
    case "Immobilier": return ['Maisons et villas','Appartements','Terrains et villas','Vacances','Commerciale']
    case "Véhicules":return ['Voitures','Camions','Remorques','Motos','Pièces de rechange','Acessoires']
    case "Loisirs":return ['Sports','Animeaux','Vélos','Musique','Livres']
    case "Hi-Teck":return ['Ordinateurs','Smartphones','Tablettes','TV','Jeux vidéos et consoles','Acessoires']
    case "Meubles":return ['Sallons','Tables et chaises','Bureaux','Lits','Elements TV','Jardins']
    case "Nautique":return ['Bateaux','Piscines','Jet Ski','Pêche','Autres']

    
    
    default:return []
}

}



export default{
    catOptions,sousCatOptions
}