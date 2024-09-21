import { Component } from '@angular/core';
import { NgClass, NgStyle } from '@angular/common';
import { OnInit } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-diretivas',
  standalone: true,
  imports: [NgStyle, NgClass],
  templateUrl: './diretivas.component.html',
  styleUrl: './diretivas.component.css'
})
export class DiretivasComponent implements OnInit{
  size = 37;
  font = 'Arial';
  color = 'yellow'
  //ngstyle funciona como se fosse um mini css, definimos os valores aqui
  // e no .html apenas chamamos os nomes


  teste = ["teste1", "teste2"] // aqui o conceito é que nem div, onde toda vez que for chamado o "teste"
  //ele irá aplicar ambos os estilo definidos teste1 e teste2 que foram feitos no css

  ngOnInit(): void {
    // Qualquer lógica de inicialização pode ir aqui
  }
}
