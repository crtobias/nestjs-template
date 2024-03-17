import { Body, Controller,Get, Post } from '@nestjs/common';
import {TasksService} from "./tasks.service" //importo controladores

@Controller('test')//ruta
export class TasksController {

    constructor(private tasksService: TasksService){} //llamamos controladores

    @Get()//get post etc etc
    getTestingRoute(){
        return this.tasksService.getTesting()//funcion controlador aca podria llamar a una api o otra cosa
    }

    @Post()
    createTask(@Body() newTask: any){
        console.log(newTask);
        return"guardando tarea"
        // this.tasksService.createTask
    }
}





