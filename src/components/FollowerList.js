import React from "react";

import Follower from "./Follower";

class FollowerList extends React.Component {
  render() {
    // console.log(this.props)
    return (
      <div>
        <h2>Followers:</h2>
        {
          this.props.followers.map(follower => {
            return <Follower key={follower.id} name={follower.login} avatar={follower['avatar_url']}/>
          })
        }
      </div>
    )
  }
}

export default FollowerList;