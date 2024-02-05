
// const scoreDolphins=(96+108+89)/3;
// const  scoreKoalas=( 88+91+110)/3;

// if(scoreDolphins > scoreKoalas){
//   console.log("Dolphins wins a trophy!")
// }
// else if(scoreDolphins < scoreKoalas){
//   console.log("Koalas wins a trophy!")
// } else if (scoreDolphins===scoreKoalas){
//     console.log("both wins a trophy!")
// }

//Bonus 1 and Bonus 2:

const scoreDolphins=(97+112+101)/3;
const  scoreKoalas=(109+95+123)/3;

if (scoreDolphins > scoreKoalas && scoreDolphins >=100) {
  console.log("Dolphins wins a trophy!");
} else if (scoreDolphins < scoreKoalas && scoreKoalas>=100) {
  console.log("Koalas wins a trophy!");
} else if (scoreDolphins===scoreKoalas && scoreDolphins >=100 && scoreKoalas>=100){
    console.log("both wins a trophy!")
}else{console.log("no one wins a trophy!");}
