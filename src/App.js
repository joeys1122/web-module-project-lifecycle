import React from 'react';
import axios from 'axios';

import User from './components/User';
import FollowerList from './components/FollowerList';

class App extends React.Component {
  state = {
    user: '',
    userInfo: {},
    followers: []
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/joeys1122')
      .then(res => {
        // console.log(res)
        this.setState({
          ...this.state,
          userInfo: res.data
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.user !== this.state.user) {
      axios.get('https://api.github.com/users/joeys1122/followers')
        .then(res => {
          // console.log(res)
          this.setState({
            ...this.state,
            followers: res.data
          })
        })
        .catch(err => {
          console.log(err)
        })
    }
  }

  handleChange = event => {
    this.setState({
      ...this.state,
      user: event.target.value
    })
  }

  handleSearch = event => {
    event.preventDefault()

    axios.get(`https://api.github.com/users/${this.state.user}`)
      .then(res => {
        this.setState({
          ...this.state,
          user: '',
          userInfo: res.data
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    return(
      <div>
        <h1>Github Info</h1>
        <form>
          <input value={this.state.user} onChange={this.handleChange}/>
          <button onClick={this.handleSearch}>Search</button>
        </form>
        <User user={this.state.user} userInfo={this.state.userInfo}/>
        <FollowerList followers={this.state.followers}/>
      </div>
    );
  }
}

export default App;
