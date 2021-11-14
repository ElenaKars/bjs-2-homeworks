function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {
  if(this.marks === undefined){ 
    this.marks = [mark]; 
  } else {
    this.marks.push(mark)
  }
}

Student.prototype.addMarks = function (...marks) {
  marks.forEach(
    (el) => {
      this.addMark(el)
    }
  )
}

Student.prototype.getAverage = function() {
  if (this.marks !== undefined) {
    
    let sum = this.marks.reduce((sum,current) => sum + current)

    return sum / this.marks.length;
  }
};

Student.prototype.exclude = function(reason) {
      this.excluded = reason;
      delete this.subject;
      delete this.marks;
    }

const newStudent = new Student("Ivan", "male", 34);

newStudent.setSubject('History')
newStudent.addMarks(3, 3, 3)
console.log(newStudent);
