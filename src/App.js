import React from 'react'

import data from './data'
import './App.css'

import Users from './components/Users'

class App extends React.Component {
  state = {
    users: []
  }

  componentDidMount() {
    setTimeout (()=>{
      this.setState({
        ...this.state,
        users: data
      })
    }, 0)
  }

  render() {
    return (
      <div className="container">
        {
          (this.state.users.length > 0) ? <Users users={this.state.users} /> : <div>Loading</div>
        }
      </div>
    )
  }
}

export default App
