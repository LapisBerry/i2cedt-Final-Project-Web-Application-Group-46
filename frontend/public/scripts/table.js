import { createVocabulary, deleteVocabulary, getVocabularies } from "./api.js";

/** @typedef {import("./config.js").Vocabulary} Vocabulary */
/** @typedef {import("./config.js").VocabularyPayload} VocabularyPayload */

/**
 * @param {Vocabulary[]} vocabularies
 */

export async function fetchAndDrawTable() {
  const vocabularies = await getVocabularies();
  drawTable(vocabularies);
}

function drawTable(vocabularies) {
  /** @type {HTMLTableSectionElement} */
  const tableBody = document.getElementById("main-table-body");

  // Clear all elements
  tableBody.innerHTML = "";

  for (const vocabulary of vocabularies) {
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
