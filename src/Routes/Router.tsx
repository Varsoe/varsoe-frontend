import { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as React from 'react';
import Loader from '../components/Loader';
import DashboardRoutes from './DashboardRoutes';

const Dashboard = React.lazy(() => import('../pages/Dashboard/Home'));
const Login = React.lazy(() => import('../pages/Auth/Login'));
const ForgotPassword = React.lazy(() => import('../pages/Auth/ForgotPassword'));
const ResetPassword = React.lazy(() => import('../pages/Auth/ResetPassword'));
const SignUp = React.lazy(() => import('../pages/Auth/SignUp'));
const CreateInvoice = React.lazy(() => import('../pages/Dashboard/Invoices/CreateInvoice'));
const ViewInvoice = React.lazy(() => import('../pages/Dashboard/Invoices/ViewInvoice'));
const Customers = React.lazy(() => import('../pages/Dashboard/Customer'));
const Payment = React.lazy(() => import('../pages/Dashboard/Payment'));
const Invoices = React.lazy(() => import('../pages/Dashboard/Invoices'));
const ViewCustomer = React.lazy(() => import('../pages/Dashboard/Customer/ViewCustomer'));

const RouterComponent: React.FC = () => (
  <Router>
    <Suspense fallback={<Loader height="100vh" />}>
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
        <Route path="/reset-password" exact>
          <ResetPassword />
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
        <DashboardRoutes path="/customers/view" exact>
          <ViewCustomer />
        </DashboardRoutes>
      </Switch>
    </Suspense>
  </Router>
);

export default RouterComponent;
