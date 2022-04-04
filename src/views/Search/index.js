import React from "react";
import "./style.scss";
import Header from "../../components/Header";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import { useState } from "react";
import axios from "axios";
import Repositories from "../../components/Repositories";

function Search() {
  const [repositories, setRepositories] = useState([]);
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);

  const search = async (e) => {
    e.preventDefault();
    let userInfo = await axios.get(`https://api.github.com/users/${input}`);
    setData(userInfo.data);
    let repo = await axios.get(`https://api.github.com/users/${input}/repos`);
    setRepositories(repo.data);
  };
  return (
    <div className="search">
      <Header />
      <div className="search-github">
        <div className="search-github-container">
          <h4 className="search-github-p">
            Enter the Github user you want to look at.
          </h4>
          <form className="search-github-form">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="search-github-form-input"
              type="text"
              placeholder="Github user"
            />
            <button
              onClick={search}
              type="submit"
              className="search-github-form-btn"
            >
              Search
            </button>
          </form>
          <div className="search-github-profileCard">
            {data.avatar_url && (
              <>
                <img
                  className="search-github-logo"
                  src={data.avatar_url}
                  alt="github-logo"
                />
                <div className="search-github-cardItems">
                  <div className="search-github-cardItem1">
                    <p>{data.name}</p>
                  </div>
                  <div className="search-github-cardItem">
                    <FileCopyIcon /> <p>{data.public_repos} repositories</p>{" "}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      {data.avatar_url && (
        <>
          {repositories.map((repository) => (
            <Repositories
              key={repository.id}
              id={repository.id}
              language={repository.language}
              name={repository.name}
              description={repository.description}
            />
          ))}
        </>
      )}
    </div>
  );
}

export default Search;
