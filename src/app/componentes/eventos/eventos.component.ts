import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; //import nescessário pra usar condicional


@Component({
  selector: 'app-eventos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './eventos.component.html',
  styleUrl: './eventos.component.css'
})
export class EventosComponent implements OnInit{
  mostrar: boolean = false;
  corOriginal = 'black';
  color1 = 'blue';
  color2 = 'red';
  constructor(){

  }
  ngOnInit(): void {
    
  }
  mostrarMensagem(): void{ //função definida como void(maioria das funções vai retornar void)
    this.mostrar = !this.mostrar; //this é usado pois estamos na mesma classe, esse 
    //!this.mostrar faz com que ele sempre inverta o valor de mostrar, um switch por assim dizer, chamado de toggle
  }
  mudarCorHover():void{
    this.corOriginal = this.color1;
  }
  mudarCorLeave():void{
    this.corOriginal = this.color2;
  }
}
