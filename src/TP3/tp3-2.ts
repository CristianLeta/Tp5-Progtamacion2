import { Console } from "console";

class ListaTareas {

    tareas: {Id: number; Nombre: string; Estado: string }  [] = [];

    constructor() {
        this.tareas = [
            {Id: 1, Nombre: "pagar los servicios", Estado: "completada"},
            {Id: 2, Nombre: "estudiar Programacion", Estado: "completada"},
            {Id: 3, Nombre: "Bañar el perro", Estado: "completada"}];
    }


    public agregarTarea(Nombre: string): void {
        const nuevaTarea = {
            Id: this.tareas.length + 1,
            Nombre: Nombre,
            Estado: "completada"
        };
        this.tareas.push(nuevaTarea);
    }

    public mostrarTareas(): void {
        for (let i = 0; i < this.tareas.length; i++) {
            console.log(this.tareas[i]);
        }
    }

    

}

const listaTareas = new ListaTareas();

listaTareas.agregarTarea("Cortar el pasto");



listaTareas.mostrarTareas();
 





