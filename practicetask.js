// Sum of the number from 30-90 that are divisible by 7
let total = 0;
for (let i = 30; i<=90; i+=1){
    if ( i % 7 === 0){
        console.log (i)
        total = total + i
        console.log ('Total is', total)
    }
}
console.log ('The final total is', total);