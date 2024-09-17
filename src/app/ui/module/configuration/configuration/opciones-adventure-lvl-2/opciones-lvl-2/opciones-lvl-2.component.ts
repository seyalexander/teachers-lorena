import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-opciones-lvl-2',
  standalone: true,
  imports: [],
  templateUrl: './opciones-lvl-2.component.html',
  styleUrl: './opciones-lvl-2.component.css'
})
export class OpcionesLvl2Component {
  constructor(private router: Router) { }

  loggedInUser = {
    avatar: 'https://img.freepik.com/foto-gratis/personaje-dibujos-animados-3d_23-2151021922.jpg?t=st=1721966561~exp=1721970161~hmac=5cb656f12016ffd4cd3412f6a0e7a21701bc51621c09a1f91678bc94fc3ef449&w=740', // Reemplaza con la URL real del avatar
    username: 'Almendra'
  };


  activities1 = { name: 'Activity 1', description: 'Descripción breve de la actividad 2', image: 'https://img.freepik.com/foto-gratis/personaje-dibujos-animados-3d_23-2151021951.jpg?w=740&t=st=1721970629~exp=1721971229~hmac=34636ad2e1c093c5ea2e4f8d607497a9a38ac1da229a7d21359135735b3eda43' }
  activities2 = { name: 'Activity 2', description: 'Descripción breve de la actividad 3', image: 'https://img.freepik.com/foto-gratis/personaje-dibujos-animados-3d_23-2151021951.jpg?w=740&t=st=1721970629~exp=1721971229~hmac=34636ad2e1c093c5ea2e4f8d607497a9a38ac1da229a7d21359135735b3eda43' }
  activities3 = { name: 'Activity 3', description: 'Descripción breve de la actividad 4', image: 'https://img.freepik.com/foto-gratis/personaje-dibujos-animados-3d_23-2151021951.jpg?w=740&t=st=1721970629~exp=1721971229~hmac=34636ad2e1c093c5ea2e4f8d607497a9a38ac1da229a7d21359135735b3eda43' }

  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    infinite: true
  };

  ngOnInit(): void {
  }

  volverHome(): void {
    this.router.navigateByUrl('/home/mapa');
  }

  actividadSonidos(): void {
    this.router.navigateByUrl('/home/adventure-2');
  }

  actividadRespuestaCorrecta(): void {
    this.router.navigateByUrl('/home/respuestaCorrectalvl2');
  }

  actividadDibujo(): void {
    this.router.navigateByUrl('/home/dibujolvl2');
  }

  actividadRelacion(): void {
    this.router.navigateByUrl('/home/relacionlvl2');
  }
}
