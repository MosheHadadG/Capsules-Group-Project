export const searchBox = document.querySelector("#searchBox");
export const selectBox = document.querySelector("#selectBox");

const states = {
  searchBoxStatus: "",
  selectBoxStatus: "everything",
};

export function searchBoxEvent(event) {
  const word = event.target.value;
  states.searchBoxStatus = word;
  if (word.length > 0) {
    FilterResults(states);
  } else {
    const lines = document.querySelectorAll(".line");
    [...lines].forEach((line) => {
      line.style.display = "grid";
    });
  }
}

export function selectBoxEvent(event) {
  const selectBoxOption = event.target.value;
  states.selectBoxStatus = selectBoxOption;
  FilterResults(states);
}

function FilterResults(states) {
  let searchBoxStatus = states.searchBoxStatus;
  let selectBoxStatus = states.selectBoxStatus;

  switch (selectBoxStatus) {
    case "everything":
      const allArr = document.querySelectorAll("main input");
      filterValues(allArr, searchBoxStatus);
      break;

    case "id":
      const idsArr = document.querySelectorAll(".line .id");
      filterIds(idsArr, searchBoxStatus);
      break;

    case "gender":
      const genderArr = document.querySelectorAll(".line .gender");
      filterValues(genderArr, searchBoxStatus);
      break;

    case "firstName":
      const firstNameArr = document.querySelectorAll(".line .first");
      filterValues(firstNameArr, searchBoxStatus);
      break;

    case "lastName":
      const lastNameArr = document.querySelectorAll(".line .last");
      filterValues(lastNameArr, searchBoxStatus);
      break;

    case "hobby":
      const hobbysArr = document.querySelectorAll(".line .hobby");
      filterValues(hobbysArr, searchBoxStatus);
      break;

    case "age":
      const agesArr = document.querySelectorAll(".line .age");
      filterValues(agesArr, searchBoxStatus);
      break;

    case "city":
      const cityArr = document.querySelectorAll(".line .city");
      filterValues(cityArr, searchBoxStatus);
      break;

    case "capsule":
      const capsuleArr = document.querySelectorAll(".line .capsule");
      filterValues(capsuleArr, searchBoxStatus);
      break;
  }
}

//! Filter functions
function filterIds(array, id) {
  array.forEach((element) => {
    element.parentElement.style.display = "none";
  });
  const filterValues = [...array].filter((element) => {
    const isFound = element.innerText.indexOf(id) == 0 ? true : false;
    return isFound;
  });

  filterValues.forEach((element) => {
    element.parentElement.style.display = "grid";
  });
}

function filterValues(array, word) {
  array.forEach((element) => {
    element.parentElement.style.display = "none";
  });
  const filterValues = [...array].filter((element) => {
    const isFound = element.placeholder.indexOf(word) == 0 ? true : false;
    return isFound;
  });

  filterValues.forEach((element) => {
    element.parentElement.style.display = "grid";
  });
}
