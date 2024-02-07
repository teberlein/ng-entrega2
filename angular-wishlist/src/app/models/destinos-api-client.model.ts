import { BehaviorSubject, Subject } from 'rxjs';
import { DestinoViaje } from './destino-viaje.model';

export class DestinosApiClient {
	destinos:DestinoViaje[];
 	current: Subject<DestinoViaje | null> = new BehaviorSubject<DestinoViaje | null>(null);
 	constructor() {
       this.destinos = [];
	}
	add(d:DestinoViaje){
	  this.destinos.push(d);
	}
	getAll(): DestinoViaje[]{
	  return this.destinos;
    }
/*  	getById(id:String): DestinoViaje {
		return this.destinos.filter(function(d) {return d.id.toString() === id; })[0];
	}  */
	elegir(d: DestinoViaje) {
		this.destinos.forEach(x => x.selected = false);
		d.selected = true;
 		this.current.next(d);
 	}
	subscribeOnChange(fn: any) {
		this.current.subscribe(fn);
	}
}