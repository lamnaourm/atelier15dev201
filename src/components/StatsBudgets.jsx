import React from 'react'
import { useSelector } from 'react-redux'
import { FaMoneyBill } from "react-icons/fa6";
import { SiExpensify } from "react-icons/si";
import { FaScaleBalanced } from "react-icons/fa6";

export default function StatsBudgets() {

    const budget = useSelector(state => state.budget)
    const depenses = useSelector(state => state.depenses)

    const som = depenses.reduce((s, dep) => s + parseFloat(dep.price), 0)
    return (
        <div className='stats'>
            <div>
                <FaMoneyBill />
                BUDGET : {budget}
            </div>

            <div>
                <SiExpensify />
                DEPENSES : {som}
            </div>

            <div>
                <FaScaleBalanced/>
                ECART : {budget - som}
            </div>

        </div>
    )
}
