import React from 'react';
import {Link} from 'react-router-dom';
const Item = (props) =>(
    <div>
        <Link to={`/edit/${props.expense.id}`} >
             <h3>description: {props.expense.description}</h3>
        </Link>
        <p>amount: {props.expense.amount}</p>
        <p>created at: {props.expense.createdAt}</p>
    </div>
);

export default Item;