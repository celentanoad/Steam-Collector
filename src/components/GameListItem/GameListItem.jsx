import React from 'react';
import {Card, Button} from 'semantic-ui-react';

const GameListItem = (props) => {
    return ( 
        <>
                <Card>
                <Card.Content textAlign='center'>
                    <Card.Header textAlign='center'>{props.game.name}</Card.Header>
                    <Card.Meta></Card.Meta>
                    <Card.Description className='GameDetails-list'>
                        <ul>Game Type: {props.game.type}</ul>
                        {props.game.rating !== 'N/A' ?
                        <ul>Rating: {props.game.rating}/5</ul>
                        :
                        <></>}
                    </Card.Description>
                </Card.Content>
                {props.wishlist.some(wishlistGame =>
                    wishlistGame._id === props.game._id) ? 
                    <Button className='disabled'>Already Added!</Button>
                    :
                    <Button onClick={() => props.handleAddtoList(props.game)}>Add to Wishlist</Button>
                }
                </Card>
        </>
    );
}
 
export default GameListItem;
