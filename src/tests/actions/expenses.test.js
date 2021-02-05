import {startAddExpense, addExpense, editExpense, removeExpense } from '../../actions/expenses';
import expenses from '../fixures/expenses';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

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
    const action = addExpense(expenses[2]);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2]
    });
});

test('shoud add expense to database an store',(done)=>{
    const store = createMockStore([]);
    const expenseData = {
        description: 'dog',
        amount: 13500,
        note: 'nice',
        createdAt: 1000
    }
    store.dispatch(startAddExpense(expenseData)).then(()=>{
        const action = store.getActions();
        expect(action[0]).toEqual({
            type:'ADD_EXPENSE',
            expense:{
                id:expect.any(String),
                ...expenseData
            }
        });

       return database.ref(`expenses/${action[0].expense.id}`).once('value');
    }).then((snapshot)=>{
        expect(snapshot.val()).toEqual(expenseData);
        done();
    });;

});

test('shoud add expense with defaults to database an store',(done)=>{
    const store = createMockStore([]);

    store.dispatch(startAddExpense({})).then(()=>{
        const action = store.getActions();
        expect(action[0]).toEqual({
            type:'ADD_EXPENSE',
            expense:{
                id:expect.any(String),
                description:'',
                amount:0,
                note:'',
                createdAt:0
            }
        });

       return database.ref(`expenses/${action[0].expense.id}`).once('value');
    }).then((snapshot)=>{
        expect(snapshot.val()).toEqual({
            description:'',
            amount:0,
            note:'',
            createdAt:0
        });
        done();
    });;
});


// test('should setup add expense action objecct with default values', ()=>{
//     const action = addExpense();
//     expect(action).toEqual({
//         type: 'ADD_EXPENSE',
//         expense:{
//             description: '',
//             amount: 0,
//             createdAt: 0,
//             note:'',
//             id: expect.any(String)
//         }
//     })
// });