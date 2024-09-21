import { Injectable } from '@angular/core';
import { Personagens } from '../Personagens';

@Injectable({
  providedIn: 'root'
})
export class ListasService {

  constructor() { }

  remover(personagens: Personagens[], personagem: Personagens): Personagens[] {
    console.log("Personagem removido");
    // Retorna uma nova lista sem o personagem removido
    return personagens.filter((nomePersonagem) => personagem.nome !== nomePersonagem.nome);
  }
}
