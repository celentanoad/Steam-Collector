import React from 'react';
import CompletedGames from '../../components/CompletedGames/CompletedGames';
import CurrentGames from '../../components/CurrentGames/CurrentGames';
import NotPlayedGames from '../../components/NotPlayedGames/NotPlayedGames';
import {Link} from 'react-router-dom';

const GamePage = (props) => {
    return ( 
        <>
        <h1>Game lists go here</h1>
        <CompletedGames games={props.games}/>
        <CurrentGames />
        <NotPlayedGames />
        
        <Link to='/add'>Add a new game!</Link>
        </>
    );
}
 
export default GamePage;