function totalAvecRemise(total, remise){
     return totalFinal = total - (total * remise / 100);
}

let ht=Number(prompt("entrer le total"));
let remise=Number(prompt("entrer remise"));
let n=totalAvecRemise(ht,remise);
console.log(n);