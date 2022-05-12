import { Student } from "./student-class.js";

export async function getStudentes() {
  const studentsUrl = "https://capsules-asb6.herokuapp.com/api/teacher/toam";
  const response = await fetch(studentsUrl);
  const students = await response.json();
  const studentIDs = students.map((student) => {
    // console.log(student.id)
    return student.id;
  });
  studentIDs.forEach((studentId) => {
    getStudentCreateStudent(studentId);
  });
  // new student
}

async function getStudentCreateStudent(studentId) {
  const studenUrl = `https://capsules-asb6.herokuapp.com/api/user/${studentId}`;
  const responseStudent = await fetch(studenUrl);
  const student = await responseStudent.json();

  // console.log(student)
  const newStudent = new Student(
    student.id,
    student.gender,
    student.firstName,
    student.lastName,
    student.hobby,
    student.age,
    student.city,
    student.capsule
  );
  newStudent.renderStudentToHtml();
  // console.log(newStudent)
}
