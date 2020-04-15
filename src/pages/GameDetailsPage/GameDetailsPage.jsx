import React, {Component} from 'react';
import * as gameAPI from '../../services/game-api';
import { Card, Button } from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import './GameDetails.css'


class GameDetailsPage extends Component {

    state = { 
        game: []
    }
    async componentDidMount() {
        const game = await gameAPI.getGame(this.props.match.params.id);
        this.setState({game: game})
    }

    render() { 
        return ( 
            <>
            <Card>
                <Card.Content textAlign='center'>
                    <Card.Header textAlign='center'>{this.state.game.name}</Card.Header>
                    <Card.Meta></Card.Meta>
                    <Card.Description className='GameDetails-list'>
                        <ul>Game Type: {this.state.game.type}</ul>
                        <ul>Status: {this.state.game.status}</ul>
                        {this.state.game.rating !== 'N/A' ?
                        <ul>Rating: {this.state.game.rating}/5</ul>
                        :
                        <></>}
                    </Card.Description>
                        {this.props.user._id === this.state.game.createdBy ?
                        <Link to={{pathname:'/edit', state: this.state.game}}>
                            <Button>Edit</Button>
                        </Link>
                        // <Link to={`/games/${this.state.game._id}/edit`}>Edit</Link>
                        :
                        <></>}
                        {this.props.user._id === this.state.game.createdBy ?
                        <Button
                        onClick={() => this.props.handleDeleteGame(this.state.game._id)}
                        >Delete</Button>
                        :
                        <></>}
                        
                </Card.Content>
            </Card>
            
            
            </>
         );
    }

}
 
export default GameDetailsPage;


