import { Persona } from '../ejercicioherencia3A/Persona';
import { Empleado } from '../ejercicioherencia3A/Empleado';
import { Estudiante} from '../ejercicioherencia3A/Estudiante';
import { PersonalServicio } from '../ejercicioherencia3A/PersonalServicio';
import { Profesor } from '../ejercicioherencia3A/Profesor';
const persona2=new Persona;
persona2.apellidos="Giler";
persona2.nombres="Adrian"
persona2.estadoCivil="casado"
persona2.numeroIdentificacion="2778392"
persona2.salidapersona();

const empleado2=new Empleado;
empleado2.apellidos="Avila";
empleado2.nombres="Alex"
empleado2.estadoCivil="soltero"
empleado2.numeroIdentificacion="37328774"
empleado2.anioIncorporacion=2020
empleado2.tipoEmpleado="Profesor"
empleado2.numeroDespacho=8
empleado2.salidaempleado();

const estudiante2=new Estudiante;
estudiante2.apellidos="Garcia";
estudiante2.nombres="Carolina"
estudiante2.estadoCivil="soltera"
estudiante2.numeroIdentificacion="48438839"
estudiante2.curso=3
estudiante2.salidaestudiante();

const personaservicio2=new PersonalServicio;
personaservicio2.apellidos="Andrade"
personaservicio2.nombres="Ernesto"
personaservicio2.estadoCivil="soltero"
personaservicio2.numeroIdentificacion="53684983"
personaservicio2.numeroDespacho=3
personaservicio2.seccion="Biblioteca"
personaservicio2.salidapersonaServicio();

const profesor2=new Profesor;
profesor2.apellidos="Tumbaco";
profesor2.nombres="Carlos";
profesor2.estadoCivil="Divorciado";
profesor2.numeroIdentificacion="64930894";
profesor2.numeroDespacho=8
profesor2.departamento="Ciencias"
profesor2.salidaprofesor()
