import React from 'react'
import { useSelector } from 'react-redux'

export default function ListDepenses() {

    const depenses = useSelector(state => state.depenses)

  return (
    <div className='list'>

        <table>
            <thead>
                <tr>
                    <th>Titre</th>
                    <th>Montant</th>
                </tr>
            </thead>
            <tbody>
            {
                depenses.map(dep => 
                    <tr key={dep.id}>
                        <td>{dep.title}</td>
                        <td>{dep.price}</td>
                    </tr>
                    )
            }
            </tbody>
        </table>
    </div>
  )
}
