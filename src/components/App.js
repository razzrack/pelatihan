import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomeAuth from './HomeAuth';
import Event from './Event';
import Events from './Events';
import DetailEvent from './DetailEvent';
import Profil from './Profil';
import Auth from './Auth';
import Login from './Login';
import NewData from './NewData';
import NewDatas from './NewDatas';
import NewEvent from './NewEvent';
import NewEvents from './NewEvents';
import DataVerif from './DataVerif';
import DetailVerif from './DetailVerif';
import Submission from './cards/SubmissionCard';
import Trainee from './Trainee';
import About from './About';
import AboutAuth from './Abouts';
import Proposal from './Proposal';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
     <BrowserRouter>
      <Switch>
        <Route path={'/'} exact component={Login}/>
        <Auth>
          <Route path={'/homeauth'} component={HomeAuth} />
          <Route path={'/eventlist'} component={Events}/>
          <Route path={'/newdata'} component={NewData} />
          <Route path={'/newdata/:id'} component={NewData}/>
          <Route path={'/veriflist'} component={DataVerif} />
          <Route path={'/verif/:id'} component={DetailVerif} />
          <Route path={'/neweventlist'} component={Event} />
          <Route path={'/newevent/:id'} component={NewEvents} />
          <Route path={'/about'} component={About}/>
          <Route path={'/abouts'} component={AboutAuth}/>
          <Route path={'/profile'} component={Profil}/>
        </Auth>
      </Switch>
     </BrowserRouter>
    )
  }
}

export default App;