import {
    startAddExpense, 
    addExpense, 
    editExpense, 
    removeExpense, 
    setExpenses, 
    startSetExpenses, 
    startRemoveExpense, 
    startEditExpense
} from '../../actions/expenses';
import expenses from '../fixures/expenses';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import database from '../../firebase/firebase';


const uid = 'testID' ;
const defaultAuthState = {auth: {uid}};
const createMockStore = configureMockStore([thunk]);

beforeEach((done)=>{
    const expenseData = {};
    expenses.forEach(({id, note, description, createdAt, amount})=>{
        expenseData[id] = { note, description, createdAt, amount};
    });
    database.ref(`users/${uid}/expenses`).set(expenseData).then(()=>done());
});

test('should return a remove action object', () =>{
    const action = removeExpense({id: 'abc123'});
    expect(action).toEqual({
        type: "REMOVE_EXPENSE",
        id: "abc123"
    });
});
test('should remove expenses from firebase',(done)=>{
    const store = createMockStore(defaultAuthState);
    const id = expenses[1].id;
    store.dispatch(startRemoveExpense({id})).then(()=>{
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type:'REMOVE_EXPENSE',
            id
        });
        return database.ref(`users/${uid}/expenses/${id}`).once('value').then((snapshot)=>{
            expect(snapshot.val()).toBeFalsy();
            done();
        });
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

test('should edit an expense in the db', (done)=>{
    const store = createMockStore(defaultAuthState);
    const id = expenses[1].id;
    const updates = {
        description:'this is an update',
        };
    store.dispatch(startEditExpense(id,updates)).then(()=>{
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type:'EDIT_EXPENSE',
            id,
            updates
        });
        return database.ref(`users/${uid}/expenses/${id}`).once('value').then((snapshot)=>{
            expect(snapshot.val().description).toEqual(updates.description);
            done();
        });
    });
});
test('should setup add expense action object with provided info', ()=>{
    const action = addExpense(expenses[2]);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2]
    });
});

test('should add expense to database an store',(done)=>{
    const store = createMockStore(defaultAuthState);
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

       return database.ref(`users/${uid}/expenses/${action[0].expense.id}`).once('value');
    }).then((snapshot)=>{
        expect(snapshot.val()).toEqual(expenseData);
        done();
    });;

});

test('shoud add expense with defaults to database an store',(done)=>{
    const store = createMockStore(defaultAuthState);

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

       return database.ref(`users/${uid}/expenses/${action[0].expense.id}`).once('value');
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


test('should setup set expenses object with data', ()=>{
    const action = setExpenses(expenses);
    expect(action).toEqual({
        type:'SET_EXPENSES',
        expenses
    });
});

test('should set the expenses from firebase', (done)=>{
    const store = createMockStore(defaultAuthState);
    store.dispatch(startSetExpenses()).then(()=>{
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type:'SET_EXPENSES',
            expenses
        });
        done();
    }); 
});

