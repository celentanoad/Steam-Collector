import React, {Component} from 'react';
import * as wishlistAPI from '../../services/wishlist-api';
import * as gameAPI from '../../services/game-api';

class AllGamesPage extends Component {
  state = { 
    games: []
   }

   async componentDidMount() {
    const games = await gameAPI.getAll();
    this.setState({ games });
  }

  render() { 
    return ( 
      <>
        {this.state.games.map(game =>
          <div>{game.name}</div>
        )}
      </>
     );
  }
}
 
export default AllGamesPage;
