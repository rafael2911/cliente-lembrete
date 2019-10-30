import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ErrorMsgComponent } from 'src/app/compartilhado/error-msg/error-msg.component';
import { Lembrete } from 'src/app/interfaces/lembrete';
import { LembreteService } from 'src/app/services/lembrete.service';

@Component({
  selector: 'app-editar-lembrete',
  templateUrl: './editar-lembrete.component.html',
  styleUrls: ['./editar-lembrete.component.css']
})
export class EditarLembreteComponent {

  public lembrete: Lembrete = {} as Lembrete;
  @ViewChild(ErrorMsgComponent, null) errorMsgComponent: ErrorMsgComponent;

  constructor(private lembreteService: LembreteService,
              private activateRoute: ActivatedRoute,
              private router: Router) {
                this.getLembrete(this.activateRoute.snapshot.params.id);
              }

  getLembrete(id: number) {
    this.lembreteService.getLembrete(id)
      .subscribe((lembrete: Lembrete) => {
        this.lembrete = lembrete;
      }, () => { this.errorMsgComponent.setError('Falha ao buscar lembrete!'); });
  }

  atualizaLembrete(lembrete: Lembrete) {
    this.lembreteService.atualizaLembrete(lembrete)
      .subscribe(
        () => { this.router.navigateByUrl('/'); },
        () => { this.errorMsgComponent.setError('Falha ao atualizar lembrete!'); }
      );
  }

}
