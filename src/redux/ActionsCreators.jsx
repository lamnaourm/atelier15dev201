import uuid from 'react-uuid'
import * as types from './ActionsTypes'

export const addbudget = (montant) => {
    return {
        type:types.add_budget,
        payload: montant
    }
}

export const addepense = (titre, montant) => {
    return {
        type:types.add_depense,
        payload: {id:uuid(), title:titre, price:montant}
    }
}

export const deletedepense = (id) => {
    return {
        type:types.delete_depense,
        payload: id
    }
}