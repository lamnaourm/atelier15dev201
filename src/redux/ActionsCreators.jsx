import * as types from './ActionsTypes'

export const addbudget = (montant) => {
    return {
        type:types.add_budget,
        payload: montant
    }
}

export const addepense = (depense) => {
    return {
        type:types.add_depense,
        payload: depense
    }
}