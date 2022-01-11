import React from "react";

class User extends React.Component {
  render() {
    return (
      <div className="User">
        <img src={this.props.userInfo['avatar_url']}/>
        <div>
          <h2>{this.props.userInfo.name}</h2>
          <h4>({this.props.userInfo.login})</h4>
          <h3>Total Repos: {this.props.userInfo['public_repos']}</h3>
          <h3>Total Followers: {this.props.userInfo.followers}</h3>
        </div>
      </div>
    )
  }
}

export default User;