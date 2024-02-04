 const marksWeights1=78;
 const johnWeights1= 92;

 const marksHeight1=1.69;
 const johnHeight1= 1.95;

 const marksWeights2=95;
 const johnWeights2=85;

 const marksHeight2=1.88;
 const johnHeight2=1.76;

const marksBMI=marksWeights1 / marksHeight1 ** 2;
const johnBMI=johnWeights1 / johnHeight1 ** 2; 

const markHigherBMI= marksWeights1>johnWeights1;

console.log(marksBMI,johnBMI);
console.log(markHigherBMI);
