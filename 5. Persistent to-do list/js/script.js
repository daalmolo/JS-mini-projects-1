"use strict";

let noteEntries = [];

const entriesDiv = document.getElementsByClassName("entries")[0];
const inputEntry = document.getElementsByClassName("entries__input")[0];
const storageKey = "notes";

function renderEntries() {
  entriesDiv.innerHTML = null;

  for (const [indx, note] of Object.entries(noteEntries)) {
    const entryContainter = document.createElement("div");
    entryContainter.style.marginBottom = "20px";

    const entry = document.createElement("p");
    entry.innerHTML = note;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";

    deleteButton.onclick = () => removeEntries(indx);

    entryContainter.appendChild(entry);
    entryContainter.appendChild(deleteButton);

    entriesDiv.appendChild(entryContainter);
  }
}

renderEntries();

function loadEntries() {
  const JSONstoredNotes = localStorage.getItem(storageKey);

  if (JSONstoredNotes) noteEntries = JSON.parse(JSONstoredNotes);
  renderEntries();
}

function saveEntries() {
  const JSONstringSave = JSON.stringify(noteEntries);

  localStorage.setItem(storageKey, JSONstringSave);
}

function addEntries() {
  if (!inputEntry.value) {
    exit;
  }

  noteEntries.push(inputEntry.value);
  renderEntries();

  inputEntry.value = "";

  saveEntries();
}

function removeEntries(entryIndex) {
  noteEntries.splice(entryIndex, 1);

  saveEntries();

  renderEntries();
}

document.addEventListener("DOMContentLoaded", loadEntries);
