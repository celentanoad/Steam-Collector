import React from 'react';
import CompletedGames from '../../components/CompletedGames/CompletedGames';
import CurrentGames from '../../components/CurrentGames/CurrentGames';
import NotPlayedGames from '../../components/NotPlayedGames/NotPlayedGames';
import {Link} from 'react-router-dom';
import { Segment, Divider } from 'semantic-ui-react';
import './GamePage.css'

const GamePage = (props) => {
    return ( 
        <>
            <h1>Welcome, {props.user.name}!</h1>
            <Segment>
                <h3>Completed Games:</h3>
                <Divider horizontal>
                    {props.games.map(game =>
                    game.status === 'Completed' ?
                    <div className='GamePage-link'>
                        <CompletedGames 
                            game={game} 
                            user={props.user}
                            handleDeleteGame={props.handleDeleteGame}
                        />
                    </div>
                    :
                     <></>
                    )}
                </Divider>
            </Segment>
            <Segment>
                <h3>Currently Playing:</h3>
                <Divider horizontal>
                    {props.games.map(game =>
                    game.status === 'Currently Playing' ?
                    <div className='GamePage-link'>
                        <CurrentGames 
                            game={game} 
                            user={props.user}
                            handleDeleteGame={props.handleDeleteGame}
                        />
                    </div>
                    :
                     <></>
                    )}
                </Divider>
            </Segment>
            <Segment>
                <h3>Not Yet Played:</h3>
                <Divider horizontal>
                    {props.games.map(game =>
                    game.status === 'Not Yet Played' ?
                    <div className='GamePage-link'>
                        <NotPlayedGames 
                            game={game} 
                            user={props.user}
                            handleDeleteGame={props.handleDeleteGame}
                        /> 
                    </div>
                    :
                     <></>
                    )}
                </Divider>
            </Segment>
            <Link to='/add'>Add a new game!</Link>
        
        </>
    );
}
 
export default GamePage;