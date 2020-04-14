import React from 'react';
import CompletedGames from '../../components/CompletedGames/CompletedGames';
import CurrentGames from '../../components/CurrentGames/CurrentGames';
import NotPlayedGames from '../../components/NotPlayedGames/NotPlayedGames';
import {Link} from 'react-router-dom';
import { List } from 'semantic-ui-react';

const GamePage = (props) => {
    return ( 
        <>
            <h1>Welcome, {props.user.name}!</h1>
            <List celled>
                <List.Item>
                    <List.Content>
                        <List.Header>Completed Games: </List.Header>
                        {props.games.map(game =>
                        game.status === 'Completed' ?
                        <CompletedGames game={game} user={props.user}/>
                        :
                        <></>
                        )}
                    </List.Content>
                </List.Item>
                <List.Item>
                    <List.Content>
                        <List.Header>Currently Playing: </List.Header>
                        {props.games.map(game =>
                        game.status === 'Currently Playing' ?
                        <CurrentGames game={game} user={props.user}/>
                        :
                        <></>
                        )}
                    </List.Content>
                </List.Item>
                <List.Item>
                    <List.Content>
                        <List.Header>Not Yet Played: </List.Header>
                        {props.games.map(game =>
                        game.status === 'Not Yet Played' ?
                        <NotPlayedGames game={game} user={props.user}/>
                        :
                        <></>
                        )}
                    </List.Content>
                </List.Item>
            </List>
            
            <Link to='/add'>Add a new game!</Link>
        
        </>
    );
}
 
export default GamePage;