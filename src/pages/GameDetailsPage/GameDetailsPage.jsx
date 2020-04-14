import React, {Component} from 'react';
import * as gameAPI from '../../services/game-api';
import { Card } from 'semantic-ui-react';


class GameDetailsPage extends Component {
    state = { 
        game: []
    }

    async componentDidMount() {
        const game = await gameAPI.getGame(this.props.match.params.id);
        console.log(game);
        this.setState({game: game})
    }

    render() { 
        return ( 
            <>
            <Card>
                <Card.Content>
                    <Card.Header textAlign='center'>{this.state.game.name}</Card.Header>
                    <Card.Meta></Card.Meta>
                    <Card.Description>
                        <ul>Game Type: {this.state.game.type}</ul>
                        <ul>Status: {this.state.game.status}</ul>
                        {this.state.game.rating !== 'N/A' ?
                        <ul>Rating: {this.state.game.rating}/5</ul>
                        :
                        <></>}
                    </Card.Description>
                </Card.Content>
            </Card>
            
            
            </>
         );
    }
}
 
export default GameDetailsPage;


