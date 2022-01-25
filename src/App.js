import React, { useState, useEffect } from "react";
import "./App.css";

const gitHubUrl = "https://api.github.com/users/e2517";

const gitHubUrlRepos = "https://api.github.com/users/e2517/repos";

function App() {
  const [userData, setUserData] = useState({});
  const [userDataRepos, setUserDataRepos] = useState([]);

  useEffect(() => {
    getGitHubUserWithFetch();
    getGitHubReposWithFetch();
  }, []);

  const getGitHubUserWithFetch = async () => {
    const response = await fetch(gitHubUrl);
    const jsonData = await response.json();
    setUserData(jsonData);
  };

  const getGitHubReposWithFetch = async () => {
    const response = await fetch(gitHubUrlRepos);
    const jsonData = await response.json();
    setUserDataRepos(jsonData);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>GitHub User Data</h2>
        <div className="user-container">
          <h5 className="info-item">{userData.name}</h5>
          <h5 className="info-item">{userData.location}</h5>
          <h5 className="info-item">{userData.blog}</h5>
          <h5 className="info-item">{userData.company}</h5>
        </div>
        <div>
          <ul>
            {userDataRepos.map(item => (
              <li key={item.id}>${item.name}</li>
            ))}
          </ul>
        </div>
      </header>
    </div>
  );
}
export default App;
