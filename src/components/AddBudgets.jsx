import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addbudget } from '../redux/ActionsCreators'

export default function AddBudgets() {

    const dispatch = useDispatch()
    const [montant, setMontant] = useState()
    return (
        <div>
            <input type="number" name="montant" id="montant" value={montant} onChange={(e) => setMontant(e.target.value)} placeholder='saisir un montant ...' />
            <button onClick={() => dispatch(addbudget(montant))}>Ajouter budget</button>
        </div>
    )
}
