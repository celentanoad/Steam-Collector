import React, {Component} from 'react';
import * as gameAPI from '../../services/game-api';
import GameListItem from '../../components/GameListItem/GameListItem';

class AllGamesPage extends Component {
  state = { 
    games: []
   }

   async componentDidMount() {
    const games = await gameAPI.getAll();
    const filteredGames = games.filter(game => game.createdBy !== this.props.user._id)
    this.setState({ games: filteredGames });
  }

  render() { 
    return ( 
      <>
        {this.state.games.map(game =>
          <GameListItem 
            game={game} 
            user={this.props.user}
            handleAddtoList={this.props.handleAddtoList}
            wishlist={this.props.wishlist}
          />
        )}
      </>
     );
  }
}
 
export default AllGamesPage;
