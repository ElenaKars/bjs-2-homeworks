class PrintEditionItem {
  constructor(name, releaseDate, pagesCount, state = 100, type = null) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this._state = state;
    this.type = type;
  }
  fix() {
    this.state= this._state *  1.5
  }

  set state(num){
    if(num < 0){
      this._state= 0;
      return;
    }
    
    if(num > 100){
      this._state = 100;
      return;
    }
    
    this._state = num
  }
  
  get state(){
    return this._state;
  }
}

class Magazine extends PrintEditionItem { 
  constructor(name, releaseDate, pagesCount, state) {
    super(name, releaseDate, pagesCount, state, "magazine");
 }
}

class Book extends PrintEditionItem { 
  constructor(author, name, releaseDate, pagesCount, state) {
    super(name, releaseDate, pagesCount, state, "book");
    this.author = author;
  }
}
class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount, state) {
    super(author, name, releaseDate, pagesCount, state);
    this.type = "novel";
  }
} 
class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount, state) {
    super(author, name, releaseDate, pagesCount, state);
    this.type = "fantastic";
  }
} 
class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount, state) {
    super(author, name, releaseDate, pagesCount, state);
    this.type = "detective";
  }
}


class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBook(book){
    if(book.state > 30) {
      this.books.push(book);
    }
  }

  findBookBy(type, value) {
    let result = this.books.find(function(book){
      return book[type] === value;
    })

    return result || null;
  }

  giveBookByName(bookName){
    const book = this.findBookBy('name', bookName);

    if(!book) {
      return null
    }

    let indOfBook = this.books.indexOf(book);
    this.books.splice(indOfBook, 1);

    return book
  }
}

class Student {
  constructor(name){
    this.name = name;
    this.marks = {};
  }

  setSubject(subjectName){
    this.subject[subjectName] = [];
  }

  addMark(mark, subjectName) {
    if (mark < 1 || mark > 5){
      console.log("Ошибка, оценка должна быть числом от 1 до 5")
      return
    }

    if(this.marks[subjectName]) {
      this.marks[subjectName].push(mark)
    } else {
      this.marks[subjectName] = [mark];
    }
  }
  
  addMarks(subjectName,...marks) {
    this.subject[subjectName] = [...this.subject[subjectName], ...marks]
  }

  getAverageBySubject(subjectName) {
    if(this.marks[subjectName] !== undefined) {
      let sum1 = this.marks[subjectName].reduce((sum,current) => sum + current)

      return sum1 / this.marks[subjectName].length;
    }
    
    console.log("Оценок нет");
  }

  getAverage() {
    let subjects = Object.keys(this.marks); 
    let sum1 = 0;
    
    for (let i = 0; i < subjects.length; i++) {
      let sub = subjects[i];

      sum1 += this.getAverageBySubject(sub)
    }

    return sum1 / subjects.length;
  };
  
  exclude(reason) {
    this.excluded = reason;
    delete this.subject;
    delete this.marks;
  }
}