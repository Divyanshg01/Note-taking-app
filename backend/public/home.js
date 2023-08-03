// const axios = require("axios");
const instanceEl = document.querySelector(".instance");
const noteEl = document.querySelector(".notes");

const showNotes = async () => {
  try {
    const {
      data: { notes },
    } = await axios.get("/notes");
    instanceEl.innerHTML = `<h1>api added</h1>`;
    console.log(notes);
    const allNotes = notes
      .map((note) => {
        const { _id: noteID, title, description } = note;
        return `
              <div class="note">
        <div class="note--content">
          <div class="note__title">${title}</div>
          <div class="note__description--background">
            <div class="note__description">
              ${description}
            </div>
          </div>
        </div>
        <div class="note--actions">
          <a class="view" href="edit.html?id=${noteID}">
            <i class="fa-solid fa-eye"></i>
          </a>
          <a class="delete" data-id = ${noteID}>
            <i class="fa-solid fa-trash"></i>
          </a>
        </div>
      </div>
            `;
      })
      .join(" ");
    noteEl.innerHTML = allNotes;
  } catch (error) {
    noteEl.innerHTML = "<h1>Error has occured</h1>";
  }
};
showNotes();


