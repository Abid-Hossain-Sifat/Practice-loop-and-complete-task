/*----sum of odd num from 91 to 129----*/
let  sum = 0;
for (let i = 91; i<=129; i++){
    if ( i % 2 === 1){
        console.log ('Odd is:', i)
    sum = sum + i;
    console.log (sum);
    }
}
console.log ('Sum of odd number from 91-129 is',sum);

/*----------Sum of even number from 51 to 85-------*/
let s= 0;
for (let i= 51; i<=85; i++ ){
    if (i % 2 === 0){
        console.log ('Even is:', i)
    s = s+i;
    console.log ('Sum is:', s);
    }
}
console.log ('Sum of even number from 52-85 is',s);