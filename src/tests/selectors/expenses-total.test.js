import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixures/expenses';

test('should return 0 if no expenses',()=>{
    const total = selectExpensesTotal([]);
    expect(total).toBe(0);
});

test('should add up  the amount  for one expense',()=>{
    const total = selectExpensesTotal([expenses[0]]);
    expect(total).toBe(195);
});

test('should add up  the amount  for multiple expenses',()=>{
    const total = selectExpensesTotal(expenses);
    expect(total).toBe(114195);
});