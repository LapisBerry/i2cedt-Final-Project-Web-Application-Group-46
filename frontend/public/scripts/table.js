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
  const tableBody = document.getElementById("main-t-body");

  // Clear all elements
  tableBody.innerHTML = "";

  for (const item of items) {
    const row = tableBody.insertRow();
    row.insertCell().innerText = item.vocabulary;
    row.insertCell().innerText = item.meaning;

    const button = document.createElement("button");
    button.addEventListener("click", () => handleDelete(item._id));
    button.innerText = "-";

    row.insertCell().appendChild(button);
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
