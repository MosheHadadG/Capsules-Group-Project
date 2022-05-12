import { getStudentes } from "./get_data-api.js";
import {
  searchBox,
  searchBoxEvent,
  selectBox,
  selectBoxEvent,
} from "./search.js";
import { sort, sortBtns } from "./sort.js";
sortBtns.forEach((e) => {
  e.addEventListener("click", (Event) => {
    sort(e.classList[0]);
  });
});
searchBox.addEventListener("input", searchBoxEvent);
selectBox.addEventListener("change", selectBoxEvent);
getStudentes();
