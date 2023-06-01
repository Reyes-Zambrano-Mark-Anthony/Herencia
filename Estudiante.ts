import { Persona } from '../ejercicioherencia3A/Persona';
export class Estudiante extends Persona{
    curso:number;

    constructor(curso=0){
        super()
        this.curso=curso;
    }
    set Curso (value:string){
        this.Curso=value
    }
    get Curso(){
        return this.Curso;
    }
    nuevocurso(nuevocurso:number){
        this.curso=nuevocurso
    }
    salidaestudiante(){
        console.log("ESTUDIANTES")
        console.log("Apellido: "+this.apellidos);
        console.log("nombre : "+this.nombres);
        console.log("estadocivil: "+this.estadoCivil);
        console.log("numedode identificacion: "+ this.numeroIdentificacion);
        console.log("curso: "+ this.curso);
    }
}