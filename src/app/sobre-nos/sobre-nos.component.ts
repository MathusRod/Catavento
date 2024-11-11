import { Component } from '@angular/core';

@Component({
  selector: 'app-sobre-nos',
  templateUrl: './sobre-nos.component.html',
  styleUrls: ['./sobre-nos.component.scss']
})
export class SobreNosComponent {
  tamanhoTela: number = window.innerWidth
  tamanhoResponsivo: number = 1179
}
