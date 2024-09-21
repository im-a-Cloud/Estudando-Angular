import { Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-rodar-dado',
  standalone: true,
  imports: [],
  templateUrl: './rodar-dado.component.html',
  styleUrl: './rodar-dado.component.css'
})
export class RodarDadoComponent implements OnInit{
  @Output() mudarNumero: EventEmitter<any> = new EventEmitter() //Ele emite o evento/output para a classe-pai que vai chamar o mudarNumero(evitar usar <any>)

  constructor(){}

  ngOnInit(): void {
    
  }
  lidarComClick(){
    this.mudarNumero.emit();
  }
}
