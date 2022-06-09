    
function primefun(num){
    if(num<1){
        return("wrong Input");
}

for(let i=1;i<num;i++){
    for(let j=2;j<i;j++){
        if(i%j==0){
            break;
        }else{
            console.log(i);
            break;
        }
    }


}


}

let num= parseInt(prompt("Enter the no."));
prime= primefun(50);
