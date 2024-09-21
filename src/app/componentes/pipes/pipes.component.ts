import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent implements OnInit {
  someText : string = "AAAAAAAAAAAAAAAAAAAAAAA HOOKED ON A FEELING";

  hoje = new Date();
  constructor(){}

  ngOnInit(): void {
    
  }
}
