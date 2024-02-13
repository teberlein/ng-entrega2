import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { DestinoViajeComponent } from '../destino-viaje/destino-viaje.component';

@Component({
  selector: 'app-lista-destinos',
  standalone: true,
  imports: [NgFor, DestinoViajeComponent],
  templateUrl: './lista-destinos.component.html',
  styleUrl: './lista-destinos.component.css'
})

export class ListaDestinosComponent implements OnInit{
  destinos:string[];
  constructor() {
    this.destinos=['Barcelona', 'Buenos Aires', 'Lima', 'Medellin']
  }

  ngOnInit(): void {
      
  }
}