import apiActions from "./apiData.js";
import renderInterests from "./interestListDom.js"


apiActions.getInterest().then(renderInterests);
