import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addepense } from '../redux/ActionsCreators'
import uuid from 'react-uuid'

export default function AddDepenses() {

    const [titre, setTitre] = useState('')
    const [montant, setMontant] = useState('')
    const dispatch = useDispatch()

  return (
    <div>
        <input type="text" name="titre" id="titre" value={titre} onChange={(e) => setTitre(e.target.value)} placeholder='Saisir un titre ...'/>
        <input type="text" name="montant" id="montant" value={montant} onChange={(e) => setMontant(e.target.value)} placeholder='Saisir un montant ...'/>
        <button onClick={() => dispatch(addepense(titre, montant))}>Ajouter depense</button>
    </div>
  )
}
