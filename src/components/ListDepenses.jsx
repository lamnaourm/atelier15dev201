import React from 'react'
import { useSelector } from 'react-redux'

export default function ListDepenses() {
    
    const depenses = useSelector(state => state.depenses)

  return (
    <div className='list'>

        <table>
            <thead>
                <th>Titre</th>
                <th>Montant</th>
            </thead>
            {
                depenses.map(dep => 
                    <tr key={dep.id}>
                        <td>{dep.title}</td>
                        <td>{dep.price}</td>
                    </tr>
                    )
            }
        </table>
    </div>
  )
}
