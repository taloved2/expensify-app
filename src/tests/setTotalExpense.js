const expenses = [
    {
        id: '1',
        description: 'Gum',
        note: '',
        amount: 1,
    },
    {
        id: '2',
        description: 'Rent',
        note: 's',
        amount: 1,
        },
    {
        id: '3',
        description: 'Credit card',
        note: '',
        amount: 11,
        }
];


const getExpensesTotal = (expenses) =>{
     const amounts = expenses.map((expense)=>{
        return expense.amount; 
    });
    return amounts.reduce((total,num)=>{
        return total + num;
    });
};

console.log(getExpensesTotal(expenses));
