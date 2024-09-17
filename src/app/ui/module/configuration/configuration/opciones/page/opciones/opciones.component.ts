import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../../../../../infraestructure/driven-adapter/login/auth.service';

@Component({
  selector: 'app-opciones',
  standalone: true,
  imports: [],
  templateUrl: './opciones.component.html',
  styleUrl: './opciones.component.css'
})
export class OpcionesComponent {
  username: string = 'Almendra'

  constructor(
    private router: Router,
    private _login: AuthService
  ){}

  datosOpciones:Array<any> = [
    {

    }
  ]

  aventuras(): void {
    this.router.navigateByUrl('/home/personajes');
  }

  volverHome(): void {
    this.router.navigateByUrl('/home');
  }

  salir() {
    this._login.logout()
  }

  opcionesClase(): void {
    this.router.navigateByUrl('/home/opcionesClase');
  }

}
