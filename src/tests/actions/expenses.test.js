import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should return an object', () =>{
    const action = removeExpense({id: 'abc123'});
    expect(action).toEqual({
        type: "REMOVE_EXPENSE",
        id: "abc123"
    });
});

test('should return edit object', ()=>{
    const action = editExpense('abc123', {createdAt:100});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: 'abc123',
        updates: { createdAt:100}
    });
});

test('should setup add expense action objecct with provided info', ()=>{
    const expenseData = {
        description: 'winner',
        note: 'shit man',
        amount: 109500,
        createdAt: 1000,
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense:{
            ...expenseData,
            id: expect.any(String)
        }
    })
});

test('should setup add expense action objecct with default values', ()=>{
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense:{
            description: '',
            amount: 0,
            createdAt: 0,
            note:'',
            id: expect.any(String)
        }
    })
});