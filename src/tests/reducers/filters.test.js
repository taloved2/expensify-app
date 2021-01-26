import filtersReducers from '../../reducers/filters';
import moment from 'moment';

test('should setup default filters values', ()=>{
    const state = filtersReducers(undefined, { type: '@@INIT'});
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate:moment().endOf('month')
    });
});

test('should setup sortBy to amount',()=>{
    const state = filtersReducers(undefined, { type:'SORT_BY_AMOUNT' });
    expect(state.sortBy).toBe('amount');
});

test('should setup sortBy to date',()=>{
    const currentState ={
        text:'',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    };
    const action = {type:'SORT_BY_DATE'};
    const state = filtersReducers(currentState,action);
    expect(state.sortBy).toBe('date');
});

test('should set text filters',()=>{
    const text= 'rent';
    const state = filtersReducers(undefined, {type:'SET_TEXT_FILTER', text});
    expect(state.text).toBe(text);
}); 

test('should set startDate filter', ()=>{
    const startDate = moment();
    const state = filtersReducers(undefined, { type: 'SET_START_DATE', startDate });
    expect(state.startDate).toEqual(startDate);
});

test('should set endDate filter', ()=>{
    const endDate = moment();
    const state = filtersReducers(undefined, { type: 'SET_END_DATE', endDate});
    expect(state.endDate).toEqual(endDate);
});
