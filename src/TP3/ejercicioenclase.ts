/*definir las clases necesarias para representar un sistema que administre un gimnasio, teniendo en cuenta los profesores, 
los  alumnos, las distintas disciplinas, horarios, las cuotas, los pagos del mes, 
no tomar en cuenta si hay promociones o descuento en las cuotas o aumentos*/

class Gym {
    nombre: string;
    alumnos: string[];
    profesores: string[];
    disciplinas: string[];
    horarios: string[];
    cuotaMes: number;
    pagos: Pago[];
    
    constructor(nombre: string, cuotaMes: number) {
      this.nombre = nombre;
      this.cuotaMes = cuotaMes;
      this.alumnos = [];
      this.profesores = [];
      this.disciplinas = [];
      this.horarios = [];
      this.pagos = [];
    }
    
    nuevoAlumno(alumno: string) {
      this.alumnos.push(alumno);
    }
    
    nuevoProfesor(profesor: string) {
      this.profesores.push(profesor);
    }
    
    nuevaDisciplina(disciplina: string) {
      this.disciplinas.push(disciplina);
    }
    
    cambiarHorario(horario: string) {
      this.horarios.push(horario);
    }
    
    pagoAlumno(alumno: string, mes: string) {
      const pago = new Pago(alumno, mes, this.cuotaMes);
      this.pagos.push(pago);
    }
    
    informacionGym() {
        console.log("Información del Gimnasio:");
        console.log("Nombre del gimnasio:", this.nombre);
        console.log("Alumnos:", this.alumnos.join(", "));
        console.log("Profesores:", this.profesores.join(", "));
        console.log("Disciplinas:", this.disciplinas.join(", "));
        console.log("Horarios:", this.horarios.join(", "));
        console.log("Cuota mensual:", this.cuotaMes);
        console.log("Pagos realizados:", this.pagos);
      }
      
  }
  
  class Pago {
    alumno: string;
    mes: string;
    cuota: number;
    
    constructor(alumno: string, mes: string, cuota: number) {
      this.alumno = alumno;
      this.mes = mes;
      this.cuota = cuota;
    }
  }
    
  const gym = new Gym("Full Gym", 5500);
  
  gym.nuevoAlumno("Cristian Leta");
  gym.nuevoProfesor("Fernando Flores");
  gym.nuevaDisciplina("Entrenamiento General");
  gym.cambiarHorario("Lunes y Miércoles 20 - 21 hs");
  
  gym.pagoAlumno("Cristian Leta", "Junio");
  
  gym.informacionGym();
     