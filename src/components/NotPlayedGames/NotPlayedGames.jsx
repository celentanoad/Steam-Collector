import React from 'react';
import {Route, Link} from 'react-router-dom';
import GameDetailsPage from '../../pages/GameDetailsPage/GameDetailsPage';
import './NotPlayedGames.css'

const NotPlayedGames = (props) => {
    return (  
        <div className='NotPlayedGames'>
        <Link to={`/games/${props.game.id}`} key={props.game.name}>{props.game.name}</Link>
          
        <Route exact path='/games/:id' render={(props) =>
            <GameDetailsPage {...props}/>
        } />
        </div>
    );
}
 
export default NotPlayedGames;