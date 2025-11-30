let valeur =nombre(prompt("Veuillez entrer une valeur : ")) ;
if (nb <0){
    console.log("Nombre négatif");
}else{
    if(nb>-1 && nb<11 ){
        console.log("Petit");
    }else{
        if(nb>10 && nb<51){
          console.log("Moyen");
        }else{
            if(nb>50 && nb<99){
                console.log("Grand");
            }else{
               console.log("Très grand");  
            }
        }
    }
}
