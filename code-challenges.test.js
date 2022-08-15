// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.




//   const areYouHungry = (string) => {
//     if (string === "yes") {
//       return "eat food";
//     } else if (string === "no") {
//       return "keep working";
//     }
//   };
// a) Create a test with expect statements for each of the variables provided.

// const numbersArray1 = [6, 7, 8, 9, 10]
// // Expected output: [18, 21, 24, 27, 30]
// const numbersArray2 = [24, 27, 30, 33, 36]
// // Expected output: [72, 81, 90, 99, 108]


// // b) Create the function that makes the test pass.



// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.



// a) Create a test with expect statements for each of the variables provided.


const object1 = { number: 15 }
// Expected output: "15 is divisible by three"
const object2 =  { number: 0 }
// Expected output: "0 is divisible by three"
const object3 = { number: -7 }
// Expected output: "-7 is not divisible by three"

// create a checker  with a funciton called "demarcateThrice", it checks to see if the value of a key of an object is devisable by 3.
// later when i write the function i can check if its devisible by 3 by using % 3 and looking to see if it strictly equals zero. 


describe("demarcateThrice", () => {
    it("checks to see if the value of a key of an object is devisable by 3", () => {
      expect(demarcateThrice(object1.number)).toEqual(`15 is divisible by three`);
      expect(demarcateThrice(object2.number)).toEqual(`0 is divisible by three`);
      expect(demarcateThrice(object3.number)).toEqual(`-7 is not divisible by three`);
    });
  });
//returned 1 fail.
// b) Create the function that makes the test pass.
// create a funciton called "demarcateThrice", it checks to see if the value of a key of an object is devisable by 3.
// i can check if its devisible by 3 by using % 3 and looking to see if it strictly equals zero. 
// i can then have it return the statement, starting with the number that it used, then say if it is of is not divisible by three.


const demarcateThrice = (number) => {
    if (number %3 === 0) {
        return `${number} is divisible by three`
    } else {
        return `${number} is not divisible by three`
    }
}



// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.
describe("firstLetterFertalizer", () => {
    it("takes the first letter and capitalizes it", () => {
      expect(firstLetterFertalizer(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]);
      expect(firstLetterFertalizer(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]);
    });
  });
//returned 1 fail
const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]


// b) Create the function that makes the test pass.
    // declare a function that takes in an array
    // create a local variable that maps through the array
    // with each value access the first index and capitalize the letter then concatenate the remainder of the word
    // return the local variable joined into a string
    const firstLetterFertalizer = (array) => {
        
      let eachItem = array.map((value) => {
        
          
          return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
      });
   
       return eachItem;
      }
      


// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.
describe("proplemFromhell", () => {
  it("checks to see where the first vowel is and logs that index ", () => {
    expect(proplemFromhell(vowelTester1)).toEqual(1);
    expect(proplemFromhell(vowelTester2)).toEqual(0);
    expect(proplemFromhell(vowelTester3)).toEqual(2);
  });
});

//returned 1 fail

const vowelTester1 = "learn"
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2
//pseudocode: make a function
// look for vowels and log the index of them if non log -1.
// get rid of all the index less than 0
// organize smallest to largest putting the smallest number in the 0 index of new array.
//get the 0 index which is the first location of the vowel.
// i spent like 4 hours on this and it was way easier than i made it cause i was stupid. see practice.js to see the pain. i deleted so much and was still left with all that dumb stuff hahahaha. wow this one rocked me. I really wish i did the concepts and interview questions first, it would have made this wayyyyy easier. 

// b) Create the function that makes the test pass.
const proplemFromhell = (value) =>{
  const aLittleBitOfWiskeyAtBfastNeverHurtAnyone = (value) =>
  value.indexOf("a");
  const exceptMyMarriageIGuess = (value) => value.indexOf("e");
  const incandecentLightbulbsTasteBad = (value) => value.indexOf("i");
  const officeOfTheSecretaryAndMistressToClinton = (value) => value.indexOf("o");
  const unacceptableChoicesForVariableNamesMr = (value) => value.indexOf("u");

  var joinedAtTheHip =        ([aLittleBitOfWiskeyAtBfastNeverHurtAnyone(value),exceptMyMarriageIGuess(value), incandecentLightbulbsTasteBad(value), officeOfTheSecretaryAndMistressToClinton(value), unacceptableChoicesForVariableNamesMr(value)])


  const littleBumpAndGrindNeverHurtAnyone = (array) => {
      let newArr = [];
      for (let i = 0; i < array.length; i++) {
          if (array[i] >= 0){
              newArr.push(joinedAtTheHip[i]);
           }
       }
      return newArr
  };

  var oneMoreStep = (littleBumpAndGrindNeverHurtAnyone(joinedAtTheHip)).sort((a, b) => a-b);
  var hereIsTheStupidAnserOMGThatTookSoLong =  oneMoreStep[0];
  return hereIsTheStupidAnserOMGThatTookSoLong
}
