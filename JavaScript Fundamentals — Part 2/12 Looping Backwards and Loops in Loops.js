/*
Store this array of arrays into a variable called listOfNeighbours:

[['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];
Log only the neighbouring countries to the console, one by one, not the entire arrays.
Log a string like 'Neighbour: Canada' for each country.
*/


const listOfNeighbours=[['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']]
for(let i=0 ;i<listOfNeighbours.length; i++){
 for(let y=0;y<listOfNeighbours[i].length; y++) {
console.log(`Neighbour:${listOfNeighbours[i][y]}`)
 }                   
   }
