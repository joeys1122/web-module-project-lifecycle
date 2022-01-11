import React from "react";

class Follower extends React.Component {
  render() {
    return (
      <div>
        <img src={this.props.avatar}/>
        <h3>{this.props.name}</h3>
      </div>
    )
  }
}

export default Follower;