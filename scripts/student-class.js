const students = document.querySelector('.students');
export class Student {
  constructor(id, gender, firstName, lastName, hobby, age, city, capsule) {
      this.id = id;
      this.gender = gender;
      this.firstName = firstName;
      this.lastName = lastName;
      this.hobby = hobby;
      this.age = age;
      this.city = city;
      this.capsule = capsule;

  }
}

Student.prototype.renderStudentToHtml = function() {
  console.log(this.firstName)
  const studentName = document.createElement('h1');
  studentName.innerText = this.firstName
  students.appendChild(studentName);
  
}

