// Continue --- Skip rest of the code for this Iteration
for (let i = 30; i <= 60; i++){
    if (i % 3 === 0){
        continue
    }
    console.log(i)
}

let i = 30;
while (i <= 60){
    i++;
    if (i % 3 !== 0){
        continue
    }
    console.log(i);
}