import { alumnoModel } from "../alumno/alumno.model";
import { audioModel } from "../audio/audio.model";
import { NivelesModel } from "../nivel/nivel.model";

export class actividad3Model {
  idclaserespuestasctividad3: number = 0
  imagen: string = ''
  idalumnofk:  alumnoModel = {} as alumnoModel
  idaudiosactividad3fk: audioModel = {} as audioModel
  id_nivel_Fk: NivelesModel = {} as NivelesModel

  constructor(imagen: string) {
    this.imagen = imagen;
  }
}
