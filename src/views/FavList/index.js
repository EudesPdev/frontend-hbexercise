import React from "react";
import { useStateValue } from "../../StateProvider";
import Header from "../../components/Header";
import "./style.scss";
import Repositories from "../../components/Repositories";

function FavList() {
  const [{ repoId, user }] = useStateValue();
  return (
    <div className="fav-repo-main">
      <Header fav />
      {repoId?.length === 0 ? (
        <div className="favList">
          <h2 className="favList-title"> Hey {user?.username} your favorite list is empty</h2>
          <p className="favList-p">
            If you want to add some Github reposotories to the list, go back to the homepage and see the instructions.
          </p>
        </div>
      ) : (
        <div className="favList">
          <h2 className="favList-title">Favorites List</h2>
          {repoId.map((item) => (
            <Repositories
              removeBtn
              key={item.id}
              id={item.id}
              name={item.name}
              description={item.description}
              language={item.language}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default FavList;
