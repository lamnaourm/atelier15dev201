import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MdDelete } from "react-icons/md";
import { deletedepense } from '../redux/ActionsCreators';

export default function ListDepenses() {

    const depenses = useSelector(state => state.depenses)
    const dispatch = useDispatch()

  return (
    <div className='list'>

        <table>
            <thead>
                <tr>
                    <th>Titre</th>
                    <th>Montant</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
            {
                depenses.map(dep => 
                    <tr key={dep.id}>
                        <td>{dep.title}</td>
                        <td>{dep.price}</td>
                        <td><button onClick={() => dispatch(deletedepense(dep.id))}><MdDelete /></button></td>
                    </tr>
                    )
            }
            </tbody>
        </table>
    </div>
  )
}
