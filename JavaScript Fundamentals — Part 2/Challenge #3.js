const mark={
  fullName:'mark Miller',
  mass: 78,
  height:1.69,
  calcBMI: function() {
  this.bmi =this.mass/this.height ** 2;
    return this.bmi;
  }
  
}
const john={
  fullName:'John Smith',
  mass: 92,
  height:1.95,
  calcBMI:function(){
 this.bmi=this.mass / this.height ** 2;
    return this.bmi;
  }
  
}
mark.calcBMI();
john.calcBMI();
console.log(mark.bmi);
console.log(john.bmi);
if (mark.bmi>john.bmi){
  console.log(`${mark.fullName}
BMI ${mark.bmi} is higher than John's ${john.bmi} BMI`);
}else{
console.log(`${john.fullName} BMI ${john.bmi} is higher than Mark's BMI ${mark.bmi}`); 
}
