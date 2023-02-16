let n = Number(prompt("enter a number"));
if ( (n = 2) || (n = 9)){
for (let i = 1; i <= 10; ++i) {
    document.write(n + " * " + i + " = " + n * i + "<br>");
}

}


//this will accept numbers only between 2 to 9
let n2;
do {
  n2 = prompt("Enter a number between 2 and 9");
  n2 = parseInt(n2);
} while (isNaN(n2) || n2 < 2 || n2 > 9);

for (let i = 1; i <= 10; ++i) {
  document.write(n2 + " * " + i + " = " + n2 * i + "<br>");
}
