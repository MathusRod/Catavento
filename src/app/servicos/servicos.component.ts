import { Component } from '@angular/core';
import { ServicosService } from './servicos.service';

interface Conteudos {
  img: string[];
  texto: string[];
}

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.scss']
})
export class ServicosComponent {

  constructor(private readonly _servicosService: ServicosService){}
  conteudos = this._servicosService.conteudos
  titulo_servico = this._servicosService.servicos[0].titulo
  paragrafo_servico = this._servicosService.servicos[0].paragrafo

  escolhido = 0
  selenioarServico(index: number){
    this.titulo_servico = this._servicosService.servicos[index].titulo
    this.paragrafo_servico = this._servicosService.servicos[index].paragrafo
    this.escolhido = index
  }
  get textoComQuebraDeLinha(): string {
    return this.paragrafo_servico.replace(/;/g, '<br>')
  }
}
