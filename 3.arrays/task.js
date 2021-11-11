function compareArrays(arr1, arr2) {
  if(arr1.length !== arr2.length) {
    return false;
  }
  
  return arr1.every(
    (_, i) => arr1[i] === arr2[i]
  )
}

function advancedFilter(arr) {
  let resultArr;

  // Ваш код
  let positive = arr.filter((el) => el >= 0);
  let three = positive.filter((el) => el % 3 === 0);
  resultArr = three.map((el) => el * 10);

  return resultArr; // array
}
