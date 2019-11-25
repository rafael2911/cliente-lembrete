import { Component } from '@angular/core';
import { AuthService } from 'src/app/seguranca/auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private auth: AuthService) { }

  onSubmit(form: NgForm) {
    this.auth.login(form.value.email, form.value.password);
  }

}
