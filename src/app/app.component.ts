import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ContainerComponent } from './componentes/container/container.component';
import { CabecalhoComponent } from './compenentes/cabecalho/cabecalho.component';
import { SeparadorComponent } from './componentes/separador/separador.component';
import { ContatoComponent } from './componentes/contato/contato.component';

interface Contato{
  id: number
  nome: string
  telefone: string
}

import agenda from './agenda.json'
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ContainerComponent, CabecalhoComponent, 
    SeparadorComponent, ContatoComponent, FormsModule], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  alfabeto: string = 'abcdefghijklmnopqrstuvwxyz'
  contatos: Contato[]= agenda

  filtrarPorTexto: string = ''

  filtrarContatosPorTexto (): Contato [] {
    if (!this.filtrarPorTexto) {
        return this.contatos
}
    return this.contatos.filter(contato => {
        return contato.nome.toLowerCase().includes (this.filtrarPorTexto.toLowerCase())
    })
}


filtrarNomeLetraInicial (letra:string) : Contato[] {
  return this.filtrarContatosPorTexto().filter(contato => {
  return contato.nome.toLowerCase().startsWith(letra)
  } )
}

}