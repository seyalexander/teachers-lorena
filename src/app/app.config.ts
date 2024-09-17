import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ErrorInterceptorService } from './infraestructure/driven-adapter/login/error-interceptor.service';
import { clase1Gateway } from './domain/model/clase1/gateway/clase1-gateway';
import { Clase1Service } from './infraestructure/driven-adapter/clase1/clase1.service';
import { actividad1Gateway } from './domain/model/antividad_1/gateway/actividad_1-gateway';
import { Actividad1Service } from './infraestructure/driven-adapter/actividad_1/actividad-1.service';
import { TokenService } from './infraestructure/driven-adapter/login/token.service';
import { Actividad3Gateway } from './domain/model/actividad_3/gateway/actividad_3-hateway';
import { Actividad3Service } from './infraestructure/driven-adapter/actividad_3/actividad-3.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    { provide: actividad1Gateway, useClass: Actividad1Service },
    { provide: Actividad3Gateway, useClass: Actividad3Service },
    { provide: clase1Gateway, useClass: Clase1Service },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: HTTP_INTERCEPTORS, useClass: TokenService, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptorService, multi: true },
    provideHttpClient(withInterceptorsFromDi())
  ]
};
