import { HttpClient, HttpErrorResponse, HttpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable, tap, throwError } from 'rxjs';
import { LoginRequest } from '../../../domain/model/login/login-request';
import { environment } from '../../../../environments/environment.development';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService  {

  currentUserLoginOn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  currentUserData: BehaviorSubject<string> = new BehaviorSubject<string>("");
  currentUserNombre: BehaviorSubject<string> = new BehaviorSubject<string>("");
  currentUserIdClient: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor(private http: HttpClient, private router: Router) {
    const token = sessionStorage.getItem("jwt");
    const clienteId = sessionStorage.getItem("clienteId");
    const clienteNombre = sessionStorage.getItem("clienteNombre");

    this.currentUserNombre = new BehaviorSubject<string>(clienteNombre || "");
    this.currentUserIdClient = new BehaviorSubject<number>(clienteId ? Number(clienteId) : 0);
    this.currentUserLoginOn = new BehaviorSubject<boolean>(!!token);
    this.currentUserData = new BehaviorSubject<string>(token || "");

    if (token) {
      this.currentUserLoginOn.next(true);
      this.currentUserData.next(token);
      if (clienteId) this.currentUserIdClient.next(Number(clienteId));
      if (clienteNombre) this.currentUserNombre.next(clienteNombre);
    }
  }

  login(credentials: LoginRequest): Observable<any> {
    return this.http.post<any>(environment.api + "/Login", credentials).pipe(
      tap((userData) => {
        console.log(userData);
        sessionStorage.setItem("jwt", userData.jwt);  // Almacenar el token en sessionStorage
        sessionStorage.setItem("clienteId", userData.cliente);
        sessionStorage.setItem("clienteNombre", userData.cliente_razon);

        this.currentUserData.next(userData.jwt);
        this.currentUserIdClient.next(userData.cliente);
        this.currentUserNombre.next(userData.cliente_razon);
        this.currentUserLoginOn.next(true);
      }),
      map((userData) => userData.token),
      catchError(this.handleError)
    );
  }

  logout(): void {
    console.log('Logging out...');
    sessionStorage.removeItem("jwt");
    sessionStorage.removeItem("clienteId");
    sessionStorage.removeItem("clienteNombre");

    this.currentUserData.next("");
    this.currentUserIdClient.next(0);
    this.currentUserNombre.next("");
    this.currentUserLoginOn.next(false);

    this.router.navigateByUrl('/login');
    console.log("Logout completed.");
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('Se ha producido un error: ', error.error);
    } else {
      console.error('Backend retornó el código de estado: ', error.status);
    }
    return throwError(() => new Error('Algo falló. Por favor intente nuevamente.'));
  }

  get userData(): Observable<string> {
    return this.currentUserData.asObservable();
  }

  get IdClient(): Observable<number> {
    return this.currentUserIdClient.asObservable();
  }

  get IdValue(): number {
    return this.currentUserIdClient.value;
  }

  get userLoginOn(): Observable<boolean> {
    return this.currentUserLoginOn.asObservable();
  }

  get userToken(): string {
    return this.currentUserData.value;
  }
}
