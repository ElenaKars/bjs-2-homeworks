//  function solveEquation(a, b, c) {
//    let arr = [];
// //     // код для задачи №1 писать здесь
  
//    let d = b*b - 4*a*c;
  
//  if (d == 0) {
//    arr.push(-b/(2 * a));
//  }
//  else if (d>0) {
//    arr.push((-b + Math.sqrt(d) )/(2 * a)); 
//    arr.push((-b - Math.sqrt(d) )/(2 * a));
//  }
//  return arr; // array
//   }
// console.log(solveEquation(5,6,13));

//задача №1  
function solveEquation(a, b, c) {
  const discriminant = b * b - 4 * a * c;
  
  const result = [];
  
  if (discriminant < 0){
    return result;
  }
  
  if(discriminant === 0){
    result.push(-b / 2 * a);
  }
  
  if (discriminant > 0){
    result.push((-b + Math.sqrt(discriminant) )/ (2 * a));
    result.push((-b - Math.sqrt(discriminant) )/ (2 * a));
  }

  return result
}

  

//задача №2 

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  let checkedPercent = parseInt(percent, 10);
  let checkedContribution = parseInt(contribution, 10);
  let checkedAmount = parseInt(amount, 10);

  if (checkedPercent <= 0 || Number.isNaN(checkedPercent)) {
    return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
  }
  if (checkedContribution < 0 || Number.isNaN(checkedContribution)){
    return `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
  }
  if (checkedAmount <= 0 || Number.isNaN(checkedAmount)){
    return `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
  }

  let s = checkedAmount - checkedContribution;
  
  let n = date.getMonth() - new Date().getMonth() + (12 * (date.getFullYear() - new Date().getFullYear()))
  
  let p = checkedPercent / 100 / 12; 
  
  let monthPayment = s * (p + p / (Math.pow((1 + p), n) - 1));
  
  totalAmount = monthPayment * n;
  
  console.log(totalAmount.toFixed(2))
  
  return +totalAmount.toFixed(2);
    
  }

