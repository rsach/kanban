import { Component } from '@angular/core';
import { Task } from './task/task';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {TaskService} from "./tskSrv";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  taskForm:FormGroup;
  constructor(fb : FormBuilder, private tskSrv:TaskService){

    this.taskForm = fb.group({
      "name" : ["",Validators.required],
      "project":  ["",Validators.required],
      "set" :  ["",Validators.required],
      "type": ["",Validators.required]
    });

  }

  submitForm(){
    console.log(this.taskForm.value);
    const task =  new Task(this.taskForm.value.name,this.taskForm.value.project,this.taskForm.value.set,this.taskForm.value.type)
    this.tskSrv.storeData(task);


  }
}
