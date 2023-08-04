const querystring = window.location.search;
const ItitleEl = document.querySelector(".note-title-edit");
const IdescriptionEl = document.querySelector(".note-description-edit");
const formEl = document.querySelector("form");

const urlparams = new URLSearchParams(querystring);

const displayNote = async () => {
  if (!urlparams.has("id")) {
  } else {
    const id = urlparams.get("id");

    try {
      const {
        data: { notes },
      } = await axios.get(`notes/${id}`);
      const { title, description } = notes;
      ItitleEl.value = title;
      IdescriptionEl.value = description;
    } catch (error) {
      console.log(error);
    }
  }
};

displayNote();

const submit = document.querySelector(".submit-form");
submit.addEventListener("click", async (e) => {
  e.preventDefault();
  const title = ItitleEl.value;
  const description = IdescriptionEl.value;
  if (urlparams.has("id")) {
    const id = urlparams.get("id");
    const {
      data: { notes },
    } = await axios.patch(`/notes/${id}`, {
      title,
      description,
    });
    setTimeout(async () => {
      window.location.href = "/";
    }, 1000);
  } else {
    try {
      await axios.post(`/notes`, { title, description });
      setTimeout(async () => {
        window.location.href = "/";
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  }
});

// formEl.addEventListener("submit", async (e) => {
//   e.preventDefault();
//   const title = ItitleEl.value;
//   const description = IdescriptionEl.value;

//   try {
//     if (urlparams.has("id")) {
//       const id = urlparams.get("id");
//       const {
//         data: { notes },
//       } = await axios.patch(`notes/${id}`, {
//         title,
//         description,
//       });
//       window.location.href = await "/";

//     } else {
//       await axios.post("/notes", { title, description });
//       window.location.href = await "/";

//     }
//   } catch (error) {
//     console.log(error);
//   }
// });
