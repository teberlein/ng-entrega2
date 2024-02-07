import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DestinoViajeComponent } from '../destino-viaje/destino-viaje.component';
import { DestinoViaje } from '../models/destino-viaje.model';
import { NgFor, CommonModule } from '@angular/common';
import { FormDestinoViajeComponent } from "../form-destino-viaje/form-destino-viaje.component";
import { DestinosApiClient } from '../models/destinos-api-client.model';

@Component({
    selector: 'app-lista-destinos',
    standalone: true,
    templateUrl: './lista-destinos.component.html',
    styleUrl: './lista-destinos.component.css',
    imports: [DestinoViajeComponent, NgFor, CommonModule, FormDestinoViajeComponent]
})

export class ListaDestinosComponent implements OnInit{
  @Output() onItemAdded: EventEmitter<DestinoViaje>;
  destinos: DestinoViaje[];
  constructor( private destinosApiClient:DestinosApiClient) {
    this.destinos = this.destinosApiClient.getAll(),
    this.onItemAdded = new EventEmitter;
  }

  ngOnInit(): void {
      
  }

  agregado(d: DestinoViaje) {
    this.destinosApiClient.add(d);
    this.onItemAdded.emit(d);
  }

  elegido(e: DestinoViaje) {
    this.destinosApiClient.getAll().forEach(x => e.selected===false);
    e.selected = true;
  }
}
