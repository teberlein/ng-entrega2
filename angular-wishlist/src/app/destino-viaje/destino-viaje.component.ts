import { Component, OnInit, Input, HostBinding} from '@angular/core';
import { DestinoViaje } from '../models/destino-viaje.model';

@Component({
  selector: 'app-destino-viaje',
  standalone: true,
  imports: [],
  templateUrl: './destino-viaje.component.html',
  styleUrl: './destino-viaje.component.css'
})
export class DestinoViajeComponent implements OnInit{
  @Input() destino: DestinoViaje = {
    nombre: '',
    imagenUrl: ''
  };
  @HostBinding('attr.class') cssClass = 'col-md-4';
  constructor() {}

  ngOnInit(): void {
      
  }
}
