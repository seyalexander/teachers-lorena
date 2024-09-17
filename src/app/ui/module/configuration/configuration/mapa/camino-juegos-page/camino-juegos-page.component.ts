import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-camino-juegos-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './camino-juegos-page.component.html',
  styleUrl: './camino-juegos-page.component.css'
})
export class CaminoJuegosPageComponent {
  username: string = 'Almendra';

  constructor(
    private router: Router,
  ) {}

  levels = [
    { name: "Level 1", x: 20, y: 30, icon: "https://img.freepik.com/foto-gratis/personaje-dibujos-animados-3d_23-2151021951.jpg?w=740&t=st=1721970629~exp=1721971229~hmac=34636ad2e1c093c5ea2e4f8d607497a9a38ac1da229a7d21359135735b3eda43", available: true },
    { name: "Level 2", x: 40, y: 50, icon: "https://img.freepik.com/foto-gratis/personaje-dibujos-animados-3d_23-2151021951.jpg?w=740&t=st=1721970629~exp=1721971229~hmac=34636ad2e1c093c5ea2e4f8d607497a9a38ac1da229a7d21359135735b3eda43", available: true },
    { name: "Level 3", x: 80, y: 30, icon: "https://img.freepik.com/foto-gratis/personaje-dibujos-animados-3d_23-2151021951.jpg?w=740&t=st=1721970629~exp=1721971229~hmac=34636ad2e1c093c5ea2e4f8d607497a9a38ac1da229a7d21359135735b3eda43", available: true },
    { name: "Level 4", x: 60, y: 70, icon: "https://img.freepik.com/foto-gratis/personaje-dibujos-animados-3d_23-2151021951.jpg?w=740&t=st=1721970629~exp=1721971229~hmac=34636ad2e1c093c5ea2e4f8d607497a9a38ac1da229a7d21359135735b3eda43", available: true }
  ];

  navigateToLevel(level: any) {
    if (level.available) {
      switch(level.name) {
        case "Level 1":
          this.lvl1();
          break;
        case "Level 2":
          this.lvl2();
          break;
        case "Level 3":
          this.lvl3();
          break;
        case "Level 4":
          this.lvl4();
          break;
        default:
          console.log('Nivel no encontrado:', level.name);
      }
    } else {
      console.log('Nivel bloqueado:', level.name);
    }
  }

  volverHome(): void {
    this.router.navigateByUrl('/home');
  }

  lvl1(): void {
    this.router.navigateByUrl('home/adventure-1');
  }

  lvl2(): void {
    this.router.navigateByUrl('home/adventure-2');
  }

  lvl3(): void {
    this.router.navigateByUrl('home/adventure-3');
  }

  lvl4(): void {
    this.router.navigateByUrl('home/adventure-4');
  }
}
