import React from 'react';
import LoadingPage from '../../components/LoadingPage';
import {shallow} from 'enzyme';

test('should render Loading Page component correctly', ()=>{
    const wrapper = shallow(<LoadingPage />);
    expect(wrapper).toMatchSnapshot();
});