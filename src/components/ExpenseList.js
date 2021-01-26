import React from 'react';
import { connect } from 'react-redux';
import Item from './ExpenseListItem';
import selectedExpenses from '../selectors/expenses';
export const ExpenseList = (props) =>(
    <div>
        {
            props.expenses.length === 0 ?(
                    <p>No Expenses</p>
                )
            :
                (
                    props.expenses.map((expense)=>{
                        return <Item expense={expense} key={expense.id} />;
                    })
                )
        }
    </div>
);

const mapStoreToProps = (state) =>{
    return {
        expenses: selectedExpenses(state.expenses, state.filters)
    };
};

export default connect(mapStoreToProps)(ExpenseList);