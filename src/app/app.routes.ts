import { Routes } from '@angular/router';
import { HomePageComponent } from './ui/module/home/page/home-page/home-page.component';
import { OpcionesComponent } from './ui/module/configuration/configuration/opciones/page/opciones/opciones.component';
import { ClasePageComponent } from './ui/module/configuration/class/page/clase-page/clase-page.component';
import { CaminoJuegosPageComponent } from './ui/module/configuration/configuration/mapa/camino-juegos-page/camino-juegos-page.component';
import { EleccionPersonajesComponent } from './ui/module/configuration/configuration/avatares/eleccion-personajes/eleccion-personajes.component';
import { OpcionesLvl1Component } from './ui/module/configuration/configuration/opciones-adventure-lvl-1/opciones-lvl-1/opciones-lvl-1.component';
import { OpcionesLvl2Component } from './ui/module/configuration/configuration/opciones-adventure-lvl-2/opciones-lvl-2/opciones-lvl-2.component';
import { OpcionesLvl3Component } from './ui/module/configuration/configuration/opciones-adventure-lvl-3/opciones-lvl-3/opciones-lvl-3.component';
import { OpcionesLvl4Component } from './ui/module/configuration/configuration/opciones-adventure-lvl-4/opciones-lvl-4/opciones-lvl-4.component';
import { OpcionesClaseComponent } from './ui/module/configuration/configuration/opciones-clase/page/opciones-clase/opciones-clase.component';
import { Actividad1Lvl1Component } from './ui/module/configuration/configuration/opciones-adventure-lvl-1/actividades-lvl-1/actividad-1-lvl-1/actividad-1-lvl-1.component';
import { Actividad1Lvl2Component } from './ui/module/configuration/configuration/opciones-adventure-lvl-2/actividades-lvl-2/actividad-1-lvl2/actividad-1-lvl2.component';
import { Actividad1Lvl3Component } from './ui/module/configuration/configuration/opciones-adventure-lvl-3/actividades-lvl-3/actividad-1-lvl-3/actividad-1-lvl-3.component';
import { Actividad1Lvl4Component } from './ui/module/configuration/configuration/opciones-adventure-lvl-4/actividades-lvl-4/actividad-1-lvl-4/actividad-1-lvl-4.component';
import { Actividad3Lvl1Component } from './ui/module/configuration/configuration/opciones-adventure-lvl-1/actividades-lvl-1/actividad-3-lvl-1/actividad-3-lvl-1.component';
import { Actividad3Lvl2Component } from './ui/module/configuration/configuration/opciones-adventure-lvl-2/actividades-lvl-2/actividad-3-lvl-2/actividad-3-lvl-2.component';
import { Actividad3Lvl3Component } from './ui/module/configuration/configuration/opciones-adventure-lvl-3/actividades-lvl-3/actividad-3-lvl-3/actividad-3-lvl-3.component';
import { Actividad3Lvl4Component } from './ui/module/configuration/configuration/opciones-adventure-lvl-4/actividades-lvl-4/actividad-3-lvl-4/actividad-3-lvl-4.component';
import { Actividad2Lvl1Component } from './ui/module/configuration/configuration/opciones-adventure-lvl-1/actividades-lvl-1/actividad-2-lvl-1/actividad-2-lvl-1.component';
import { Actividad2Lvl2Component } from './ui/module/configuration/configuration/opciones-adventure-lvl-2/actividades-lvl-2/actividad-2-lvl-2/actividad-2-lvl-2.component';
import { Actividad2Lvl3Component } from './ui/module/configuration/configuration/opciones-adventure-lvl-3/actividades-lvl-3/actividad-2-lvl-3/actividad-2-lvl-3.component';
import { Actividad2Lvl4Component } from './ui/module/configuration/configuration/opciones-adventure-lvl-4/actividades-lvl-4/actividad-2-lvl-4/actividad-2-lvl-4.component';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import ('./ui/module/auth/AUTH.routes').then(m => m.AUTH_ROUTE)
  },
  {
    path: 'home',
    component: HomePageComponent,
    children: [
      {
        path: '',
        component: OpcionesComponent
      },
      {
        path: 'opcionesClase',
        component: OpcionesClaseComponent
      },
      {
        path: 'clase1',
        component: ClasePageComponent
      },
      {
        path: 'personajes',
        pathMatch: 'full',
        component: EleccionPersonajesComponent,
      },
      {
        path: 'mapa',
        pathMatch: 'full',
        component: CaminoJuegosPageComponent,
      },
      {
        path: 'adventure-1',
        pathMatch: 'full',
        component: OpcionesLvl1Component,
      },
      {
        path: 'adventure-2',
        pathMatch: 'full',
        component: OpcionesLvl2Component,
      },
      {
        path: 'adventure-3',
        pathMatch: 'full',
        component: OpcionesLvl3Component,
      },
      {
        path: 'adventure-4',
        pathMatch: 'full',
        component: OpcionesLvl4Component,
      },
      {
        path: 'respuestaCorrectalvl1',
        pathMatch: 'full',
        component: Actividad1Lvl1Component,
      },
      {
        path: 'respuestaCorrectalvl2',
        pathMatch: 'full',
        component: Actividad1Lvl2Component,
      },
      {
        path: 'respuestaCorrectalvl3',
        pathMatch: 'full',
        component: Actividad1Lvl3Component,
      },
      {
        path: 'respuestaCorrectalvl4',
        pathMatch: 'full',
        component: Actividad1Lvl4Component,
      },
      {
        path: 'relacionlvl1',
        pathMatch: 'full',
        component: Actividad2Lvl1Component,
      },
      {
        path: 'relacionlvl2',
        pathMatch: 'full',
        component: Actividad2Lvl2Component,
      },
      {
        path: 'relacionlvl3',
        pathMatch: 'full',
        component: Actividad2Lvl3Component,
      },
      {
        path: 'relacionlvl4',
        pathMatch: 'full',
        component: Actividad2Lvl4Component,
      },
      {
        path: 'dibujolvl1',
        pathMatch: 'full',
        component: Actividad3Lvl1Component,
      },
      {
        path: 'dibujolvl2',
        pathMatch: 'full',
        component: Actividad3Lvl2Component,
      },
      {
        path: 'dibujolvl3',
        pathMatch: 'full',
        component: Actividad3Lvl3Component,
      },
      {
        path: 'dibujolvl4',
        pathMatch: 'full',
        component: Actividad3Lvl4Component,
      },
    ]
  }
];
