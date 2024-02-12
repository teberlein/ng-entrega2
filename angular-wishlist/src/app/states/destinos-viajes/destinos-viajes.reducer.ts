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
    on(DestinosViajesActions.ElegidoFavoritoAction, (state, { destino }) => {
        // Crea una copia del array de items con selected = false
        const updatedItems = state.items.map(dest => {
            if(dest.nombre === destino.nombre && dest.selected === destino.selected && dest.url === destino.url){
                console.log('selected es true');
                return ({...dest, selected: true});
            }
            else {
                console.log('selected es false')
                return ({...dest, selected: false});
            }
        })

        // Retorna un nuevo estado con las modificaciones
        return { ...state, items: updatedItems, favorito: destino };
    })
    
/*     on(DestinosViajesActions.ElegidoFavoritoAction, (state, { destino }) => ({...state, favorito: destino})), */
)
