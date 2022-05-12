import { Student } from './student-class.js'
import { convertHebrewToEnglish } from './cities.js';

export async function getStudentes() {
  const studentsUrl = 'https://capsules-asb6.herokuapp.com/api/teacher/toam'
  const response = await fetch(studentsUrl);
  const students = await response.json();
  const studentIDs = students.map((student) => {
    return student.id;
  })
  studentIDs.forEach((studentId) => {
    getStudentCreateStudent(studentId);
  })

}


async function getStudentCreateStudent(studentId) {
  const studenUrl = `https://capsules-asb6.herokuapp.com/api/user/${studentId}`;
  const responseStudent = await fetch(studenUrl);
  const student = await responseStudent.json();
  const city = convertHebrewToEnglish(student.city);
  const cityTemp = await getWeather(city);
  const newStudent = new Student(student.id, student.gender, student.firstName,
    student.lastName, student.hobby, student.age, student.city, student.capsule, cityTemp)
  newStudent.renderStudentToHtml();
  console.log(newStudent)
}

async function getWeather(city) {
  const weatherApi = `https://api.weatherapi.com/v1/current.json?key=b0a1661122344f219f1222545221105&q=${city}&aqi=no`
  const responseWeather = await fetch(weatherApi);
  const weather = await responseWeather.json();
  const temp = weather.current.temp_c
  return temp;
}
