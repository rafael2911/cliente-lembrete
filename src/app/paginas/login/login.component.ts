import { Component, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/seguranca/auth.service';
import { NgForm } from '@angular/forms';
import { ErrorMsgComponent } from 'src/app/compartilhado/error-msg/error-msg.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  @ViewChild(ErrorMsgComponent, null) errorMsgComponent: ErrorMsgComponent;

  constructor(private auth: AuthService, private router: Router) { }

  onSubmit(form: NgForm) {
    this.auth.login(form.value.email, form.value.password)
    .subscribe(response => {
      localStorage.setItem('access_token', response.access_token);
    }, (response) => {
      if (response.status === 400 && response.error.error === 'invalid_grant') {
        this.errorMsgComponent.setError('Usuário ou Senha inválidos.');
      } else {
        this.errorMsgComponent.setError('Falha ao conectar servidor.');
      }
    },
    () => { this.router.navigateByUrl('/'); });
  }

}
