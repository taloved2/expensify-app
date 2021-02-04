import React from 'react';
import { connect } from 'react-redux';
import selectedExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';
import numeral from 'numeral';
export const ExpensesSummary = ({expenseCount, expensesTotal}) =>{
    const expenseWord = expenseCount===1? 'expense': 'expenses';
    const formattedExpensesTotal = numeral(expensesTotal/100).format('$0,0.00');     
    return (
        <div>
            <h1>Viewing {expenseCount} {expenseWord} totaling {formattedExpensesTotal}</h1>
        </div>
    );
};

const mapStateToProps = (state) =>{
    const visibleExpenses = selectedExpenses(state.expenses, state.filters);
    return {
        expenseCount: visibleExpenses.length,
        expensesTotal: selectExpensesTotal(visibleExpenses)
    };
};
export default connect(mapStateToProps)(ExpensesSummary);