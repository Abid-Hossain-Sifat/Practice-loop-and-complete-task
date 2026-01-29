for (let i = 1; i <=100; i++){
    console.log(i)
    let mth = Math.sqrt(i);
    if (Number.isInteger(mth) && i !==1){
        console.log ('First square number is', i)
        break
     }
    }
