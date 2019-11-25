import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { JwtModule } from '@auth0/angular-jwt';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorMsgComponent } from './compartilhado/error-msg/error-msg.component';
import { ListaLembreteComponent } from './paginas/lista-lembrete/lista-lembrete.component';
import { FormLembreteComponent } from './compartilhado/form-lembrete/form-lembrete.component';
import { CriarLembreteComponent } from './paginas/criar-lembrete/criar-lembrete.component';
import { EditarLembreteComponent } from './paginas/editar-lembrete/editar-lembrete.component';
import { LoginComponent } from './paginas/login/login.component';
import { AuthService } from './seguranca/auth.service';

export function tokenGetter() {
  return localStorage.getItem('access_token');
}

@NgModule({
  declarations: [
    AppComponent,
    ErrorMsgComponent,
    ListaLembreteComponent,
    FormLembreteComponent,
    CriarLembreteComponent,
    EditarLembreteComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => tokenGetter(),
        headerName: 'Authorization',
        whitelistedDomains: ['localhost:8080'],
        blacklistedRoutes: ['example.com/examplebadroute/']
      }
    })
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
