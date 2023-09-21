import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import ToDoListData from 'src/app/_common/data/to-do-list.data';

import { ToDoList } from 'src/app/_models/to-do-list-model';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css'],
})
export class ToDoListComponent implements OnInit {
  _toDoListModel: ToDoList = new ToDoList();

  _toDoList: any = [];

  _validateField: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this._toDoList = ToDoListData;
  }

  validateForm() {
    this._validateField = false;

    if (!this._toDoListModel.title) {
      this._validateField = true;

      return false;
    }

    return true;
  }

  newToDoItem() {
    if (this.validateForm()) {
      const newId = Math.max(...this._toDoList.map((n: any) => n.id)) + 1;

      this._toDoListModel.id = newId;

      this._toDoList.unshift(this._toDoListModel);

      this._toDoListModel = new ToDoList();
    }
  }

  updateToDoItem(id: number) {
    let index = this._toDoList.findIndex((x: any) => x.id === id);

    this._toDoList[index].completed = true;
  }

  deleteToDoItem(id: number) {
    let index = this._toDoList.findIndex((x: any) => x.id === id);

    this._toDoList.splice(index, 1);
  }
}
