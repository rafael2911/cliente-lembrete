import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  oauthTokenUrl = `${environment.lembretesApiUrl}/oauth/token`;
  jwtPayload: any;
  error: any;

  constructor(
    private http: HttpClient,
    private jwtHelper: JwtHelperService
    ) {}

  login(usuario: string, senha: string) {
    const headers = new HttpHeaders()
      .append('Content-Type', 'application/x-www-form-urlencoded')
      .append('Authorization', 'Basic bGVtYnJldGU6bGVtYnJldGUxMjM=');
    const body = `username=${usuario}&password=${senha}&grant_type=password`;

    this.http.post<any>(this.oauthTokenUrl, body, { headers })
      .subscribe(response => {
        localStorage.setItem('access_token', response.access_token);
      }, response => {
        console.log(response);
      });
  }

  private armazenaToken(token: string) {
    this.jwtPayload = this.jwtHelper.decodeToken(token);
  }
}
