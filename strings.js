// Extract the first four characters from the string below;
// "beautiful"

let x = "beautiful";
console.log(x[0] + x[1] + x[2] + x[3]);



// Insert the following string at the tenth index of the below variable:
// "eat"
// const food = "I did not have appetite today"

const sentence = "I did not have appetite today";
console.log(`${sentence[10]}eat`);







// Count how many times the following string appears in the string variable:
// 1. "the"
// 2."s"
// const story= "She sells sea shells at the sea shore"

const story = "She sells sea shells at the sea shore"
let Count = (story.match(/the/g) ||[]).length;
console.log(Count);

// Convert the following strings into the specified format:
// 1. UpperCase: "CONfidant"
// 2. LowerCase: "amazing", "beautiFUL"
// 3. Title case "A busy office"

const friend = "CONfidant";
const girl = "amazing";
const beauty = "beautiFUL";
const office = "A busy office"
console.log(friend.toLocaleUpperCase());
console.log(girl.toLowerCase());
console.log(beauty.toLowerCase());


// Using JavaScript, find the following words from the following strings:
// 1. "market"
// const string1 = "The lady went to the market with her sister";
// 2. "season"
// const string2 = "My favorite season is spring"
//  Option 1

