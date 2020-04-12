import React from 'react';
import CompletedGames from '../../components/CompletedGames/CompletedGames';
import CurrentGames from '../../components/CurrentGames/CurrentGames';
import NotPlayedGames from '../../components/NotPlayedGames/NotPlayedGames';


const GamePage = (props) => {
    return ( 
        <>
        <h1>Game lists go here</h1>
        <CompletedGames />
        <CurrentGames />
        <NotPlayedGames />
        </>
    );
}
 
export default GamePage;