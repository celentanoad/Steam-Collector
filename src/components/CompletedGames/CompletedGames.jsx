import React from 'react';
import {Link} from 'react-router-dom';

const CompletedGames = (props) => {
    return ( 
        <>
            {props.user._id === props.game.createdBy ?
            <Link 
                to={`/games/${props.game._id}`}
                key={props.game.name}
                handleDeleteGame={props.handleDeleteGame}
                user={props.user}
            >{props.game.name}</Link>
            :
            <></>}
        </>
    )
}
 
export default CompletedGames;