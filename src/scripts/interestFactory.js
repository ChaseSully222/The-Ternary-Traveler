const createInterestList = (interest) => {

    return `
    <h2>${interest.place.name}</h2>
    <h3>${interest.name}</h3>
    <section>${interest.description}</section><br>
    <article>${interest.review}</article>
    <article><b>${interest.cost}</b></article>
    <button id="editInterestEntry--${interest.id}" class="editBtn">Edit</button>
    <button id="deleteInterestEntry--${interest.id}" class="deleteBtn">Delete</button>
    `;
};

export default createInterestList;