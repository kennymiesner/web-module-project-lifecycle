import React from 'react'
import User from './User'

class Users extends React.Component {
  componentDidMount() {
  }
  
  render() {
    return (
      <>
        {this.props.users.map(user => (
          <User key={user.id} user={user}/>
        ))}
      </>
    )
  }
}

export default Users
