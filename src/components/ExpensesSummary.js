import React from 'react';
import { connect } from 'react-redux';
import selectedExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';
import numeral from 'numeral';
import {Link} from 'react-router-dom';

export const ExpensesSummary = ({expenseCount, expensesTotal, hiddenExpenses}) =>{
    const expenseWord = expenseCount===1? 'expense': 'expenses';
    const formattedExpensesTotal = numeral(expensesTotal/100).format('$0,0.00');     
    const msgForHiddenExpenses = hiddenExpenses === 1? 'expense' : (hiddenExpenses>1 ? 'expenses': undefined);
    return (
        <div className="page-header">
            <div className="content-container">
                  <h1 className="page-header__title">Viewing <span>{expenseCount}</span> {expenseWord} totaling <span>{formattedExpensesTotal}</span></h1>
                  {hiddenExpenses === 0 ?
                    <p><b><i>Showing all expenses.</i></b></p>
                    :
                    <p className="page-header__title"><i>Hiding <span>{hiddenExpenses}</span> {msgForHiddenExpenses}.</i></p>}
                  <div className="page-header__actions">
                        <Link className="button" to="/create">Add Expense</Link>
                  </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) =>{
    const visibleExpenses = selectedExpenses(state.expenses, state.filters);
    return {
        hiddenExpenses: state.expenses.length - visibleExpenses.length,
        expenseCount: visibleExpenses.length,
        expensesTotal: selectExpensesTotal(visibleExpenses)
    };
};
export default connect(mapStateToProps)(ExpensesSummary);