import React from 'react';
import {Button} from 'semantic-ui-react';

const WishListItem = (props) => {
    return ( 
        <>
            {props.game.name}
            <Button onClick={() => this.props.handleRemoveFromList(props.game.id)}>Remove from Wishlist</Button>
        </>
     );
}
 
export default WishListItem;