const baseUrl = "http://localhost:8088";

export default {
  getInterest() {
    return fetch(`${baseUrl}/interests`)
    .then(resp => resp.json());
  }
};
