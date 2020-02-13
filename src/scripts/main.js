import apiActions from "./apiData.js";
import renderInterests from "./interestListDom.js";

const clearForm = () => {
  const poiInput = document.getElementById("poiName");
  const descriptionInput = document.getElementById("poiDescription");
  const costInput = document.getElementById("poiCost");
  const locationInput = document.getElementById("poiLocation");

  (poiInput.value = ""),
    (descriptionInput.value = ""),
    (costInput.value = ""),
    (locationInput.value = "");
};

const saveButtonAddEventListener = () => {
  const saveButton = document.getElementById("saveBtn");

  saveButton.addEventListener("click", () => {
    const nameInput = document.getElementById("poiName");
    const descriptionInput = document.getElementById("poiDescription");
    const costInput = document.getElementById("poiCost");
    const locationInput = document.getElementById("poiLocation");
    const interestsDom = document.getElementById("interestList");

    if (nameInput.value === "") {
      alert("Please add a Point of Interest");
    } else if (descriptionInput.value === "") {
      alert("Please add a description");
    } else if (costInput.value === "") {
      alert("Please add a cost amount");
    } else if (locationInput.value === "") {
      alert("Please select a location");
    } else {
      const newPoiEntry = {
        name: nameInput.value,
        placeId: locationInput.value,
        description: descriptionInput.value,
        review: "Add a Review",
        cost: costInput.value
      };

      interestsDom.textContent = "";
      clearForm();
      apiActions.addNewInterest(newPoiEntry).then(() => {
        apiActions.getInterest().then(renderInterests);
      });
    }
  });
};

saveButtonAddEventListener();
apiActions.getInterest().then(renderInterests);
