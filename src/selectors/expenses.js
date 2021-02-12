//Get visible expenses
import moment from 'moment';

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate,note, minAmount, maxAmount } ) =>{
    return expenses.filter((expense)=>{

        const createdAtMoment = moment(expense.createdAt);
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
        const startDateMatch = startDate? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
        const endDateMatch =  endDate? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
        const noteMatch = note? expense.note.toLowerCase().includes(note) : true;
        const minAmountMatch = minAmount !== 0? (minAmount*100)<=expense.amount : true;
        const maxAmountMatch =  maxAmount !== 0? expense.amount<=(maxAmount*100) : true;
        return textMatch && startDateMatch && endDateMatch&&noteMatch&&minAmountMatch&&maxAmountMatch;
    }).sort((a,b)=>{
        if(sortBy==='date'){
            return a.createdAt<b.createdAt? 1: -1;
        }
        if(sortBy==='amount'){
            return a.amount<b.amount? 1 : -1;
        }
    });
};

export default getVisibleExpenses;