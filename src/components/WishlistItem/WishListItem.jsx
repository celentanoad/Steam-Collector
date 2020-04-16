import React from 'react';
import {Button} from 'semantic-ui-react';

const WishListItem = (props) => {
    return ( 
        <>
            {props.game.name}
            <Button onClick={() => props.handleRemoveFromList(props.game._id)}>Remove from Wishlist</Button>
        </>
     );
}
 
export default WishListItem;