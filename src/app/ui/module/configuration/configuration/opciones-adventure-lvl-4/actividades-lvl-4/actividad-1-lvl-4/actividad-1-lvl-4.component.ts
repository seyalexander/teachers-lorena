import { Component, ElementRef, ViewChild } from '@angular/core';
import { Actividad1Model } from '../../../../../../../domain/model/antividad_1/actividad_1.model';
import { Actividad1Service } from '../../../../../../../infraestructure/driven-adapter/actividad_1/actividad-1.service';
import { Router } from '@angular/router';
import { AuthService } from '../../../../../../../infraestructure/driven-adapter/login/auth.service';
import { Subscription } from 'rxjs';
import { respuestaActividad_1 } from '../../../../../../../domain/model/antividad_1/respuestaActividad_1.model';
import { alumnoModel } from '../../../../../../../domain/model/alumno/alumno.model';

@Component({
  selector: 'app-actividad-1-lvl-4',
  standalone: true,
  imports: [],
  templateUrl: './actividad-1-lvl-4.component.html',
  styleUrl: './actividad-1-lvl-4.component.css'
})
export class Actividad1Lvl4Component {
  @ViewChild('audioPlayer') audioPlayer!: ElementRef<HTMLAudioElement>;

  loggedInUser = {
    username: 'Almendra',
    avatar: 'https://img.freepik.com/foto-gratis/personaje-dibujos-animados-3d_23-2151021951.jpg?w=740&t=st=1721970629~exp=1721971229~hmac=34636ad2e1c093c5ea2e4f8d607497a9a38ac1da229a7d21359135735b3eda43'
  };

  datosAudioslista: Actividad1Model[] = [];
  audioSource: string | undefined;
  opcionesMezcladas: string[] = [];
  mostrarModal: boolean = false;
  respuestaSeleccionada: string = '';
  correcta: string = '';

  private audiosSubscription: Subscription | undefined;


  constructor(
    private _getAudiosUseCase: Actividad1Service,
    private router: Router,
    private _login: AuthService
  ) {}

  userNombre: string = '';
  userLoginOn: boolean = false;
  userLoginId: number = 0;

  ngOnInit(): void {
    const token = sessionStorage.getItem('jwt');

    if (!token || this.isTokenExpired(token)) {

      this.router.navigate(['/']);
    } else {
      this._login.currentUserLoginOn.subscribe({
        next: (userLoginOn) => {
          this.userLoginOn = userLoginOn;
          this._login.currentUserIdClient.subscribe({
            next: (userLoginId) => {
              this.userLoginId = userLoginId;

              if (userLoginId != 0 || userLoginId != null) {
                this.listarAudios();
              }
            }
          });
        }
      });
    }
  }

  isTokenExpired(token: string): boolean {
    const payload = JSON.parse(atob(token.split('.')[1]));
    const expiry = payload.exp;
    return Math.floor(Date.now() / 1000) >= expiry;
  }

  ngAfterViewInit(): void {
    if (this.audioSource) {
      this.reproducirAudio();
    }
  }

  listarAudios(): void {
    this.audiosSubscription = this._getAudiosUseCase.getActividadesPorNivel(4).subscribe((response: Actividad1Model[]) => {
      this.datosAudioslista = response;
      if (this.datosAudioslista.length > 0) {
        const item = this.datosAudioslista[this.datosAudioslista.length - 1];
        this.audioSource = this.formatDropboxUrl(item.audio);
        this.mezclarOpciones(item);

        if (this.audioSource) {
          this.reproducirAudio();
          console.log(this.audioSource);
        }
      }
    });
  }

  mezclarOpciones(item: Actividad1Model): void {
    const opciones = [item.opcion1, item.opcion2, item.opcion3, item.opcion4];
    this.opcionesMezcladas = this.shuffleArray(opciones);
    console.log('Opciones mezcladas:', this.opcionesMezcladas);
    this.correcta = item.correcta;
  }

  shuffleArray(array: string[]): string[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  formatDropboxUrl(url: string): string {
    return url.replace('dl=0', 'dl=1');
  }

  reproducirAudio(): void {
    if (this.audioPlayer && this.audioSource) {
      const audioElement = this.audioPlayer.nativeElement;
      audioElement.src = this.audioSource;
      audioElement.load();
      audioElement.play().catch(error => console.error('Error al reproducir el audio:', error));
    }
  }

  verificarRespuesta(opcionSeleccionada: string): void {
    this.respuestaSeleccionada = opcionSeleccionada;
    const respuesta = opcionSeleccionada === this.correcta ? 'correcta' : 'incorrecta';
    this.saveRespuesta(respuesta);
    this.mostrarModal = true;
  }

  saveRespuesta(respuesta: string): void {
    const respuestaModel = new respuestaActividad_1();
    respuestaModel.idclaserespuestasctividad1 = 1;
    respuestaModel.respuesta = respuesta;
    respuestaModel.idalumnofk = {} as alumnoModel;
  }

  volverOpcionesClase(): void {
    this.router.navigateByUrl('/home/adventure-4');
  }

  trackByFn(index: number, item: string): number {
    return index;
  }
}
