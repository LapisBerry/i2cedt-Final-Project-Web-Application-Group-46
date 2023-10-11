import { BACKEND_URL } from "./config.js";

/** @typedef {import("./config.js").Vocabulary} Vocabulary */
/** @typedef {import("./config.js").VocabularyPayload} VocabularyPayload */

export async function getVocabularies() {
  /** @type {Vocabulary[]} */
  const vocabularies = await fetch(`${BACKEND_URL}/vocabularies`).then((r) => r.json());

  return vocabularies;
}

/**
 * @param {VocabularyPayload} vocabulary
 */
export async function createVocabulary(vocabulary) {
  await fetch(`${BACKEND_URL}/vocabularies`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(vocabulary),
  });
}

/**
 * @param {string} id
 * @param {VocabularyPayload} vocabulary
 */
export async function editVocabulary(id, vocabulary) {
  await fetch(`${BACKEND_URL}/vocabularies/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(vocabulary),
  });
}

export async function deleteVocabulary(id, vocabulary) {
  await fetch(`${BACKEND_URL}/vocabularies/${id}`, {
    method: "DELETE",
  });
}
