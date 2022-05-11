// import { attributes } from "./constants/students.js";

import { generateSutendetAttributes } from "./constants/students.js";

const students = document.querySelector(".students");
const main = document.querySelector("main");
generateSutendetAttributes;
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
    this.attributes = generateSutendetAttributes.call(this);
  }
}

// const { lineAttr, lineFirstAttr, lineGenderAttr, lineIdAttr } = this.attributes;
// consolelog(lineAttr);

Student.prototype.renderStudentToHtml = function () {
  // console.log(this.firstName)
  // const studentName = document.createElement('h1');
  // studentName.innerText = this.firstName
  // students.appendChild(studentName);

  const createNewCustomElement = (name, attr) => {
    const el = document.createElement(name);
    if (attr.length > 1) {
      attr.forEach((keyValuePer) => {
        el.setAttribute(keyValuePer[0], keyValuePer[1]);
      });
    } else {
      el.setAttribute(attr[0][0], attr[0][1]);
    }

    return el;
  };

  const { lineAttr, lineFirstAttr, lineGenderAttr, lineIdAttr } =
    this.attributes;

  const line = createNewCustomElement("div", lineAttr);
  const lineId = createNewCustomElement("div", lineIdAttr);

  const withoutLeading0 = parseInt(this.id, 10);
  lineId.innerText = withoutLeading0;

  this.gender = translateGender(this.gender);
  const lineGender = createNewCustomElement("input", lineGenderAttr);

  const lineFirst = createNewCustomElement("input", lineFirstAttr);

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

  const lineElements = [
    lineId,
    lineGender,
    lineFirst,
    linelast,
    lineHobby,
    lineAge,
    lineCity,
    lineCapsule,
    lineEdit,
    lineDelete,
  ];

  line.append(...lineElements);

  //! apeends To students
  main.appendChild(line);
};

//* change word gender from engilsh to hebrew
const translateGender = (gender) => (gender === "male" ? "זכר" : "נקבה");
