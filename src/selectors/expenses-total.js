export default (expenses) =>{
    
    return expenses
            .map((expense)=>expense.amount)
            .reduce((sum,num)=> (sum + num),0);
}
