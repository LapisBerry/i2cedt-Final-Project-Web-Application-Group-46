// Get references to the button and the element to toggle
const toggleButton = document.querySelector(".toggleButton");
const elementToToggle = document.querySelector("#elementToToggle");

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

// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Get references to the input fields and the table body
  const vocabInput = document.querySelector("#vocab-to-add");
  const meaningInput = document.querySelector("#meaning-to-add");
  const addButton = document.querySelector("#add-newrow");
  const tableBody = document.querySelector("tbody");

  // Add a click event listener to the addButton
  addButton.addEventListener("click", function () {
    // Get the values from the input fields
    const vocabValue = vocabInput.value;
    const meaningValue = meaningInput.value;

    // Check if both input fields are not empty
    if (vocabValue && meaningValue) {
      // Create a new table row
      const newRow = document.createElement("tr");

      // Create table data cells for vocab and meaning
      const vocabCell = document.createElement("td");
      vocabCell.textContent = vocabValue;

      const meaningCell = document.createElement("td");
      meaningCell.textContent = meaningValue;

      // Create a table data cell for the delete button
      const actionCell = document.createElement("td");
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "-";
      deleteButton.addEventListener("click", function () {
        // Remove the row when the delete button is clicked
        tableBody.removeChild(newRow);
      });

      // Append the cells and button to the row
      newRow.appendChild(vocabCell);
      newRow.appendChild(meaningCell);
      actionCell.appendChild(deleteButton);
      newRow.appendChild(actionCell);

      // Append the row to the table body
      tableBody.appendChild(newRow);

      // Clear the input fields
      vocabInput.value = "";
      meaningInput.value = "";
    }
  });
});
