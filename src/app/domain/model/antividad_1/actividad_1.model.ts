import { NivelesModel } from "../nivel/nivel.model"

export class Actividad1Model {
  idclaseActividad1: number = 0
  audio: string = ''
  opcion1: string = ''
  opcion2: string = ''
  opcion3: string = ''
  opcion4: string = ''
  correcta: string = ''
  id_nivel_Fk: NivelesModel = {} as NivelesModel
}
