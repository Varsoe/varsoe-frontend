import { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as React from 'react';
import Loader from '../components/Loader';
import DashboardRoutes from './DashboardRoutes';
import Invoices from '../pages/Dashboard/Invoices';
import Payment from '../pages/Dashboard/Payment';
import Customers from '../pages/Dashboard/Customers';
import ViewInvoice from '../pages/Dashboard/Invoices/ViewInvoice';
import CreateInvoice from '../pages/Dashboard/Invoices/CreateInvoice';
import SignUp from '../pages/Auth/SignUp';
import ForgotPassword from '../pages/Auth/ForgotPassword';

const Dashboard = React.lazy(() => import('../pages/Dashboard/Home'));
const Login = React.lazy(() => import('../pages/Auth/Login'));
const RouterComponent: React.FC = () => (
  <Router>
    <Suspense fallback={<Loader />}>
      <Switch>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/signup" exact>
          <SignUp />
        </Route>
        <Route path="/forgot-password" exact>
          <ForgotPassword />
        </Route>
        <DashboardRoutes path="/" exact>
          <Dashboard />
        </DashboardRoutes>
        <DashboardRoutes path="/invoices" exact>
          <Invoices />
        </DashboardRoutes>
        <DashboardRoutes path="/invoices/view" exact>
          <ViewInvoice />
        </DashboardRoutes>
        <DashboardRoutes path="/invoices/create" exact>
          <CreateInvoice />
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
