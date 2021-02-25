import { Component, Output, OnInit, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { TodoItem } from '../../models';

@Component({
  selector: 'app-new-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class NewItemComponent implements OnInit {
  @Output() onAddNewitem = new EventEmitter<TodoItem>();

  itemForm: FormGroup;


  ngOnInit() {
    this.itemForm = new FormGroup({
      'title': new FormControl('', [Validators.required]),
      'description': new FormControl('', [Validators.required])
    })
  }

  onSubmit(): void {
    this.onAddNewitem.emit(new TodoItem(
      this.itemForm.get('title').value,
      this.itemForm.get('description').value
    ));
  }
}