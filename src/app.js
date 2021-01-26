import React from 'react';
import ReactDOM from 'react-dom'; 
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses'; 
import 'normalize.css/normalize.css'; //מאפס את הגדרות הדפדפן השונים לפי העיצוב שלהם ומתחיל את כולם מאותו המקום
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

store.dispatch(addExpense({description:'Water bill', node:'none', amount:300}));
store.dispatch(addExpense({description:'Gas bill', node:'none', amount:0, createdAt:1000}));
store.dispatch(addExpense({description:'Water bill', node:'none', amount:100}));
console.log(getVisibleExpenses(store.getState().expenses,store.getState().filters));

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));