const students = document.querySelector(".students");
const main = document.querySelector("main");

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

Student.prototype.renderStudentToHtml = function () {
  // console.log(this.firstName)
  // const studentName = document.createElement('h1');
  // studentName.innerText = this.firstName
  // students.appendChild(studentName);

  //* line
  const line = document.createElement("div");
  line.classList.add("line");
  line.setAttribute("id", this.id);

  //* line id
  const lineId = document.createElement("div");
  lineId.classList.add("id");
  lineId.innerText = this.id;

  //* line gender
  this.gender = translateGender(this.gender);
  const lineGender = document.createElement("input");
  lineGender.classList.add("gender");
  lineGender.placeholder = this.gender;
  lineGender.setAttribute("disabled", "disabled");

  //* line first name
  const lineFirst = document.createElement("input");
  lineFirst.classList.add("first");
  lineFirst.placeholder = this.firstName;
  lineFirst.setAttribute("disabled", "disabled");

  //* line Last name
  const linelast = document.createElement(`input`);
  linelast.classList.add("last");
  linelast.placeholder = this.lastName;
  linelast.setAttribute("disabled", "disabled");

  //* line hobby
  const lineHobby = document.createElement(`input`);
  lineHobby.classList.add("hobby");
  lineHobby.placeholder = this.hobby;
  lineHobby.setAttribute("disabled", "disabled");

  // //* line age
  const lineAge = document.createElement("input");
  lineAge.classList.add("age");
  lineAge.placeholder = this.age;
  lineAge.setAttribute("disabled", "disabled");

  //* line city
  const lineCity = document.createElement("input");
  lineCity.classList.add("city");
  lineCity.placeholder = this.city;
  lineCity.setAttribute("disabled", "disabled");

  //* line capsule
  const lineCapsule = document.createElement("input");
  lineCapsule.classList.add("capsule");
  lineCapsule.placeholder = this.capsule;
  lineCapsule.setAttribute("disabled", "disabled");

  //* line edit
  const lineEdit = document.createElement("div");
  lineEdit.classList.add("edit");

  //*  line Button edit
  const lineEditBtn = document.createElement("button");
  lineEditBtn.classList.add("editBtn");
  lineEditBtn.innerText = "עריכה";
  lineEdit.appendChild(lineEditBtn);

  //*line Delete
  const lineDelete = document.createElement("div");
  lineDelete.classList.add("delete");

  //* line button Delete
  const lineDeleteBtn = document.createElement("button");
  lineDeleteBtn.classList.add("deleteBtn");
  lineDeleteBtn.innerText = "מחיקה";
  lineDelete.appendChild(lineDeleteBtn);

  let isEditing = "editing";
  lineEditBtn.addEventListener("click", function pressEditButton() {
    let inputs = line.querySelectorAll("input");
    switch (isEditing) {
      case "editing":
        inputs.forEach((input) => {
          input.removeAttribute("disabled");
        });
        isEditing = "approving";
        line.classList.add("editline");
        lineEditBtn.classList = "approv";
        lineEditBtn.innerText = "אישור";
        lineDeleteBtn.classList = "cancel";
        lineDeleteBtn.innerText = "ביטול";

        break;
      case "approving":
        inputs.forEach((input) => {
          if (input.value !== "") {
            input.placeholder = input.value;
            input.value = "";
          }

          input.setAttribute("disabled", "disabled");
          isEditing = "editing";
        });
        line.classList.remove("editline");
        lineEditBtn.classList = "editBtn";
        lineEditBtn.innerText = "עריכה";
        lineDeleteBtn.classList = "deleteBtn";
        lineDeleteBtn.innerText = "מחיקה";

        break;
    }
  });
  lineDeleteBtn.addEventListener("click", function pressDeleteButton() {
    let inputs = line.querySelectorAll("input");
    switch (isEditing) {
      case "editing":
        line.remove();
        break;

      case "approving":
        console.log("asdglhj");
        inputs.forEach((input) => {
          input.value = "";
          input.setAttribute("disabled", "disabled");
        });
        isEditing = "editing";
        line.classList.remove("editline");
        lineEditBtn.classList = "editBtn";
        lineEditBtn.innerText = "עריכה";
        lineDeleteBtn.classList = "deleteBtn";
        lineDeleteBtn.innerText = "מחיקה";
        break;
    }
  });
  //! appends to line
  line.appendChild(lineId);
  line.appendChild(lineGender);
  line.appendChild(lineFirst);
  line.appendChild(linelast);
  line.appendChild(lineHobby);
  line.appendChild(lineAge);
  line.appendChild(lineCity);
  line.appendChild(lineCapsule);
  line.appendChild(lineEdit);
  line.appendChild(lineDelete);

  //! apeends To students
  main.appendChild(line);
};

//* change word gender from engilsh to hebrew
const translateGender = (gender) => (gender === "male" ? "זכר" : "נקבה");
