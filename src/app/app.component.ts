import { ErrorMsgComponent } from './compartilhado/error-msg/error-msg.component';

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router: Router){}

  title = 'cliente-lembrete';

  exibeNavBar() {
    return this.router.url !== '/login';
  }
}
