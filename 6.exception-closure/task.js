function parseCount (count) {
    const res = Number.parseInt(count, 10);
    if (Number.isNaN(res)){
      const parseError = new Error("Невалидное значение");
      throw parseError;
    }

    return res;
  }

  const validateCount = (count) => {
    let result;
    try {
      result = parseCount(count);
      return result;
    } catch (error) {
      return error;
    }
  }

//   //задача №2

class Triangle {
  constructor(a, b, c){
    this.a = a;
    this.b = b;
    this.c = c;
  
    if(((a + b) < c) || ((b + c) < a) || ((a + c) < b)){
      throw new Error("Треугольник с такими сторонами не существует");
    }
  }
    getPerimeter() {
      let res;
      return res = this.a + this.b + this.c;
    }
  
    getArea() {
    let halfPer = (this.a + this.b + this.c) * 0.5;
    return +Number(Math.sqrt(halfPer * (halfPer - this.a) * (halfPer - this.b) * (halfPer - this.c))).toFixed(3);
    }
  }
  function getTriangle(a, b ,c) {
    let triangle;
    
    try {
      triangle = new Triangle(a, b, c) 
    } catch {
      const err = "Ошибка! Треугольник не существует";
      return {
        getArea: () => err,
        getPerimeter: () => err
      }
    }
  
    return triangle;
  }
  

  