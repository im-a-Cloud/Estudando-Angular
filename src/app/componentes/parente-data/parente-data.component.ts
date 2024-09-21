import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-parente-data',
  standalone: true,
  imports: [],
  templateUrl: './parente-data.component.html',
  styleUrl: './parente-data.component.css'
})
export class ParenteDataComponent {
  @Input() fulano!: string;
  @Input() tojo!:string; // o ! garante que os dados sejam inicializados
  @Input() dadosUsuario: { email: string, cargo: string } = { email: '', cargo: '' }; //a parte depois do '=' garante que não sejam passados valores nulos/indefinidos que faz tudo explodir

}
