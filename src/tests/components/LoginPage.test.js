import { shallow } from 'enzyme';
import React from 'react';
import { LoginPage } from '../../components/LoginPage';


let startLogin, wrapper;
beforeEach(()=>{
    startLogin = jest.fn()
    wrapper = shallow(<LoginPage startLogin={startLogin}/>);
});
test('should render the LoginPage component',()=>{
    expect(wrapper).toMatchSnapshot();
});

test('should have been called when login button clicked', ()=>{
    wrapper.find('button').simulate('click');
    expect(startLogin).toHaveBeenCalled();
});