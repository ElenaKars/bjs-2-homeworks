// Задание 1
function getArrayParams(arr) {
  let result = {
    min: arr[0],
    max: arr[0],
    avg: arr[0]
  }
  
  // Ваш код
  for (let i=0; i < arr.length; i++) {
    if(arr[i] < result.min) {
      result.min = arr[i]
    }
    if(arr[i] > result.max) {
      result.max = arr[i]
    }
    if(i !== 0){
      result.avg += arr[i]
    }
  }
  result.avg /= arr.length; 
  result.avg = +result.avg.toFixed(2)
  return result;
};

// Задание 2
function worker(arr) {
  let sum = 0;

  // Ваш код
  for (let i = 0; i < arr.length; i++){
    sum += arr[i]
  }

  return sum;
}

function makeWork(arrOfArr, func) {
  let max = func(arrOfArr[0]);

  for (let i = 0; i < arrOfArr.length; i++) {
    const summ = func(arrOfArr[i]);

    if(summ > max) {
      max = summ
    }
  }

  return max;
}

//Задача №3
function worker2(arr) {
  let difference = {
    min: arr[0],
    max: arr[0],
  }

  for(let i = 0; i < arr.length; i++){
    if(arr[i] < difference.min) {
      difference.min = arr[i]
    }
    if(arr[i] > difference.max) {
      difference.max = arr[i]
    }
    result2 = (difference.max - difference.min);
  }
  if (result2 > 0){
  return result2;
}
}
