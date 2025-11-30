function factorielle(n){
    if(n=0){
        return 1;
    }else{
        n*factorielle(n-1);
    }
}