import React from 'react';
import {Link, Route} from 'react-router-dom';

const CurrentGames = (props) => {
    return ( 
        <>
        <Link to={`/games/${props.game.id}`} key={props.game.name}>{props.game.name}</Link>
        </>
     );
}
 
export default CurrentGames;