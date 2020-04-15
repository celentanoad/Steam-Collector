import React, {Component} from 'react';
import * as gameAPI from '../../services/game-api';
import GameList from '../../components/GameList/GameList';

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
          <GameList 
            game={game} 
            user={this.props.user}
            handleAddtoList={this.props.handleAddtoList}
          />
        )}
      </>
     );
  }
}
 
export default AllGamesPage;
