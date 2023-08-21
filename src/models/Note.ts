import { v4 as uuidv4 } from 'uuid';

export class Note {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  color: string;
  createdAt: Date;

  constructor(
    title: string,
    description: string,
    dueDate: string,
    color: string
  ) {
    this.id = uuidv4();
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.color = color;
    this.createdAt = new Date();
  }
}

export class Note2 {
  // שדות קיימים..
  color: string;

  constructor(
    title: string,
    desc: string,
    dueDate: string,
    color: string) {
    // ...
    this.color = color; 
  }
}
