export const sortBtns = document.querySelectorAll("#first-line div");

export function sort(className) {
  switch (dir) {
    case "straight":
      sortDirection(dir, className);
      dir = "reversed";
      break;
    case "reversed":
      sortDirection(dir, className);
      dir = "straight";
      break;
  }
}
function sortDirection(dir, className) {
  const main = document.querySelector("main");
  const lines = document.querySelectorAll("main .line");
  const lastArr = document.querySelectorAll(`.line .${className}`);
  let sortedElemArr = [];
  let sortedLineArr = [];
  let elemArr = [];
  let lineArr = [];
  lastArr.forEach((e) => sortedElemArr.push(e.placeholder));
  lastArr.forEach((e) => elemArr.push(e.placeholder));
  lastArr.forEach((e) => lineArr.push(e.parentElement));
  sortedElemArr.sort();

  for (let i = 0; i < elemArr.length; i++) {
    for (let j = 0; j < elemArr.length; j++) {
      if (
        sortedElemArr[i] === elemArr[j] &&
        !sortedLineArr.includes(lineArr[j])
      ) {
        sortedLineArr.push(lineArr[j]);
      }
    }
  }
  lines.forEach((line) => line.remove());
  console.log(dir);
  if (dir === "reversed") {
    let rev = sortedLineArr.reverse();
  }
  main.append(...sortedLineArr);
}

let dir = "straight";
