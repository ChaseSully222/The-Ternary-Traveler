const baseUrl = "http://localhost:8088";

export default {
  getInterest() {
    return fetch(`${baseUrl}/interests`)
    .then(resp => resp.json());
  },
  addNewInterest(newPoiEntry) {
    return fetch(`${baseUrl}/interests`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPoiEntry)
    });
  },
};
