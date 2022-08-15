// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// a describe method that lists the name of the function OR naming of the particular test.


// // First, predict the outcome based on your understanding of the code.
// // Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// // --------------------1) What will this log?

// const cohort = "Echo 2022"
// // console.log(cohort.split(""))

// // a) Your answer: This will log the array: 
//      ['E', 'c', 'h', 'o', ' ', '2', '0', '2', '2']
// // b) Verify and explain:
// I was correct. .Split is an Accessor. Accessor methods dont actually change the array. They will output something, but if you were to just console.log(cohort), it would still be = "Echo 2022". If it wasnt going straight into a concole log, you would have to save it as a varible ex: var imSoTired = cohort.split("").
// I got super lucky on guessing how it would split it up. The place you have the "'s when using .split will change the answer ex:
// if it had been console.log(cohort.split(" ")) the reuslt would have benn ["Echo", "2022"]


// // --------------------2) What will this log?

// const greeter = (name) => {
//   `Hello, ${name}!`
// }
// // console.log(greeter("LEARN Student"))

// // a) Your answer: This will log "undefined". Every function must have a return. 
// // b) Verify and explain: The parts of a function are
// 1 variable declaration
// Variable name
// Single equal sign
// Parentheses
// Arrow
// Curly Braces
// Return 
// without parts of this, it would not be a function. There is a thing called syntactical sugar that you could use, but the concept is still the same. A function is a recipe, but you have to have something that comes out at the end or else the recipe is pointless. The return is necessary.


// // --------------------3) What will this log?

// const multipliedByTwo = [4, 5, 6, 7, 8].map(number => number * 2)
// // console.log(multipliedByTwo)

// // a) Your answer: [8, 10, 12, 14, 16].  
// // b) Verify and explain: line 45 is declaring a variable named multipliedByTwo. multipliedByTwo = and array that is being mapped over with a function. .map is a higher order function that goes over each part of an array and does or check something to each item at an index.
// In this case it is mapping over the array and multiplying each number by 2 and returning a new array that is the same length.  

// // --------------------4) What will this log?

// const onlyOdds = [11, 12, 13, 14, 15].filter(number => number % 2 !== 0)
// // console.log(onlyOdds)

// // a) Your answer:[11, 13, 15]
// // b) Verify and explain: line 54 is declaring a variable name onlyOdds. onlyOdds = an array that is being filtered over with a function. .filter is a higher order function, alot like .map, but it goes over each part of an array and does or checks something to each item at an index, ,but it does not have to return an array of the same length. it will only return the things that were true with the condition set. 
// in this case the condition that was set was that whatever the number was if it was divisible by 2 and had a remainder of some kind, then that meant it was an odd number so it returned that number. Only 3 of the numbers were odd so it returned an array with 3 items.  


// // --------------------5) What will this log?

// const myCodingSkills = {
//   languages: ["JavaScript", "Ruby"],
//   frameworks: ["React", "Ruby on Rails"],
//   databases: "PostgreSQL",
//   versionControl: "GitHub"
// }
// // console.log(myCodingSkills.languages[0])

// // a) Your answer: JavaScript
// // b) Verify and explain: i was right. What we have here is an object. the object is myCoding Skills. Objects have keys and value pairs. keys and value are the 2 parts to an object. In this example, the keys are languages, frameworks, databases, and versionControl. they are all a datatype of symbol. the value of each of the keys is to the right of them.
//there are 2 values for languages. 2 for framweorks, 1 for databases, and 1 for VersionControl. The values for languages or organized in an array, so on line 70 the log is asking for whatever information is located at: the object of "myCodingSkills", with the key of "languages", inside of an array at the index of "0". all we do is find our way down the ladder and we end up at "JavaScript"


// // --------------------STRETCH: What will this log?

// class Learn {
//   constructor(name){
//     this.student = name,
//     this.cohort = "Echo",
//     this.year = 2022
//   }
// }
// const learnStudent = new Learn("George")
// // console.log(learnStudent)

// // a) Your answer: Learn { student: 'George', cohort: 'Echo', year: 2022 }
// // b) Verify and explain: i was correct. A class is a function, but it also has data in it in them. they are the cad drawing blue prints of an object. 
//  on line 86 an obect (learnStudent) was made. 
// LearnStudent:
// key:student  value: name : aka George
// key: cohort  value: "Echo"
// key: year value: 2022.
// online 87 we are logging what learnStudent is. learn student is in the class of "Learn" followed by {} containing the key value pairs 