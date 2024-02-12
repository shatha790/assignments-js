function calcAverage( num1,num2,num3){
 return (num1+ num2 +num3)/3
}
const scoreDolphins=calcAverage(44,23,71);
const scoreKoalas=calcAverage(65,54,49);
console.log("scoreDolphins " + scoreDolphins)
console.log("scoreKoalas " + scoreKoalas)

function checkWinner(avgDolhins,avgKoalas){
  if(avgDolhins >=2*avgKoalas ){
    return console.log(`Dolhins win (${avgDolhins} vs. ${avgKoalas})`)
  }else if(avgKoalas >=2*avgDolhins ){ 
     return console.log(`Koalas win (${avgDolhins} vs. ${avgKoalas})`)
  }else
    console.log("no one wins...")
}
checkWinner(scoreDolphins,scoreKoalas);
