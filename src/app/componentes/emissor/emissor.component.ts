import { Component,OnInit } from '@angular/core';
import { RodarDadoComponent } from '../rodar-dado/rodar-dado.component';

@Component({
  selector: 'app-emissor',
  standalone: true,
  imports: [RodarDadoComponent],
  templateUrl: './emissor.component.html',
  styleUrl: './emissor.component.css'
})
export class EmissorComponent implements OnInit {
  D20 : number = 0;
  constructor(){

  }
  ngOnInit(): void {
    
  }
  onMudarNumero(): void{
    this.D20 = Math.floor(Math.random() *20) +1; //função que roda um D20
  }
}
