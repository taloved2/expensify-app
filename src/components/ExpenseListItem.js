import React from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';
const Item = ({id, description, amount, createdAt,note}) =>(
        <Link className="list-item" to={`/edit/${id}`} >
            <div>
                <h3 className="list-item__title" >description: {description}</h3>
                <span className="list-item__subtitle">{moment(createdAt).format('MMMM Do, YYYY')}</span>
                {note&&<p className="list-item__subdata">notes: {note}</p>}
            </div>
            <h3 className="list-item__data">
                {numeral(amount/100).format('$0,0.00')}
            </h3>
        </Link>
);

export default Item;