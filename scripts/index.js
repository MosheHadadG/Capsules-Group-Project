import { getStudentes } from "./get_data-api.js";
import { searchBox, searchBoxEvent, selectBox, selectBoxEvent} from "./search.js"



searchBox.addEventListener('input', searchBoxEvent);
selectBox.addEventListener('change', selectBoxEvent);

getStudentes();