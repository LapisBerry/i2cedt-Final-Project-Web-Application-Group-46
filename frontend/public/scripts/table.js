import { createItem, deleteItem, getItems } from "./api.js";

/** @typedef {import("./config.js").Item} Item */
/** @typedef {import("./config.js").ItemPayload} ItemPayload */

/**
 * @param {Item[]} items
 */

export async function fetchAndDrawTable() {
  const items = await getItems();
  drawTable(items);
}

function drawTable(items) {
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

  addbutton.addEventListener("click", () => handleCreateItem());
  addbutton.innerText = "+";

  row.insertCell().appendChild(vocabtoadd);
  row.insertCell().appendChild(meaningtoadd);
  row.insertCell().appendChild(addbutton);
  }
  

  for (const item of items) {
    const row = tableBody.insertRow();
    const deletebutton = document.createElement("button");
    row.insertCell().innerText = item.vocabulary;
    row.insertCell().innerText = item.meaning;

    deletebutton.addEventListener("click", () => handleDelete(item._id));
    deletebutton.innerText = "-";

    row.insertCell().appendChild(deletebutton);
  }
}

/**
 * @param {string} id
 */
export async function handleDelete(id) {
  await deleteItem(id);
  await fetchAndDrawTable();
}

export async function handleCreateItem() {
  const vocabInput = document.getElementById("vocab-to-add");
  const meaningInput = document.getElementById("meaning-to-add");

  const payload = {
    vocabulary: vocabInput.value,
    meaning: meaningInput.value,
  };

  await createItem(payload);
  await fetchAndDrawTable();

  vocabInput.value = "";
  meaningInput.value = "";
}
