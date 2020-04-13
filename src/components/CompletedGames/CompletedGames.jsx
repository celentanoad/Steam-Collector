import React from 'react';

const CompletedGames = (props) => {
    return ( 
        <>
        <p>These games have been completed: </p>
        {props.games.map(game => 
            <div>{game.name}</div>)
     }
     </>
    )
}
 
export default CompletedGames;