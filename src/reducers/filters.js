import moment from 'moment';

const filtersReducerDefaultState = {
    text: '',
    note:'',
    minAmount:0,
    maxAmount:0,
    sortBy: 'date',
    startDate : moment().startOf('month'),
    endDate: moment().endOf('month')
};
const filtersReducer = (state = filtersReducerDefaultState, action) =>{
    switch(action.type){
        case 'SET_TEXT_FILTER':
            return {...state,
            text:action.text
        };
        case 'SET_NOTE_FILTER':
            return {...state,
            note:action.note
        };
        case 'SET_MIN_AMOUNT':
            return {...state,
                minAmount:action.minAmount
        };
        case 'SET_MAX_AMOUNT':
            return {...state,
                maxAmount:action.maxAmount
        };
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy : 'amount'
            };
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy : 'date'
            };
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
                };
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
                    };
        default:
            return state;
    }
};

export default filtersReducer;