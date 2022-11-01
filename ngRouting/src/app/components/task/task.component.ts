import { Component, Input, OnInit } from '@angular/core';
import { ITask } from 'src/app/models/task.interfece';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  constructor() { }

  @Input() task: ITask | undefined;


  ngOnInit(): void {
  }

}
