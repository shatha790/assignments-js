 const marksWeights1=78;
 const johnWeights1= 92;

 const marksHeight1=1.69;
 const johnHeight1= 1.95;

const marksBMI=marksWeights1 / marksHeight1 ** 2;
const johnBMI=johnWeights1 / johnHeight1 ** 2; 


if (marksWeights1>johnWeights1){
  console.log(`Mark's
BMI ${marksWeights1} is higher than John's ${johnWeights1}`);
}else{
console.log(`John's ${johnWeights1} is higher than Mark's
BMI ${marksWeights1}`); 
}
