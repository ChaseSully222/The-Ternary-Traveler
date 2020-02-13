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

//Function that will scroll to the top of the page
const topFunction = () => {
  document.documentElement.scrollTop = 0;
};

//Updates our form fields with the input values of the edit feature
const updateFormFields = entryId => {
  const hiddenEntryId = document.getElementById("entryId");

  const nameInput = document.getElementById("poiName");
  const descriptionInput = document.getElementById("poiDescription");
  const costInput = document.getElementById("poiCost");
  const locationInput = document.getElementById("poiLocation");

  apiActions.editEntry(entryId).then(interest => {
    hiddenEntryId.value = interest.id;
    nameInput.value = interest.name;
    descriptionInput.value = interest.description;
    costInput.value = interest.cost;
    locationInput.value = interest.location;
  });
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
        review: "<em>Edit to add a review</em>",
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

const editDeleteEventListener = () => {
  const interestList = document.getElementById("interestList");

  interestList.addEventListener("click", event => {
    if (event.target.id.startsWith("deleteInterestEntry--")) {
      const deleteBtnId = event.target.id;
      const deleteBtnArray = deleteBtnId.split("--");
      const interestIdToDelete = deleteBtnArray[1];
      const deleteConfirm = confirm("Do you want to delete");

      if (deleteConfirm == true) {
        apiActions.deleteInterest(interestIdToDelete)
          .then(apiActions.getInterest)
          .then(renderInterests);
      }
    } else if (event.target.id.startsWith("editInterestEntry--")) {
      const interestIdToEdit = event.target.id.split("--")[1];
      topFunction();
      updateFormFields(interestIdToEdit);
    }
  });
};

editDeleteEventListener();
saveButtonAddEventListener();
apiActions.getInterest().then(renderInterests);
