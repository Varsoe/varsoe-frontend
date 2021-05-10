import * as React from 'react';
import { Route, RouteProps } from 'react-router';
import Layout from '../layout/index';

export type DashboardRoutesProps = RouteProps;
const DashboardRoutes: React.FC<React.PropsWithChildren<DashboardRoutesProps>> = ({ children, ...rest }) => (
  <Route {...rest}>
    <Layout>{children}</Layout>
  </Route>
);

export default DashboardRoutes;
