import React from 'react';
import { Switch, BrowserRouter, Route, Link, NavLink} from 'react-router-dom';  
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import LoginPage from '../components/LoginPage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';





const AppRouter = () => (
    <BrowserRouter>
    <div>
        <Header />
        <Switch>
            <Route path='/' component={LoginPage} exact={true} />
            <Route path='/dashbord' component={ExpenseDashboardPage} />
            <Route path='/create' component={AddExpensePage} />
            <Route path="/edit/:id" component={EditExpensePage} />
            <Route path='/help' component={HelpPage} />
            <Route component={NotFoundPage} />
        </Switch>
    </div>
    </BrowserRouter>
);

export default AppRouter;