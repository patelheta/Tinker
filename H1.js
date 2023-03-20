/**
 * 
 * So we have two inputs words and substr
 * 
 * replace ? with single char from substring
 * 
 * word = "??c???er"
 * 
 * so first of all I split the words
 * by each charaters
 * and store it into a list
 * 
 * and 
 * 
 *  Or I create a counter for substring
 * 
 * first of create a new counter for substring
 * 
 * substringcounter = 0;
 * 
 * for loop all words
 * 
 * for(let i = 0; i < words.length; i++){
 *    
 * }
 * 
 * Reject
 * 
 * 
 */
// store all charaters of the words
let words = "abc?e?gh?";
let substr = "dfi";

let count = 0;
let newString = "";
for (let char of words) {
  if (char === "?") {
    newString += substr[count];
    count++;
  }
  else {
    newString += char;
  }
}

console.log(newString);









// Reject and Resolve




























