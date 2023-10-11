import { fetchAndDrawTable, handleCreateVocabulary } from "./table.js";

// Get references to the button and the element to toggle
const toggleButton = document.querySelector(".toggleButton");
const elementToToggle = document.getElementById("elementToToggle");

// Add a click event listener to the button
toggleButton.addEventListener("click", function () {
  // Check the current display style of the element
  const currentDisplayStyle = window.getComputedStyle(elementToToggle).display;

  // Toggle the visibility based on the current state
  if (currentDisplayStyle === "none" || currentDisplayStyle === "") {
    elementToToggle.style.display = "block"; // Show the element
  } else {
    elementToToggle.style.display = "none"; // Hide the element
  }
});

document.addEventListener("DOMContentLoaded", () => {
  fetchAndDrawTable();

  /** @type {HTMLButtonElement} */
  const addButton = document.getElementById("add-newrow");
  addButton.addEventListener("click", () => {
    const vocabInput = document.getElementById("vocab-to-add");
    const meaningInput = document.getElementById("meaning-to-add");
    const vocabValue = vocabInput.value;
    const meaningValue = meaningInput.value;
    if (vocabValue && meaningValue) {
      handleCreateVocabulary();
    }
  });
});
