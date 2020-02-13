import createInterestList from "./interestFactory.js";

const renderInterests = interest => {
  const interestContainer = document.querySelector("#interestList");

  interestContainer.textContent = "";

  interest.forEach(poiEntry => {
    const poiEntryHTML = createInterestList(poiEntry);
    interestContainer.innerHTML += poiEntryHTML;
  });
};

export default renderInterests;
