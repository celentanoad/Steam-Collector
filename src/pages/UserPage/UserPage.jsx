import React from 'react';

const UserPage = (props) => {
  return (
    <React.Fragment>
      <h3>Hello, {props.user.name}</h3>
    </React.Fragment>
  );
}
 
export default UserPage;