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
  };
  return attributes;
}
