import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) =>(
    <div>
        <h1>Info</h1>
        <p>this is the info: {props.info}</p>
    </div>
);

const isAdminWarning = (WrappedComponent) =>
{
        return (props) => (
        <div>
            {props.isAdmin && <p>this is sensetive info.please don't share it</p>}
            <WrappedComponent {...props} />
        </div>
    );
}

const requireAuth = (WrappedComponent) =>{
    return (props) =>(
        <div>
            {
                props.isAuth?
                <WrappedComponent {...props} />
                :
                <p>Please log in to see Info</p>
            }
        </div>
    );

};

const AdminInfo = isAdminWarning(Info);
const AuthInfo = requireAuth(Info);

//ReactDOM.render(<AdminInfo isAdmin={true} info="this is some info" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuth={false} info="this is some info" />, document.getElementById('app'));