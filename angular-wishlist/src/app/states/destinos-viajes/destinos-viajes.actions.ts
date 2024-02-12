import { createAction, props } from "@ngrx/store";
import { DestinoViaje } from "../../models/destino-viaje.model";

 // ACCIONES
 export enum DestinosViajesActionTypes {
    NUEVO_DESTINO = '[Destinos Viajes] Nuevo',
    ELEGIDO_FAVORITO = '[Destinos Viajes] Favorito'
}

export const NuevoDestinoAction = createAction(
    DestinosViajesActionTypes.NUEVO_DESTINO,
    props<{ destino: DestinoViaje; }>()
)

export const ElegidoFavoritoAction = createAction(
    DestinosViajesActionTypes.ELEGIDO_FAVORITO,
    props<{ destino: DestinoViaje; }>()
)