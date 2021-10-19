function solveEquation(a, b, c) {
  let arr = [];
  // код для задачи №1 писать здесь
  
  let D = b*b - 4*a*c;
  

  if (D < 0){
    return false;
    console.log("Решения уравнения нет")
  };

  
if (D == 0) {
  arr.push(-b/(2*a));
}
else if (D>0) {
  arr.push((-b + Math.sqrt(d) )/(2a)); 
  arr.push((-b - Math.sqrt(d) )/(2a));
}
return arr; // array
}
console.log(solveEquation(5,6,13));

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}
