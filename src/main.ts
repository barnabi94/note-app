import { NoteList } from "./models/NoteList";
import { Render } from "./models/Render";
import "./style.css";

function main() {
  const noteForm = document.forms.namedItem("noteForm")!;
  const title = document.querySelector("#title") as HTMLInputElement;
  const description = document.querySelector(
    "#description"
  ) as HTMLTextAreaElement;
  const dueDate = document.querySelector("#dueDate") as HTMLInputElement;

  const searchForm = document.forms.namedItem("searchForm")!;
  const searchInput = document.querySelector("#search") as HTMLInputElement;

  const noteList = new NoteList();
  const render = new Render(noteList);

  noteForm.addEventListener("submit", (event) => {
    const selectedColor = document.querySelector(
      "input[name='color']:checked"
    ) as HTMLInputElement;

    event.preventDefault();
    noteList.create(
      title.value,
      description.value,
      dueDate.value,
      selectedColor.value
    );
    render.renderList(noteList.notes);
  });

  searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const searchResult = noteList.search(searchInput.value);
    render.renderList(searchResult);
  });

  const colorButton = document.querySelector(
    "#sort-color"
  ) as HTMLButtonElement;

  colorButton.addEventListener("click", (event) => {
    event.preventDefault();
    noteList.sortByColor();
    render.renderList(noteList.notes);
  });

  const abcButton = document.getElementById("sort-abc") as HTMLButtonElement;

  abcButton.addEventListener("click", (event) => {
    event.preventDefault();
    noteList.sortByTitle();
    render.renderList(noteList.notes);
  });

  const createdDateButton = document.getElementById(
    "sort-createdDate"
  ) as HTMLButtonElement;

  createdDateButton.addEventListener("click", (event) => {
    event.preventDefault();
    noteList.sortByCreatedDate();
    render.renderList(noteList.notes);
  });

  const deleteAllBtn = document.getElementById(
    "deleteAllBtn"
  ) as HTMLButtonElement;

  deleteAllBtn.addEventListener("click", (event) => {
    event.preventDefault();
  });
}

window.addEventListener("DOMContentLoaded", main);
