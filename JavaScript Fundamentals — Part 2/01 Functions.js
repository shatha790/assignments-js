/* 
1- Write a function called describeCountry which takes three parameters: country, population and capitalCity. 
Based on this input, the function returns a string with this format: 'Finland has 6 million people and its capital city is Helsinki'.

2- Call this function 3 times, with input data for 3 different countries. 
Store the returned values in 3 different variables, and log them to the console.

*/

function describeCountry(country,population,capitalCity){
  
  return`${country} has ${population} million people and its capital city is ${capitalCity}`
}
const descSaudi = describeCountry('Saudi Arabia', 34.95, 'Riyadh');
const descGermany = describeCountry('Germany', 83, 'Berlin');
const descFinland = describeCountry('Finland', 6, 'Helsinki');

console.log(descSaudi, descGermany, descFinland);
