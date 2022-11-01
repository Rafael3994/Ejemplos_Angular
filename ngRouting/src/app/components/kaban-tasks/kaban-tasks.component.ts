import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

// Importamos el modelo de ITask
import { ITask, LEVELS } from '../../models/task.interfece';

@Component({
  selector: 'app-kaban-tasks',
  templateUrl: './kaban-tasks.component.html',
  styleUrls: ['./kaban-tasks.component.scss'],
})
export class KabanTasksComponent {
  todoTasks: ITask[] = [
    {
      title: 'Aprender animaciones',
      descripcion: 'Aprender animaciones en Angular',
      completed: false,
      level: LEVELS.INFO
    },
    {
      title: 'Build',
      descripcion: 'Aprender ha hacer Build en Angular',
      completed: false,
      level: LEVELS.BLOCKING
    },
    {
      title: 'Aprender a gestionar Angular CLI',
      descripcion: 'Aprender compandos y ha gestionar Angular CLI',
      completed: false,
      level: LEVELS.URGENTE
    },
  ];

  doneTasks: ITask[] = [
    {
      title: 'Configurar IDE',
      descripcion: 'Configurar e intalar plugins en VSC',
      completed: true,
      level: LEVELS.BLOCKING
    },
    {
      title: 'Instalar Angular CLI',
      descripcion: 'Instalar con NPM el Angular CLI de forma global',
      completed: true,
      level: LEVELS.BLOCKING
    },
    {
      title: 'Hola mundo',
      descripcion: 'Crear primera aplicacion',
      completed: true,
      level: LEVELS.URGENTE
    },
  ];

  drop(event: CdkDragDrop<ITask[]>): void {
    if (event.previousContainer === event.container) {
      console.log('Misma Columna:', event.container.data);


      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      // Actualizamos el valor completed
      event.previousContainer.data[event.previousIndex].completed = !event.previousContainer.data[event.previousIndex].completed

      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }
}
