
import { Persona } from '../ejercicioherencia3A/Persona';
export class Empleado extends Persona{
    tipoEmpleado:string;
    anioIncorporacion:number;
    numeroDespacho:number;
    
    constructor(aniodeincorporacion=0,numeroDespacho=0,tipoEmpleado=""){
      super()
        this.anioIncorporacion=aniodeincorporacion;
        this.numeroDespacho=numeroDespacho;
        this.tipoEmpleado=tipoEmpleado;

    }
    set Tipoempleado(value:string){
      this.Tipoempleado=value;
    }
    get Tipoempleado(){
      return this.Tipoempleado;
    }
    set AnioIncorporacion(value:string){
      this.AnioIncorporacion=value;
    }
    get AnioIncorporacion(){
      return this.AnioIncorporacion;
    }
    set Numerodespacho(value:string){
      this.Numerodespacho=value;
    }
    get Numerodespacho(){
      return this.Numerodespacho;
    }
    
    cambiodedespacho(nuevodespacho:number){
      this.numeroDespacho=nuevodespacho;
    }
    salidaempleado(){
      console.log("EMPLEADOS")
      console.log("Apellido: "+this.apellidos);
      console.log("nombre : "+this.nombres);
      console.log("estadocivil: "+this.estadoCivil);
      console.log("numedode identificacion: "+ this.numeroIdentificacion);
      console.log("tipo de empleado:"+this.tipoEmpleado);
      console.log("año de incorporacion: "+this.anioIncorporacion)
      console.log("numero de despacho: "+this.numeroDespacho)
    }
}