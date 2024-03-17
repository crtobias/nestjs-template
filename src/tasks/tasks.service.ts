import { Injectable } from '@nestjs/common';
import { Task,TaskStatus } from './task.entity'; 
import { v4 } from "uuid"
@Injectable()
export class TasksService {

private tasks: Task[] = [{
    id:'1',
    title: "testing",
    description:'es para testetar controladores y rutas',
    status:TaskStatus.PENDING,
}]

    getTesting(){
        return this.tasks  //devolvemos hola pero podemos devolver get a una api o DB
    }

    getAllTask(){}


    createTask(title:string, description:string){
        const task = {
            id: v4(),
            title,
            description,
            status: TaskStatus.PENDING
        }

        this.tasks.push(task)

        return task;
    }






    updateTask(){}

    deleteTask(){}

}
