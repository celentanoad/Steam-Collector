import React, {Component} from 'react';
import WishListItem from '../../components/WishlistItem/WishListItem';
import * as wishlistAPI from '../../services/wishlist-api';

class WishListPage extends Component {
    state = { 
        wishlist: []
    }

    async componentDidMount() {
        const wishlist = await wishlistAPI.getList();
        this.setState({ wishlist });
      }

    render() { 
        return ( 
            <>
            {this.props.wishlist.length > 0 ?
            this.props.wishlist.map(game =>
                <WishListItem game={game} handleRemoveFromList={this.props.handleRemoveFromList}/>
            )
            :
            <h4>There are no games on your wishlist</h4>}
            </>
         );
    }
}
 
export default WishListPage;

// const WishListPage = (props) => {
//     return (
//         <>
//         {props.wishlist.length > 0 ?
//         props.wishlist.map(game =>
//             <WishListItem game={game} handleRemoveFromList={props.handleRemoveFromList}/>
//         )
//         :
//         <h4>There are no games on your wishlist</h4>}
//         </>
//     );
// }
 
// export default WishListPage;