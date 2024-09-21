import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; //import nescessário pra usar condicional

@Component({
  selector: 'app-condicional',
  standalone: true,
  imports: [CommonModule],//import nescessário pra usar condicional
  templateUrl: './condicional.component.html',
  styleUrl: './condicional.component.css'
})
export class CondicionalComponent implements OnInit {

  segredo :boolean = true; //condicional
  name = "cloud";
  constructor(){

  }
  ngOnInit(): void {
    
  }
}
