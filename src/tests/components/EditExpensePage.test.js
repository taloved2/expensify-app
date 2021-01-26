import React from 'react';
import {shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixures/expenses';

let removeExpense, editExpense, history, wrapper;
beforeEach(()=>{
    removeExpense = jest.fn();
    editExpense = jest.fn();
    history = {push: jest.fn() };
    wrapper = shallow(
        <EditExpensePage 
        history={history} 
        editExpense={editExpense} 
        removeExpense={removeExpense} 
        expense={expenses[2]}
        />);
});

test('should render edit expense page correctly',()=>{
    expect(wrapper).toMatchSnapshot();
});

test('should handle editExpense',()=>{
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(editExpense).toHaveBeenLastCalledWith(expenses[2].id,expenses[2]);
});

test('should handle removeExpense',()=>{
    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(removeExpense).toHaveBeenLastCalledWith({id: expenses[2].id});
});