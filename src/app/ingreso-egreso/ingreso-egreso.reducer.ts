import { createReducer, on } from '@ngrx/store';
import { setItems, UnsetItems } from './ingreso-egreso.actions';
import { IngresoEgreso } from '../models/ingresoEgreso.models';
import { AppState } from '../app.reducer';

export interface State {
    items: IngresoEgreso[]; 
}

export const initialState: State = {
   items: [],
}

export interface AppStatewhithIngreso extends AppState{
    ingresoEgresos:State
}


const _ingresoEgresoReducer = createReducer(initialState,

    on(setItems, (state,{items}) => ({ ...state, items: [...items]})),
    on(UnsetItems, state => ({ ...state, items: []})),

);

export function ingresoEgresoReducer(state, action) {
    return _ingresoEgresoReducer(state, action);
}