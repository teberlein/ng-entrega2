import { Component, OnInit, Input, HostBinding, EventEmitter, Output, input} from '@angular/core';
import { DestinoViaje } from '../models/destino-viaje.model';
import { ThisReceiver } from '@angular/compiler';
import { CommonModule, NgFor, NgIf, NgSwitch, NgSwitchCase } from '@angular/common';

@Component({
  selector: 'app-destino-viaje',
  standalone: true,
  imports: [NgFor, NgSwitch, NgSwitchCase, CommonModule, NgIf],
  templateUrl: './destino-viaje.component.html',
  styleUrl: './destino-viaje.component.css'
})
export class DestinoViajeComponent implements OnInit{

  @Input('idx') position: number = 0;
  @Input() destino: DestinoViaje = {
    nombre: '',
    url: '',
    /*     isSelected: function (): boolean {
          throw new Error('Function not implemented.');
        },
        setSelected: function (): void {
          throw new Error('Function not implemented.');
        }, */
    selected: false,
    servicios: [],
  };
  @HostBinding('attr.class') cssClass = 'col-md-4';
  @Output() clicked: EventEmitter<DestinoViaje>;

  constructor() {
    this.clicked = new EventEmitter();
  }

  ngOnInit(): void {      
  }

  ir() {
    this.clicked.emit(this.destino);
    return false;
  }
}
