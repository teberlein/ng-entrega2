import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SaludadorComponent } from './saludador/saludador.component';
import { ListaDestinosComponent } from './lista-destinos/lista-destinos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SaludadorComponent, ListaDestinosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-hola-mundo';
}
