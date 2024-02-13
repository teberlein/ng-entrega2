import { BehaviorSubject, Subject } from 'rxjs';
import { DestinoViaje } from './destino-viaje.model';
import { Store } from '@ngrx/store';
import { AppState } from '../states/app.state';
import { ElegidoFavoritoAction, NuevoDestinoAction } from '../states/destinos-viajes/destinos-viajes.actions';
import { Injectable } from '@angular/core';

@Injectable()
export class DestinosApiClient {
 	constructor(private store: Store<AppState>) {
	}
	add(d:DestinoViaje){
		this.store.dispatch(NuevoDestinoAction({destino: {
			...d,
			voteUp: function (): void {
			},
			voteDown: function (): void {
			}
		}}))
	}
	elegir(d: DestinoViaje) {
		this.store.dispatch(ElegidoFavoritoAction({ destino: {
			...d,
			voteUp: function (): void {
			},
			voteDown: function (): void {
			}
		}}))
	}
}
