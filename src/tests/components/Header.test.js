import React from 'react';
import { Header } from '../../components/Header';
import { shallow } from 'enzyme';

test('should set Header correctly', ()=>{
    const wrapper = shallow(<Header startLogout = {()=>{ }} />);
    expect(wrapper).toMatchSnapshot();
});

test('should have called startLogout', ()=>{
    const startLogout = jest.fn();
    const wrapper = shallow(<Header startLogout = {startLogout} />);
    wrapper.find('button').simulate('click');
    expect(startLogout).toHaveBeenCalled();
});