import expensesReducer from '../../reducers/expenses';
import expenses from '../fixures/expenses';

test('should set up default state',()=>{
    const state = expensesReducer(undefined,{ type: '@@INIT'});
    expect(state).toEqual([]);
});

test('should remove expense by id',()=>{
    const action ={
        type:'REMOVE_EXPENSE',
        id:expenses[1].id
    };
    const state = expensesReducer(expenses,action);
    expect(state).toEqual([expenses[0],expenses[2]]);
});

test('should not remove expense if id not found',()=>{
    const action ={
        type:'REMOVE_EXPENSE',
        id:'-1'
    };
    const state = expensesReducer(expenses,action);
    expect(state).toEqual(expenses);
});

test('should add an expense', () =>{
    const expense = {
        id:'4',
        description: 'Winner',
        note:'',
        amount: 10000,
        createdAt: 10
    };
    const state = expensesReducer(expenses, {type: 'ADD_EXPENSE', expense});
    expect(state).toEqual([...expenses, expense ]);
});

test('should edit an expense', () =>{
    const note = 'check';
    const id = expenses[1].id;
    const updates = { note };
    const action = {type:'EDIT_EXPENSE',id ,updates};
    const state = expensesReducer(expenses, action);
    expect(state[1].note).toEqual('check');
});

test('should not edit an expense if i was not found', () =>{
    const note = 'check';
    const id = '-1';
    const updates = { note };
    const action = {type:'EDIT_EXPENSE',id ,updates};
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should set expenses',()=>{
    const action = {
        type:'SET_EXPENSES',
        expenses
    };
    const state = expensesReducer(undefined,action);
    expect(state).toEqual(expenses);
});