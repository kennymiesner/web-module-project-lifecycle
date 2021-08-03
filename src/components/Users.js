import React from 'react'
import User from './User'

class Users extends React.Component {
  componentDidMount() {
    console.log("Pokemon: App Mounts")
  }
  
  render() {
    console.log("Pokemon: App renders")
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
