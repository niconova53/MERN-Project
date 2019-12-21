import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

// componentes
import homePage from './components/homePage/home';
import citiesPage from './components/citiesPage/citiesList';
import itinerarysPage from './components/itinerarysPage/itineraryList';
import profile from './components/account/profile';
import profileGoogle from './components/account/profile2';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <React.Fragment>
            <div className="container">
              <Switch>
                <Route path="/" exact component={homePage} />
                <Route path="/cities" component={citiesPage} />
                <Route path="/itinerarys/:id" component={itinerarysPage} />
                <Route path="/account" component={profile} />
                <Route path="/accountGoogle" component={profileGoogle} />
              </Switch>
            </div>
          </React.Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;
