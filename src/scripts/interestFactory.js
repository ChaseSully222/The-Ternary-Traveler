const createInterestList = (interest) => {

    return `
    <h2>${interest.name}</h4>
    <h4>${interest.placeId}</h4>
    <section>${interest.description}</section>
    <article>${interest.review}</article>
    <article>${interest.cost}</article>
    <button id="editJournalEntry--${interest.id}" class="editBtn">Edit</button>
    <button id="deleteJournalEntry--${interest.id}" class="deleteBtn">Delete</button>
    `;
};

export default createInterestList;