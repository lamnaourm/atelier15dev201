import uuid from "react-uuid";

const initial_state = {
    budget: 0,
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



    return newState;
}

export default BudgetReducer