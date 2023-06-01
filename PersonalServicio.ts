import { Empleado } from '../ejercicioherencia3A/Empleado';
export class PersonalServicio extends Empleado{
    seccion:string;
    constructor(seccion=""){
        super()
        this.seccion=seccion;
        
    }
    set Seccion(value:string){
        this.Seccion=value
    }
    get Seccion(){
        return this.Seccion;
    }
    nuevaseccion(nuevaseccion:string){
        this.seccion=nuevaseccion;
    }
    salidapersonaServicio(){
        console.log("PERSONAL DE SERVICIO")
        console.log("Apellido: "+this.apellidos);
        console.log("nombre : "+this.nombres);
        console.log("estadocivil: "+this.estadoCivil);
        console.log("numedode identificacion: "+ this.numeroIdentificacion);
        console.log("numero de despacho: "+this.numeroDespacho);
        console.log("Seccion asignada: "+this.seccion);
    }
}