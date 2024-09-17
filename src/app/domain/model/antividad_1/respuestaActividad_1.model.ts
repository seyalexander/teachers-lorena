import { alumnoModel } from "../alumno/alumno.model"
import { Actividad1Model } from "./actividad_1.model"

export class respuestaActividad_1 {
  idclaserespuestasctividad1: number = 0
  respuesta: string = ''
  escorrecta: boolean = true
  idalumnofk: alumnoModel = {} as alumnoModel
  idactividad1: Actividad1Model = {} as Actividad1Model
}
