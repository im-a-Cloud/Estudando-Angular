import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-testando-route',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testando-route.component.html',
  styleUrl: './testando-route.component.css'
})
export class TestandoRouteComponent implements OnInit{

  constructor(){

  }
  ngOnInit(): void {
    
  }
}
