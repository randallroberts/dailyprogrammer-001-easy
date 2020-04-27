// If/Else
// Create a variable called time

let time = 10;
// Write an if/else block that...
// Logs You're early! if time is less than 10
// Logs You're on-time! if time is exactly 10
// Logs You're late! for any other time
console.log("*********** time = 10 ******************");
if (time < 10) {
    console.log("You're early!");
}
else if (time === 10) {
    console.log("You're on-time!");
}
else {
    console.log ("You're late!");
}

console.log("*********** timeOfWeek = weekday ******************");
// Create a variable called timeOfWeek
let timeOfWeek = "weekday";
// You can expect that it will either hold the value weekday or weekend
// Modify your if/else block to only log the above messages if it is a weekday
// Otherwise, log You shouldn't be in class!
if (timeOfWeek === "weekday") {
    if (time < 10) {
        console.log("You're early!");
    }
    else if (time === 10) {
        console.log("You're on-time!");
    }
    else {
        console.log ("You're late!");
    }
}
else {
    console.log("You shouldn't be in class!");
}

// Come up with at least three different times to test your code with and try them out

console.log("*********** Case facialExpression = smiling ******************");

// Switch
// Create a variable called facialExpression
let facialExpression = "smiling";
// Write a switch statement that...

// Logs You look happy if facialExpression is "smiling"
// Logs You look sad if facialExpression is "frowning"
// Logs You look angry if facialExpression is "scowl"
// Logs I don't know for any other value
switch (facialExpression) {
    case ("smiling"):
        console.log("You look happy");
        break;
    
    case ("frowning"):
        console.log("You look sad");
        break;
    
    case ("scowl"):
        console.log("You look angry");
        break;
    
    default:
        console.log ("I don't know");
        break;
}

// What happens when you forget to include break statements in each case?


// Loops
// For Loops

console.log("*********** famousCats ******************");

// Create an array of strings called famousCats with at least three entries
// You can use "garfield", "felix", "meowth"
let famousCats=["garfield","felix", "meowth"];

console.log("*********** All cats ******************");
// Write a for loop that prints each cat to the console
for (let i=0; i<=famousCats.length-1; i++) {
    console.log(famousCats[i]);
}
console.log("*********** skip first cat ******************");
// Write a for loop that prints each cat except the first to the console
for (let j=1; j<=famousCats.length-1;j++){
    console.log(famousCats[j]);
}
console.log("*********** all cats in reverse ******************");
// Write a for loop that prints each cat to the console in reverse order
for (let k=famousCats.length-1;k>=0;k--) {
    console.log(famousCats[k]);
}

console.log("*********** while cats ******************");
// While Loops
// Rewrite the previous exercise using a while loop
let l=0;
while (l<=famousCats.length-1) {
    console.log(famousCats[l]);
    l++;
}

console.log("*********** breaking a for loop ******************");
// Terminating a For Loop
// Use your famousCats array from the previous exercise
// Create a new variable called myFavourite that holds the name of your favorite famous cat
let myFavourite = "felix";

// Write a for loop that...
// Logs Kitty? if the current cat is not your favorite cat
// Logs There you are! if the current cat is your favorite cat and then breaks the loop

for (let m=0; m<famousCats.length-1;m++) {
    if (famousCats[m] !== myFavourite) {
        console.log("Kitty?");
    }
    else {
        console.log("There you are!");
        break;
    }
}

// Test your loop with some different arrays
// Favorite last
// Favorite first
// Favorite not in array
// Empty array

console.log("*********** breaking a while loop ******************");
// Terminating a While Loop
// Rewrite the previous exercise using a while loop
// Make sure that the loop terminates when...
// Your favorite cat is found
// The end of the array is reached
let n = 0;
while ((famousCats[n] !== myFavourite) && (n < famousCats.length-1)) {
    if (famousCats[n] !== myFavourite) {
        console.log("Kitty?");
    }
    else {
        console.log("There you are!");
        break;
    }
    n++;
}