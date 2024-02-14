/*
1- Recreate the challenge from the lecture Looping Arrays, Breaking and Continuing, 
but this time using a while loop (call the array percentages3).

*/

function percentageOfWorld1(population) {
   return (population / 7900) * 100;
};
const populations = [10, 1441, 332, 83];
percentages3=[]
let i=0;
while(i<populations.length){
  let perc= percentageOfWorld1(populations[i])
   percentages3.push(perc);
i++;
}
  console.log(percentages3);
