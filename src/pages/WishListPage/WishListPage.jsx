import React from 'react';
import WishListItem from '../../components/WishlistItem/WishListItem';

const WishListPage = (props) => {
    return (
        <>
        {props.wishlist.length > 0 ?
        props.wishlist.map(game =>
            <WishListItem game={game} handleRemoveFromList={props.handleRemoveFromList}/>
        )
        :
        <h4>There are no games on your wishlist</h4>}
        </>
    );
}
 
export default WishListPage;