import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import AllGamesPage from '../AllGamesPage/AllGamesPage'
import * as gameAPI from '../../services/game-api';
import * as userAPI from '../../services/user-api';
import * as wishlistAPI from '../../services/wishlist-api';
import GamePage from '../GamePage/GamePage';
import NavBar from '../../components/NavBar/NavBar';
import WishListPage from '../WishListPage/WishListPage';
import NewGamePage from '../NewGamePage/NewGamePage';
import GameDetailsPage from '../GameDetailsPage/GameDetailsPage';
import EditGamePage from '../EditGamePage/EditGamePage';

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
    this.setState({
      user: userAPI.getUser(),
      wishlist: wishlistAPI.getList()
    });
  }

  handleAddGame =  async newGameData => {
    const newGame = await gameAPI.create(newGameData);
    this.setState(state => ({
      games: [...state.games, newGame]
    }), this.props.history.push('/games'))
  }

  handleDeleteGame = async id => {
    await gameAPI.deleteGame(id);
    this.setState(state => ({
      games: state.games.filter(game => game._id !== id)
    }), () => this.props.history.push('/games'));
  }

  handleUpdateGame = async updatedGameData => {
    const updatedGame = await gameAPI.update(updatedGameData);
    const newGamesList = this.state.games.map(game =>
      game._id === updatedGame._id ? updatedGame : game);
      this.setState(
        {games: newGamesList}, () => this.props.history.push('/games')
      );
  }

  handleAddtoList = async wishlistGame => {
    console.log(wishlistGame);
    const newGame = await wishlistAPI.add(wishlistGame);
    this.setState(state => ({
      wishlist: [...state.wishlist, newGame]
    }), this.props.history.push('/allgames'))
  }
  
  handleRemoveFromList = async wishlistId => {
    console.log(wishlistId);
    await wishlistAPI.remove(wishlistId);
    this.setState(state => ({
      wishlist: state.wishlist.filter(game => game._id !== wishlistId)
    }), () => this.props.history.push('/wishlist'));
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
          <Route exact path='/games' render={({history}) => 
            userAPI.getUser() ? 
              <GamePage 
                user={this.state.user}
                games={this.state.games}
                handleDeleteGame={this.handleDeleteGame}
              />
            :
              <Redirect to='/login'/>
          }/>
          <Route exact path='/allgames' render={({history}) => 
            userAPI.getUser() ? 
              <AllGamesPage 
                user={this.state.user} 
                handleAddtoList={this.handleAddtoList}
                wishlist={this.state.wishlist}
              />
            :
              <Redirect to='/login'/>
          }/>
          <Route exact path='/wishlist' render={({history}) =>
            userAPI.getUser() ? 
              <WishListPage wishlist={this.state.wishlist} handleRemoveFromList={this.handleRemoveFromList} />
              :
              <Redirect to='/login'/>
          }/>
          <Route exact path='/add' render={({history}) =>
            userAPI.getUser() ?
              <NewGamePage handleAddGame={this.handleAddGame}/>
              :
              <Redirect to='/login' />
          }/>
            <Route exact path='/games/:id' render={(props) =>
              userAPI.getUser() ?
              <GameDetailsPage {...props} handleDeleteGame={this.handleDeleteGame} user={this.state.user}/>
              :
              <Redirect to='/login' />
          } />
            <Route exact path='/edit' render={({history, location}) =>
              userAPI.getUser() ?
              <EditGamePage
                handleUpdateGame={this.handleUpdateGame}
                location={location}
              />
              :
              <Redirect to='/login' />
          } />
        </Switch>
      </div>
    );
  }
}

export default App;
