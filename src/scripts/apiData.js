const baseUrl = "http://localhost:8088";

export default {
  getInterest() {
    return fetch(`${baseUrl}/interests?_expand=place`)
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
  updateEntry(entry) {
    return fetch(`${baseUrl}/interests/${entry.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(entry)
    });
  },
  deleteInterest(entryId) {
    return fetch(`${baseUrl}/interests/${entryId}`, {
      method: "DELETE"
    });
  },
  editEntry(entryId) {
    return fetch(`${baseUrl}/interests/${entryId}`).then(response =>
      response.json()
    );
  }
};
