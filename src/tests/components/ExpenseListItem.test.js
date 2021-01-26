import React from 'react';
import { shallow } from 'enzyme';
import ExepnseListItem  from '../../components/ExpenseListItem';
import expenses from '../fixures/expenses';

test('should render an expense item', ()=>{
    const wrapper = shallow(<ExepnseListItem expense={expenses[0]} />);
    expect(wrapper).toMatchSnapshot();
});