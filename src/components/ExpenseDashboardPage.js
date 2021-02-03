import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpenseSummay from './ExpensesSummary';
const ExpenseDashboardPage = () => (
    <div>
        <ExpenseSummay />
        <ExpenseListFilters />
        <ExpenseList />
    </div>
);

export default ExpenseDashboardPage;