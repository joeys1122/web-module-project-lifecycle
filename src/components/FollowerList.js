import React from "react";

import Follower from "./Follower";

class FollowerList extends React.Component {
  render() {
    return (
      <div>
        <h2>Followers:</h2>
        <div className="Followers">
          {
            this.props.followers.map(follower => {
              return <Follower key={follower.id} name={follower.login} avatar={follower['avatar_url']}/>
            })
          }
        </div>
      </div>
    )
  }
}

export default FollowerList;