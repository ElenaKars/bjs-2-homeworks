function solveEquation(a, b, c) {
  let arr = [];
  // код для задачи №1 писать здесь
  
  let d = b*b - 4*a*c;
  
if (d == 0) {
  arr.push(-b/(2 * a));
}
else if (d>0) {
  arr.push((-b + Math.sqrt(d) )/(2 * a)); 
  arr.push((-b - Math.sqrt(d) )/(2 * a));
}
return arr; // array
}
console.log(solveEquation(5,6,13));

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь
if (percent<=0) {
return `Параметр <Процентная ставка> содержит неправильное значение ${percent}`;
}
if (contribution<0){
  return `Параметр <Первоначальный взнос> содержит неправильное значение ${contribution}`;
}
if (amount<=0){
  return `Параметр <Сумма кредита> содержит неправильное значение ${amount}`;
}
let restAmount = (amount - contribution);

let date = new Date();
let date2 = new Date();
let month = date.getMonth();
let month2 = date2.getMonth();
let period = (date2 - date)*12 + ((month2 - month)+1);

let monthPercent = (1 / 12 * percent); 
let monthPayment = restAmount * (monthPercent + monthPercent / (((1 + monthPercent)^period) - 1));
let totalAmount = (contribution + monthPayment * period);
  return totalAmount;
}