import { EditarLembreteComponent } from './paginas/editar-lembrete/editar-lembrete.component';
import { CriarLembreteComponent } from './paginas/criar-lembrete/criar-lembrete.component';
import { ListaLembreteComponent } from './paginas/lista-lembrete/lista-lembrete.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './paginas/login/login.component';
import { AuthGuardService } from './seguranca/auth-guard.service';


const routes: Routes = [
  { path: '', component: ListaLembreteComponent, canActivate: [AuthGuardService] },
  { path: 'lembrete/criar', component: CriarLembreteComponent, canActivate: [AuthGuardService] },
  { path: 'lembrete/editar/:id', component: EditarLembreteComponent, canActivate: [AuthGuardService] },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
