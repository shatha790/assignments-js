
/* 
If your country's population is greater than 33 million,
log a string like this to the console: "Portugal's population is 22 million below average"
(the 22 is the average of 33 minus the country's population).

After checking the result, change the population temporarily to 13 and then to 130. 
See the different results, and set the population back to original.
*/
let population=35.94;
let country="Saudi Arabia";
if(population >33){
  console.log(`${country} population is ${population} million above average`);
} else {
  console.log(
    `${country}'s population is ${33 - population} million
    below average`
  );
}
