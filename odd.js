// program for the odd numbers
function odd(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 2 != 0) {
            console.log(i);
        }
    }
}
let n = prompt("Enter the number");
console.log(odd(n));
