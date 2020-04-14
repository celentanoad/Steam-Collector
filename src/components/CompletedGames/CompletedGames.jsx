import React from 'react';
import {Route, Link} from 'react-router-dom';
import GameDetailsPage from '../../pages/GameDetailsPage/GameDetailsPage';


const CompletedGames = (props) => {
    return ( 
        <>
        {props.user._id === props.game.createdBy ?
        <Link 
            to={`/games/${props.game._id}`} 
            key={props.game.name} 
            game={props.game}
            >
                {props.game.name}
        </Link>
        :
        <></>}
   
        </>
    )
}
 
export default CompletedGames;