import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import UserPage from '../UserPage/UserPage'
import * as gameAPI from '../../services/game-api';
import * as userAPI from '../../services/user-api';
import GamePage from '../GamePage/GamePage';
import NavBar from '../../components/NavBar/NavBar';
import WishListPage from '../WishListPage/WishListPage';
import NewGamePage from '../NewGamePage/NewGamePage';
import GameDetailsPage from '../GameDetailsPage/GameDetailsPage';

class App extends Component {
  state = {
    // Initialize user if there's a token, otherwise null
    user: userAPI.getUser(),
    games: [],
    wishlist: []
  };

  /*--------------------------- Callback Methods ---------------------------*/

  handleLogout = () => {
    userAPI.logout();
    this.setState({ user: null });
  }

  handleSignupOrLogin = () => {
    this.setState({user: userAPI.getUser()});
  }

  handleAddGame =  async newGameData => {
    const newGame = await gameAPI.create(newGameData);
    this.setState(state => ({
      games: [...state.games, newGame]
    }), this.props.history.push('/games'))
  }

  /*-------------------------- Lifecycle Methods ---------------------------*/

  async componentDidMount() {
    const games = await gameAPI.getAll();
    this.setState({ games });
  }

  /*-------------------------------- Render --------------------------------*/

  render() {
    return (
      <div className="App">
        <h1 className='App-title'>Steam Collector</h1>
        <NavBar
          user={this.state.user}
          handleLogout={this.handleLogout}
        />
        <Switch>
          <Route exact path='/login' render={({ history }) => 
            <LoginPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
          <Route exact path='/signup' render={({ history }) => 
            <SignupPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
          <Route exact path='/games' render={() => 
            userAPI.getUser() ? 
              <GamePage 
                user={this.state.user}
                games={this.state.games}
              />
            :
              <Redirect to='/login'/>
          }/>
          <Route exact path='/users' render={() => 
            userAPI.getUser() ? 
              <UserPage user={this.state.user}/>
            :
              <Redirect to='/login'/>
          }/>
          <Route exact path='/wishlist' render={() =>
            userAPI.getUser() ? 
              <WishListPage games={this.state.wishlist} />
              :
              <Redirect to='/login'/>
          }/>
          <Route exact path='/add' render={() =>
            userAPI.getUser() ?
              <NewGamePage handleAddGame={this.handleAddGame}/>
              :
              <Redirect to='/login' />
          }/>
        </Switch>
      </div>
    );
  }
}

export default App;
