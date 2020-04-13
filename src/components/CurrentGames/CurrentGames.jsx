import React from 'react';
import {Link, Route} from 'react-router-dom';
import GameDetailsPage from '../../pages/GameDetailsPage/GameDetailsPage';

const CurrentGames = (props) => {
    return ( 
        <>
        <Link to={`/games/${props.game.id}`} key={props.game.name}>{props.game.name}</Link>
          
        <Route exact path='/games/:id' render={(props) =>
            <GameDetailsPage {...props}/>
        } />
        </>
     );
}
 
export default CurrentGames;