import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import './NavBar.css';

 class NavBar extends Component {

  state = { activeItem: 'home' }

  handleItemClick = (e, { name}) =>
    this.setState({ activeItem: name})

  render() {
    const {activeItem} = this.state

     let nav = this.props.user ?
      <div>
        <Menu pointing secondary>
          <Menu.Item
            name='home'
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
            >
            <Link to ='/games' className='NavBar-link'>View All My Games</Link>
          </Menu.Item>
          <Menu.Item
            name='wishlist'
            active={activeItem === 'wishlist'}
            onClick={this.handleItemClick}
            >
            <Link to ='/wishlist' className='NavBar-link'>View Wishlist</Link>
          </Menu.Item>
          <Menu.Item
            name='users'
            active={activeItem === 'users'}
            onClick={this.handleItemClick}
            >
              <Link to='/users' className='NavBar-link'> View All Users</Link>
          </Menu.Item>
          <Menu.Menu position='right'>
            <Menu.Item
              name='logout'
              active={activeItem === 'logout'}
              onClick={this.handleItemClick}
              >
                <Link to='' className='NavBar-link' onClick={this.props.handleLogout}>Logout</Link>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </div>
      :
      <div>
        <Menu pointing secondary>
          <Menu.Item
            name='login'
            active={activeItem === 'login'}
            onClick={this.handleItemClick}
            >
            <Link to='/login' className='NavBar-link'>Login</Link>
          </Menu.Item>
          <Menu.Item
            name='signup'
            active={activeItem === 'signup'}
            onClick={this.handleItemClick}
            >
            <Link to='/signup' className='NavBar-link'>Sign up</Link>
          </Menu.Item>
        </Menu>
      </div>;
    
      return (
        <div className='NavBar'>
        {nav}
        </div>
      );
  };

}
export default NavBar;
