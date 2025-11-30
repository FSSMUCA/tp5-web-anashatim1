function sommeBoucle(n){
    let somme=0;
    for(let i=1;i<n+1;i++){
        somme=somme+i;
    }
    return somme;
}

function sommerecursive(n){
    if (n=0){
        return 0;
    }else{
        return  n+sommerecursive(n-1);
    }
}