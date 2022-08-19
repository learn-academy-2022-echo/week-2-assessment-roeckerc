# ASSESSMENT 2: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is the difference between a parameter and an argument?

Your answer: a parameter is like what we are acting on, and the arguement is what we are saying for that thing to do or check

Researched answer:

A Parameter is a "placeholder value". The information that goes there is not available at this time, but when it is needed, it will be supplied and you can put it right there in the parameter spot. it can also be referenced multiple times in the function. When that parameter is filled. it is filled with the argument. An argument is whatever filled up that "placeholder value" 
An Argument is contained in a set of (), which are a parameter. Its job is to be the value that is being referenced.  A function or method may not need and argument in which case, it could just be a set of empty () which is a parameter. Sometimes some functions will have multiple parameters, which will need multiple arguments to fills those spots. 

2. The JavaScript built in method .map() takes predefined parameters. What are they? Which are required and which are optional?

Your answer:The Javascript built in method .map() is a higher order function that filters through an array, and perfroms an action on each value at an index, and  returns an array of the same length. The predefined parameters that .map takes are as follows
"car port" is what is being mapped
("") returns each charater of the string in " includeing the space ex ["c", "a", "r", " ", "p", "o", "r", "t"]
(" ")returns " and space and , beteen index ex: ["car", "port"] 
(,) 


Researched answer: I was totally spot on with the first half of my answer and then for some reason my brain shut off and started to give the answer for .split()... The Javascript built in method .map() is a higher order function that filters through an array, and takes in a fu nction as a method, and  returns an array of the same length. The .map() HOF, (higher order function), can take up to 3 arguments but no matter what, has to contain a "value." Knowing this, .map() will always have an => after it and a return as well. .map can also take in up to 3 arguments, the other 2 may be index and array, but you dont have to use them. 
ex.
const trippDippLemonCripp = [13, 7, 6, 62]

const zappatos = (array) => {
  return array.map((value) => value * 3)
}
console.log(zappatos(trippDippLemonCripp))
returns [39, 21, 18, 186]

3. What is the difference between map and filter?

Your answer: filter is also an HOF like .map, but is a little different. .filter() returns a new array but it could be a different length. another difference is that .filter()'s job is to check for truthys, it must looking for a boolean value. It iterates through an array chekcing to see if any of the values at an index satisified the condition set. ex. 
const howDoesThisWork = [3, 8, 5, 10]

const evenSteven = (array) => {
  return array.filter((value) => value % 2 === 0)
}

console.log(evenSteven(howDoesThisWork))

it returns [8, 10]
Researched answer: I do think my answer was pretty spot on

4. What is the DOM?

Your answer:i have not idea. Mind immediately went to the Rhianna song S&M.

Researched answer:
Document Object Model: it is a layout of how a page is loaded. It is like a tree diagram and it makes each part of the page an object so that JS can change everything if it wants to. 

5. What is React? Why would you use it?

Your answer: React, created by Facebook, is a library program used to build web pages for different platforms and user interfaces. It is super cool. It makes it so that certain parts of the page can change and the whole page does not have to be reloaded.

Researched answer:
 React, created by Facebook, is a library program used to build web pages for different platforms and user interfaces. It is super cool. It can do a ton of stuff. It is designed to be a ton of little things that join together to make a big thing and make it function well. For instance you can set it up so it makes certain parts of the page  change, like clicking a like button and getting a thumbs up,  and the whole page does not have to be reloaded. React also makes it so the code writer does not have to rewrite code, but instead can just reference old code and have it act upon new information, kind of like assigning a var name to a function.

6. STRETCH: What is hoisting in JavaScript?

Your answer: no clue

Researched answer: the idea is that even if the var is not yet declared that it can be refernced prior in the code, unless you are using let or const. But i 100% do not understand this at all. i do not understand the "initialize" thing.

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. User stories: it is a way of explaining a functions or software or something in laymans terms and also very basic and concise and to the point. 

2. Spread operator: is ... and it is a reference operator, meaning if it was used as 
let arr1 = [1, 2, 3 ,4];
let arr2 = [...arr1];
any time anything happened to array 1 it would also happen to array 2. i used this a ton in excel when referencing other sheets. if i updated my inventory in the boats doc it showed when i was looking at the master inventory. 


3. React props:it is just like a function argument in js. it is a property in react.

4. Conditional rendering: its the same as a conditional in js, atleast the concept. kind of like if user is above 18 then allow them to look at these naughty photos, if not, send to cartoonnetwork.com

5. DOM events: I really did not think that would return the google search it did. Dom events are the way the page reacts to an event. ex  onclick, when someone mouses over somehting, when the field is changed...
