import React from 'react'
import { useSelector } from 'react-redux'

export default function StatsBudgets() {

    const budget = useSelector(state => state.budget)
    const depenses = useSelector(state => state.depenses)

    const som = depenses.reduce((s, dep) => s + parseFloat(dep.price), 0)
    return (
        <div className='stats'>
            <div>
                BUDGET : {budget}
            </div>

            <div>
                DEPENSES : {som}
            </div>

            <div>
                ECART : {budget - som}
            </div>

        </div>
    )
}
