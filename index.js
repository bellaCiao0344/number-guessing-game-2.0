const name = prompt("hello there, what is your name?");
console.log("hello", name);
const num = Math.floor(Math.random() * 25);

console.log(num);
const gnum = prompt("guess the number between 0 and 25");
if (gnum == num) {
  console.log(
    "Congratulations, you have won the game! The game is now finished."
  );
} else {
  prompt("that is false, do u want to guess again?");
}  

alert("bye", name);
