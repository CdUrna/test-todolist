export class TodoItem {
  title: string;
  description: string;
  isDone: boolean;

  constructor(title: string, description: string, isDone = false){
    this.title = title;
    this.description = description;
    this.isDone = isDone;
  }
}