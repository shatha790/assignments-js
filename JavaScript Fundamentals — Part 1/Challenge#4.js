const  bill = 275;
const tips= bill >= 50 && bill <= 300 ? 0.15 * bill : 0.2 * bill;  
console.log(`The bill was ${bill}, the tip was ${tips} , and the total value ${tips+bill}`)
