import React from 'react';
import {Button, Card} from 'semantic-ui-react';

const WishListItem = (props) => {
    return ( 
        <>
            <Card>
                <Card.Content>
                    <Card.Header>{props.game.name}</Card.Header>
                    <Card.Meta>{props.game.rating !== 'N/A' ?
                        <ul>Rating: {props.game.rating}/5</ul>
                        :
                        <></>}</Card.Meta>
                    <Card.Description>Game Type: {props.game.type}</Card.Description>
                </Card.Content>
            <Button onClick={() => props.handleRemoveFromList(props.game._id)}>Remove from Wishlist</Button>
            </Card>
        </>
     );
}
 
export default WishListItem;