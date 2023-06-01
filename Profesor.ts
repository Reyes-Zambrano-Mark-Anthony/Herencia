import {Empleado} from '../ejercicioherencia3A/Empleado';
export class Profesor extends Empleado {
    departamento: string;
    constructor(departamento=""){
        super()
        this.departamento=departamento;
    }
    set Departamento (value:string){
        this.Departamento=value
    }
    get Departamento(){
        return this.Departamento;
    }
    
    nuevodepartamento(nuevodepartamento:string){
        this.departamento=nuevodepartamento;
    }
    salidaprofesor(){
        console.log("PROFESORES")
        console.log("Apellido: "+this.apellidos);
        console.log("nombre : "+this.nombres);
        console.log("estadocivil: "+this.estadoCivil);
        console.log("numerode identificacion: "+ this.numeroIdentificacion);
        console.log("numero de despacho: "+ this.numeroDespacho);
        console.log("Departamento: "+this.departamento);
    }
}