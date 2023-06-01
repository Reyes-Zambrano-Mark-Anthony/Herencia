
export class Persona{
    
    nombres:string;
    apellidos:string;
    numeroIdentificacion:string;
    estadoCivil:string;
    
    constructor(apellidos="",nombres="",numerodeIdentificacion="",estadocivil=""){
        this.apellidos=apellidos;
        this.nombres=nombres;
        this.estadoCivil=estadocivil;
        this.numeroIdentificacion=numerodeIdentificacion;
    }
    set Nombres(value:string){
        this.nombres=value;
    }
    get Nombres(){
        return this.nombres
    }
    set Apellidos(value:string){
        this.Apellidos=value;
    }
    get Apellidos(){
        return this.Apellidos
    }
    set identificacion(value:string){
        this.identificacion=value;
    }
    get identificacion(){
        return this.identificacion
    }
    set estadocivil(value:string){
        this.estadocivil=value;
    }
    get estadocivil(){
        return this.estadocivil
    }
    
     cambioestadocivil(estadoCivil:string){
      this.estadoCivil=estadoCivil;
    }
    salidapersona(){
        console.log("PERSONAS")
        console.log("Apellido: "+this.apellidos);
        console.log("nombre : "+this.nombres);
        console.log("estadocivil: "+this.estadoCivil);
        console.log("numedode identificacion: "+ this.numeroIdentificacion);
    }
}
