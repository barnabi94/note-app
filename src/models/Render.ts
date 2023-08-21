import {
  DATE_CLASSES,
  DELETE_BUTTON_CLASSES,
  DELETE_BUTTON_ICON,
  DESCRIPTION_CLASSES,
  LIST_ITEM_CLASSES,
  TITLE_CLASSES,
} from "../utils/constants";
import { Note } from "./Note";
import { NoteList } from "./NoteList";

export class Render {
  noteListElement: HTMLUListElement = document.querySelector(
    "#noteList"
  ) as HTMLUListElement;

  noteList: NoteList;

  constructor(noteList: NoteList) {
    this.noteList = noteList;
  }

  renderList(notes: Note[]) {
    this.noteListElement.innerHTML = "";
    notes.forEach((note) => {
      const listItem = this.createListItem(note.color);
      const title = this.createTitle(note.title);
      const dueDate = this.createDueDate(note.dueDate);
      const description = this.createDescription(note.description);
      const createdAt = this.createCreatedAt(note.createdAt.toString());
      const deleteButton = this.createDeleteButton(note.id);
      listItem.append(title, dueDate, description, createdAt, deleteButton);
      this.noteListElement.append(listItem);
    });
  }

  private createListItem(color: string) {
    const listItem = document.createElement("li");
    listItem.className = `${LIST_ITEM_CLASSES} ${color}`;
    return listItem;
  }

  private createTitle(title: string) {
    const noteTitle = document.createElement("h5");
    noteTitle.className = TITLE_CLASSES;
    noteTitle.textContent = title;
    return noteTitle;
  }

  private createDescription(description: string) {
    const noteDescription = document.createElement("p");
    noteDescription.className = DESCRIPTION_CLASSES;
    noteDescription.textContent = description;
    return noteDescription;
  }

  private createDueDate(dueDate: string) {
    const noteDueDate = document.createElement("span");
    noteDueDate.className = DATE_CLASSES;
    noteDueDate.textContent = dueDate;
    return noteDueDate;
  }

  private createCreatedAt(createdAt: string) {
    const noteCreatedAt = document.createElement("span");
    noteCreatedAt.className = DATE_CLASSES;
    noteCreatedAt.textContent = `Created at ${createdAt}`;
    return noteCreatedAt;
  }

  private createDeleteButton(id: string) {
    const button = document.createElement("button");
    button.ariaLabel = "Delete note button";
    button.className = DELETE_BUTTON_CLASSES;
    button.innerHTML = DELETE_BUTTON_ICON;
    button.addEventListener("click", () => {
      this.noteList.delete(id);
      this.renderList(this.noteList.notes);
    });
    return button;
  }
}
