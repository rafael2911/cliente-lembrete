import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';

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

  login(usuario: string, senha: string): Observable<any> {
    const headers = new HttpHeaders()
      .append('Content-Type', 'application/x-www-form-urlencoded')
      .append('Authorization', 'Basic bGVtYnJldGU6bGVtYnJldGUxMjM=');
    const body = `username=${usuario}&password=${senha}&grant_type=password`;

    return this.http.post<any>(this.oauthTokenUrl, body, { headers });
  }

  private armazenaToken(token: string) {
    this.jwtPayload = this.jwtHelper.decodeToken(token);
  }
}
