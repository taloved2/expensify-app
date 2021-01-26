import {setStartDate, setEndDate, sortByAmount, sortByDate, setTextFilter} from '../../actions/filters';
import moment from 'moment';

test('should make a set start date object', () =>{
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type:'SET_START_DATE',
        startDate:moment(0)
    })
});

test('should make a set end date object', () =>{
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    });
});

test('should make a set text filter object with provided values', ()=>{
    const action = setTextFilter('rent');
    expect(action).toEqual({
        type:'SET_TEXT_FILTER',
        text: 'rent'
    });
});

test('should make a set text filter object with default values', ()=>{
    const action = setTextFilter();
    expect(action).toEqual({
        type:'SET_TEXT_FILTER',
        text: ''
    });
});

test('should make a sort by amount object', ()=>{
    expect(sortByAmount()).toEqual({ type:'SORT_BY_AMOUNT' });
});

test('should make a sort by date object', ()=>{
    expect(sortByDate()).toEqual({ type:'SORT_BY_DATE' });
});