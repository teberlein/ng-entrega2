import { createReducer, on } from "@ngrx/store";
import { ElegidoFavoritoAction, NuevoDestinoAction } from "./destinos-viajes.actions";
import { DestinoViaje } from "../../models/destino-viaje.model";
import * as DestinosViajesActions from './destinos-viajes.actions'

 // ESTADO
 export interface DestinosViajesState {
    items: DestinoViaje[];
    loading: boolean;
    favorito: DestinoViaje | null;
}

export const initialState: DestinosViajesState = {
    items: [],
    loading: false,
    favorito: null
};


 // REDUCERS
 export const reducerDestinosViajes = createReducer(
    initialState,
    on(DestinosViajesActions.NuevoDestinoAction, (state, { destino }) => ({...state, items: [...state.items, destino]})),
    on(DestinosViajesActions.ElegidoFavoritoAction, (state, { destino }) => ({...state, favorito: destino})),
)
