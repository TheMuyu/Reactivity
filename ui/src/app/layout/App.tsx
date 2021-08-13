import { Container } from 'semantic-ui-react';
import Navbar from './Navbar';
import ActivityDashboard from '../../components/activities/dashboard/ActivityDashboard';
import { observer } from 'mobx-react-lite';
import { Route, useLocation } from 'react-router-dom';
import HomePage from '../../components/home/HomePage';
import ActivityForm from '../../components/activities/form/ActivityForm';
import About from '../../components/about/About';
import ActivityDetails from '../../components/activities/details/ActivityDetails';

function App() {
  const location = useLocation();

  return (
    <>
      <Route exact path='/' component={HomePage} />
      <Route path={'/(.+)'} render={() => (
        <>
          <Navbar />
          <Container style={{ marginTop: '7em' }}>
            <Route path='/about' component={About} />
            <Route exact path='/activities' component={ActivityDashboard} />
            <Route path='/activity/:id' component={ActivityDetails} />
            <Route key={location.key} path={['/create', '/edit/:id']} component={ActivityForm} />
          </Container>
        </>
      )} />
    </>
  );
}

export default observer(App);
