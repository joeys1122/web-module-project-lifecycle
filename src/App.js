import React from 'react';

import User from './components/User';
import FollowerList from './components/FollowerList';

class App extends React.Component {
  state = {
    user: 'https://api.github.com/users/joeys1122',
    userInfo: {
      "login": "joeys1122",
      "id": 91795166,
      "node_id": "U_kgDOBXiu3g",
      "avatar_url": "https://avatars.githubusercontent.com/u/91795166?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/joeys1122",
      "html_url": "https://github.com/joeys1122",
      "followers_url": "https://api.github.com/users/joeys1122/followers",
      "following_url": "https://api.github.com/users/joeys1122/following{/other_user}",
      "gists_url": "https://api.github.com/users/joeys1122/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/joeys1122/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/joeys1122/subscriptions",
      "organizations_url": "https://api.github.com/users/joeys1122/orgs",
      "repos_url": "https://api.github.com/users/joeys1122/repos",
      "events_url": "https://api.github.com/users/joeys1122/events{/privacy}",
      "received_events_url": "https://api.github.com/users/joeys1122/received_events",
      "type": "User",
      "site_admin": false,
      "name": "Joe Stanton",
      "company": null,
      "blog": "",
      "location": null,
      "email": null,
      "hireable": null,
      "bio": null,
      "twitter_username": null,
      "public_repos": 34,
      "public_gists": 0,
      "followers": 2,
      "following": 7,
      "created_at": "2021-10-02T15:54:44Z",
      "updated_at": "2021-12-02T20:02:25Z"
    },
    followers: [
      {
        "login": "kfam22",
        "id": 92267062,
        "node_id": "U_kgDOBX_iNg",
        "avatar_url": "https://avatars.githubusercontent.com/u/92267062?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/kfam22",
        "html_url": "https://github.com/kfam22",
        "followers_url": "https://api.github.com/users/kfam22/followers",
        "following_url": "https://api.github.com/users/kfam22/following{/other_user}",
        "gists_url": "https://api.github.com/users/kfam22/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/kfam22/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/kfam22/subscriptions",
        "organizations_url": "https://api.github.com/users/kfam22/orgs",
        "repos_url": "https://api.github.com/users/kfam22/repos",
        "events_url": "https://api.github.com/users/kfam22/events{/privacy}",
        "received_events_url": "https://api.github.com/users/kfam22/received_events",
        "type": "User",
        "site_admin": false
      },
      {
        "login": "BrittanyPete",
        "id": 92415478,
        "node_id": "U_kgDOBYIl9g",
        "avatar_url": "https://avatars.githubusercontent.com/u/92415478?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/BrittanyPete",
        "html_url": "https://github.com/BrittanyPete",
        "followers_url": "https://api.github.com/users/BrittanyPete/followers",
        "following_url": "https://api.github.com/users/BrittanyPete/following{/other_user}",
        "gists_url": "https://api.github.com/users/BrittanyPete/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/BrittanyPete/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/BrittanyPete/subscriptions",
        "organizations_url": "https://api.github.com/users/BrittanyPete/orgs",
        "repos_url": "https://api.github.com/users/BrittanyPete/repos",
        "events_url": "https://api.github.com/users/BrittanyPete/events{/privacy}",
        "received_events_url": "https://api.github.com/users/BrittanyPete/received_events",
        "type": "User",
        "site_admin": false
      }
    ]
  }

  render() {
    return(
      <div>
        <h1>Github Info</h1>
        <form>
          <input/>
          <button>Search</button>
        </form>
        <User user={this.state.user} userInfo={this.state.userInfo}/>
        <FollowerList followers={this.state.followers}/>
      </div>
    );
  }
}

export default App;
