import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DestinoViajeComponent } from './destino-viaje/destino-viaje.component';
import { ListaDestinosComponent } from './lista-destinos/lista-destinos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DestinoViajeComponent, ListaDestinosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-wishlist';
}
