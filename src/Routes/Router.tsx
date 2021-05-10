import { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as React from 'react';
import Loader from '../components/Loader';
import DashboardRoutes from './DashboardRoutes';
import Invoices from '../pages/Dashboard/Invoices';
import Payment from '../pages/Dashboard/Payment';
import Customers from '../pages/Dashboard/Customers';

const Dashboard = React.lazy(() => import('../pages/Dashboard/Home'));
const Login = React.lazy(() => import('../pages/Auth/Login'));
const RouterComponent: React.FC = () => (
  <Router>
    <Suspense fallback={<Loader />}>
      <Switch>
        <Route path="/login" exact>
          <Login />
        </Route>
        <DashboardRoutes path="/" exact>
          <Dashboard />
        </DashboardRoutes>
        <DashboardRoutes path="/invoices" exact>
          <Invoices />
        </DashboardRoutes>
        <DashboardRoutes path="/payment" exact>
          <Payment />
        </DashboardRoutes>
        <DashboardRoutes path="/customers" exact>
          <Customers />
        </DashboardRoutes>
      </Switch>
    </Suspense>
  </Router>
);

export default RouterComponent;
