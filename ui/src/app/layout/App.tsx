import { Container } from 'semantic-ui-react';
import Navbar from './Navbar';
import ActivityDashboard from '../../components/activities/dashboard/ActivityDashboard';
import { observer } from 'mobx-react-lite';
import { Route, Switch, useLocation } from 'react-router-dom';
import HomePage from '../../components/home/HomePage';
import ActivityForm from '../../components/activities/form/ActivityForm';
import About from '../../components/about/About';
import ActivityDetails from '../../components/activities/details/ActivityDetails';
import TestError from '../../components/errors/TestError';
import { ToastContainer } from 'react-toastify';
import NotFound from '../../components/errors/NotFound';
import ServerError from '../../components/errors/ServerError';

function App() {
  const location = useLocation();

  return (
    <>
      <ToastContainer position='top-right' />
      <Route exact path='/' component={HomePage} />
      <Route path={'/(.+)'} render={() => (
        <>
          <Navbar />
          <Container style={{ marginTop: '7em' }}>
            <Switch>
              <Route path='/about' component={About} />
              <Route exact path='/activities' component={ActivityDashboard} />
              <Route path='/activity/:id' component={ActivityDetails} />
              <Route key={location.key} path={['/create', '/edit/:id']} component={ActivityForm} />
              <Route path='/errors' component={TestError} />
              <Route path='/server-error' component={ServerError} />
              <Route component={NotFound} />
            </Switch>
          </Container>
        </>
      )} />
    </>
  );
}

export default observer(App);
