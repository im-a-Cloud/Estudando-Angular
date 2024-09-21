import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common'; //nescessário para usar ngFor
import { Personagens } from '../../Personagens'; 

import { ListasService } from '../../serviços/listas.service';

@Component({
  selector: 'app-listas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listas.component.html',
  styleUrl: './listas.component.css'
})
export class ListasComponent implements OnInit{
  literalmenteEu: Personagens[] =
  [{nome: 'Cloud Strife', profissao:'Soldier', idade : 23},
    {nome: 'Goro Majima', profissao:'Yakuza',idade : 60},
    {nome: 'Byakuya', profissao:'Shinigami', idade : 500},
    {nome: 'Durnehviir', profissao:'Dragão', idade : 21},
    {nome: 'Kazuma Kiryu', profissao:'Yakuza', idade : 53}
  ];
    //cria a lista com seus atributos e tipos, temos nome, tipo e idade
    dadosPersonagem = ''; //faz uma variavel vazia para receber o valor de idade
  constructor(private listasService: ListasService){

  }
  ngOnInit(): void {
    
  }
  mostrarIdade(personagem: Personagens){

    this.dadosPersonagem = `O personagem tem ${personagem.idade} anos.`; //define a função para mostrar a idade do personagem alvo

  }

  deletarPersonagem(personagem :Personagens){
    console.log("apagafo") //quando declaramos variaveis dentro de funções tem que usar let
    this.literalmenteEu = this.listasService.remover(this.literalmenteEu, personagem)
  }
}
