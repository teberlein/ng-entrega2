import { Component, OnInit } from '@angular/core';
import { DestinoViajeComponent } from '../destino-viaje/destino-viaje.component';
import { DestinoViaje } from '../models/destino-viaje.model';
import { NgFor, CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-destinos',
  standalone: true,
  imports: [ DestinoViajeComponent, NgFor, CommonModule ],
  templateUrl: './lista-destinos.component.html',
  styleUrl: './lista-destinos.component.css'
})

export class ListaDestinosComponent implements OnInit{
  destinos: DestinoViaje[];
  constructor() {
    this.destinos = []
  }

  ngOnInit(): void {
      
  }

  guardar(nombre:string, url:string):boolean {
    this.destinos.push((new DestinoViaje(nombre,url)));
    return false;
  }
}

