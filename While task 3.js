let number = 81;
let sum = 0;
while (number <= 131){
    console.log (number)
    if (number % 2 === 1){
        console.log ('Odd is ', number)
        sum = sum + number
        console.log ('Sum is ', sum)
    }
    number++
}