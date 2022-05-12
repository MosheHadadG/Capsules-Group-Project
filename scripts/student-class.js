// import { attributes } from "./constants/students.js";

import { generateSutendetAttributes } from "./constants/students.js";
const students = document.querySelector(".students");
const main = document.querySelector("main");
generateSutendetAttributes;
export class Student {
  constructor(id, gender, firstName, lastName, hobby, age, city, capsule, cityTemp) {
    this.id = id;
    this.gender = translateGender(gender);
    this.firstName = firstName;
    this.lastName = lastName;
    this.hobby = hobby;
    this.age = age;
    this.city = city;
    this.capsule = capsule;
    this.cityTemp = cityTemp;
    this.attributes = generateSutendetAttributes.call(this);
  }
}


Student.prototype.renderStudentToHtml = function () {

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

  const { lineAttr, lineFirstAttr, lineGenderAttr, lineIdAttr, lineLastAtr,
    lineHobbyAtr, lineAgeAtr, lineCityAtr, lineCapsuleAtr, lineEditAtr,
    lineEditBtnAtr, lineDeleteAtr, lineDeleteBtnAtr } = this.attributes;


  //! Create Elements
  const line = createNewCustomElement("div", lineAttr);
  const lineId = createNewCustomElement("div", lineIdAttr);
  const lineGender = createNewCustomElement("input", lineGenderAttr);
  const lineFirst = createNewCustomElement("input", lineFirstAttr);
  const linelast = createNewCustomElement("input", lineLastAtr);
  const lineHobby = createNewCustomElement("input", lineHobbyAtr);
  const lineAge = createNewCustomElement("input", lineAgeAtr);
  const lineCity = createNewCustomElement("input", lineCityAtr);
  const dataTemp = document.createElement('div');
  dataTemp.setAttribute('data-temp', `℃${this.cityTemp}`);
  dataTemp.appendChild(lineCity)
  const lineCapsule = createNewCustomElement("input", lineCapsuleAtr);
  const lineEdit = createNewCustomElement("div", lineCapsuleAtr);
  const lineEditBtn = createNewCustomElement("button", lineEditBtnAtr);
  const lineDelete = createNewCustomElement("div", lineDeleteAtr);
  const lineDeleteBtn = createNewCustomElement("button", lineDeleteBtnAtr);

 

  const withoutLeading0 = parseInt(this.id, 10);
  lineId.innerText = withoutLeading0;
  this.gender = translateGender(this.gender);
  lineEditBtn.innerText = "עריכה";
  lineEdit.appendChild(lineEditBtn);
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
    dataTemp,
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
  



