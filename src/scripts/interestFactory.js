const createInterestList = interest => {

    return `
    <h1>${interest.name}</h1>
    <section>${interest.description}</section>
    <article>${interest.review}</article>
    <article>${interest.cost}</article>
    <button id="editJournalEntry--${interest.id}" class="editBtn">Edit</button>
    <button id="deleteJournalEntry--${interest.id}" class="deleteBtn">Delete</button>
    `;
};

export default createInterestList;