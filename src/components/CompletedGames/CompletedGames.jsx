import React from 'react';
import {Route, Link} from 'react-router-dom';
import GameDetailsPage from '../../pages/GameDetailsPage/GameDetailsPage';


const CompletedGames = (props) => {
    return ( 
        <>
        <Link to={`/games/${props.game.id}`} key={props.game.name}>{props.game.name}</Link>
          
        <Route exact path='/games/:id' render={(props) =>
            <GameDetailsPage {...props}/>
        } />
        </>
    )
}
 
export default CompletedGames;