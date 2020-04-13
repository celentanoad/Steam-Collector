import React from 'react';
import CompletedGames from '../../components/CompletedGames/CompletedGames';
import CurrentGames from '../../components/CurrentGames/CurrentGames';
import NotPlayedGames from '../../components/NotPlayedGames/NotPlayedGames';
import {Link} from 'react-router-dom';

const GamePage = (props) => {
    return ( 
        <>
            <h1>Welcome, {props.user.name}!</h1>
            <div>Completed Games: </div>
            {props.games.map(game =>
                game.status === 'Completed' ?
                <CompletedGames game={game} user={props.user}/>
                :
                <></>
            
            )}
            <div>Currently Playing: </div>
            {props.games.map(game =>
                game.status === 'Currently Playing' ?
                <CurrentGames game={game} user={props.user}/>
                :
                <></>
            )}
            <div>Not Yet Played: </div>
            {props.games.map(game =>
                game.status === 'Not Yet Played' ?
                <NotPlayedGames game={game} user={props.user}/>
                :
                <></>
            )}
        
            <Link to='/add'>Add a new game!</Link>
        
        </>
    );
}
 
export default GamePage;