function verifierMotDePasse(mdp){
    if(mdp.lenght >= 8 && mdp.includes("@")){
        return true;
    }else{
        return false;
    }
}

let mdp=prompt("Entrer le mdp :");
if (verifierMotDePasse(mdp)){
    console.log("Mot de passe valide");
}else{
    console.log("Mot de passe non valide");
}