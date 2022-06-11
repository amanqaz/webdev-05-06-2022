function primetillN(num){


    for(let i=2;i<=num;i++){
        let count=0;


        for(let j=0;j<=i;j++){
            

            if(i%j==0){
                count=count+1;
            }
}  
if(count==2){
    console.log(""+i);  
   }

 }

}

let num= parseInt(prompt("Enter the no."));
prime= primetillN(num);
