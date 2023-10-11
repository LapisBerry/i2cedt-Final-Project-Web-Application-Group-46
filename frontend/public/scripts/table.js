import { createVocabulary, deleteVocabulary, getVocabularys } from "./api.js";

/** @typedef {import("./config.js").Vocabulary} Vocabulary */
/** @typedef {import("./config.js").VocabularyPayload} VocabularyPayload */

/**
 * @param {Vocabulary[]} vocabularys
 */

export async function fetchAndDrawTable() {
  const vocabularys = await getVocabularys();
  drawTable(vocabularys);
}

function drawTable(vocabularys) {
  /** @type {HTMLTableSectionElement} */
  const tableBody = document.querySelector("tbody");

  // Clear all elements
  tableBody.innerHTML = "";
  {
    const row = tableBody.insertRow();
  const deletebutton = document.createElement("button");

  const vocabtoadd = document.createElement("input");
  vocabtoadd.id = "vocab-to-add";

  const meaningtoadd = document.createElement("input");
  meaningtoadd.id = "meaning-to-add";
  const addbutton = document.createElement("button");

  addbutton.addEventListener("click", () => handleCreateVocabulary());
  addbutton.innerText = "+";

  row.insertCell().appendChild(vocabtoadd);
  row.insertCell().appendChild(meaningtoadd);
  row.insertCell().appendChild(addbutton);
  }
  

  for (const vocabulary of vocabularys) {
    const row = tableBody.insertRow();
    const deletebutton = document.createElement("button");
    row.insertCell().innerText = vocabulary.vocabulary;
    row.insertCell().innerText = vocabulary.meaning;

    deletebutton.addEventListener("click", () => handleDelete(vocabulary._id));
    deletebutton.innerText = "-";

    row.insertCell().appendChild(deletebutton);
  }
}

/**
 * @param {string} id
 */
export async function handleDelete(id) {
  await deleteVocabulary(id);
  await fetchAndDrawTable();
}

export async function handleCreateVocabulary() {
  const vocabInput = document.getElementById("vocab-to-add");
  const meaningInput = document.getElementById("meaning-to-add");

  const payload = {
    vocabulary: vocabInput.value,
    meaning: meaningInput.value,
  };

  await createVocabulary(payload);
  await fetchAndDrawTable();

  vocabInput.value = "";
  meaningInput.value = "";
}
