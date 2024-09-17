import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../../../../../../infraestructure/driven-adapter/login/auth.service';
import { Clase1Model } from '../../../../../../domain/model/clase1/clase1.model';
import { Clase1Service } from '../../../../../../infraestructure/driven-adapter/clase1/clase1.service';
import { RegistroClasePageComponent } from '../registro-clase-page/registro-clase-page.component';

@Component({
  selector: 'app-clase-page',
  standalone: true,
  imports: [RegistroClasePageComponent],
  templateUrl: './clase-page.component.html',
  styleUrl: './clase-page.component.css'
})
export class ClasePageComponent {
  @ViewChild('audioPlayer') audioPlayer!: ElementRef<HTMLAudioElement>;

  isModalOpen1: boolean = false;

  userNombre: String = ''
  userLoginOn : boolean = false;
  userLoginId : number  = 0 ;

  loggedInUser = {
    username: 'Almendra',
    avatar: 'https://img.freepik.com/foto-gratis/personaje-dibujos-animados-3d_23-2151021951.jpg?w=740&t=st=1721970629~exp=1721971229~hmac=34636ad2e1c093c5ea2e4f8d607497a9a38ac1da229a7d21359135735b3eda43'
  };

  datosAudioslista: Clase1Model[] = [];
  audioSource: string | undefined;

  private audiosSubscription: Subscription | undefined;

  constructor(
    private _getAudiosUseCase: Clase1Service,
    private router: Router,
    private _login: AuthService
  ) {}

  ngOnInit(): void {

    this._login.currentUserLoginOn.subscribe({
      next:(userLoginOn) => {

        this.userLoginOn = userLoginOn;
        this._login.currentUserIdClient.subscribe({
          next: (userLoginId) => {
            this.userLoginId = userLoginId;
            console.log(this.userLoginId);


            if (userLoginId != 0 || userLoginId != null) {
              this.listarAudios();
              console.log("si estoy logueadoooooo");

            }
          }
        })
      }
    })

  }

  listarAudios() {
    this.audiosSubscription = this._getAudiosUseCase.getAllAudio(1).subscribe((response: Clase1Model[]) => {
      this.datosAudioslista = response;
      console.log(this.datosAudioslista);
    });
  }

  reproducirAudio(audioUrl: string): void {
    // Asegúrate de que el enlace de Dropbox esté en formato de descarga directa
    const directDownloadUrl = audioUrl.replace('dl=0', 'dl=1');
    this.audioSource = directDownloadUrl;
    const audioElement = this.audioPlayer.nativeElement;
    audioElement.src = this.audioSource;
    audioElement.load();
    audioElement.play();
  }

  volverOpcionesClase(): void {
    this.router.navigateByUrl('/home/opcionesClase');
  }

  openModal() {
    this.isModalOpen1 =  !this.isModalOpen1;
  }
}
