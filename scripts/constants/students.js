export function generateSutendetAttributes() {
  const attributes = {
    lineAttr: [
      ["class", "line"],
      ["id", this.id],
    ],

    lineIdAttr: [["class", "id"]],

    lineGenderAttr: [
      ["class", "gender"],
      ["name", "gender"],
      ["placeholder", this.gender],
      ["disabled", ""],
    ],

    lineFirstAttr: [
      ["class", "first"],
      ["placeholder", this.firstName],
      ["disabled", ""],
    ],

    lineLastAtr: [
      ["class", "last"],
      ["placeholder", this.lastName],
      ["disabled", ""],
    ],

    lineHobbyAtr: [
      ["class", "hobby"],
      ["placeholder", this.hobby],
      ["disabled", ""],
    ],

    lineAgeAtr: [
      ["class", "age"],
      ["placeholder", this.age],
      ["disabled", ""],
    ],

    lineCityAtr: [
      ["class", "city"],
      ["placeholder", this.city],
      ["disabled", ""],
    ],

    lineCapsuleAtr: [
      ["class", "capsule"],
      ["placeholder", this.capsule],
      ["disabled", ""],
    ],

    lineEditAtr: [["class", "edit"]],

    lineEditBtnAtr: [["class", "editBtn"]],

    lineDeleteAtr: [["class", "delete"]],

    lineDeleteBtnAtr: [["class", "deleteBtn"]],
  };
  return attributes;
}
