import React from 'react';
import {Route, Link} from 'react-router-dom';
import GameDetailsPage from '../../pages/GameDetailsPage/GameDetailsPage';
import './NotPlayedGames.css'

const NotPlayedGames = (props) => {
    return (  
        <div>
        <Link to={`/games/${props.game.id}`} key={props.game.name}>{props.game.name}</Link>
        </div>
    );
}
 
export default NotPlayedGames;