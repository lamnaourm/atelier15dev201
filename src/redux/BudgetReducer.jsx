import uuid from "react-uuid";
import * as types from './ActionsTypes'


const initial_state = {
    budget: 2000,
    depenses: [
        {
            id:uuid(),
            title: 'Voiture',   
            price: 3000
        },
        {
            id:uuid(),
            title: 'Achat PC',   
            price: 10000
        },
    ]
}

const BudgetReducer = (state = initial_state, action) => {
    let newState = {...state};

    switch(action.type){
        case types.add_budget: 
            newState.budget += parseFloat(action.payload)
        break;
        case types.add_depense: 
            newState.depenses = [...newState.depenses, action.payload]
        break;
        case types.delete_depense: 
            newState.depenses =  newState.depenses.filter(dep => dep.id != action.payload)
        break;
    }

    return newState;
}

export default BudgetReducer