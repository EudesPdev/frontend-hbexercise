import React, { useState } from "react";
import { useStateValue } from "../../StateProvider";
import "./style.scss";

function Events({ id, language, description, name, removeBtn }) {
  const [clicked, setIsClicked] = useState(false)
  const [{}, dispatch] = useStateValue();
  const addToFav = () => {
    dispatch({
      type: "add-events",
      item: {
        id: id,
        name: name,
        description: description,
        language: language,
      },
    });
    setIsClicked(true)
  };
  const remove = () => {
    dispatch({
      type: "remove-events",
      id: id,
    });
  };
  return (
    <>
      {removeBtn ? (
        <div className="gh-container">
          <div className="gh-repo">
            <h2 className="repo-name">
                <span>Repository name:</span> {name}
              </h2>
              <h4 className="description-repos">
                <span>Description:</span> {description}
              </h4>
              <p>
                <span>Tech:</span> {language}
              </p>
          </div>
          <button className="btn-remove" onClick={remove}> DELETE</button>
        </div>
      ) : (
        <div className="gh-container">
          <div className="gh-repo">
            <h2 className="repo-name">
              <span>Repository name:</span> {name}
            </h2>
            <h4 className="description-repos">
              <span>Description:</span> {description}
            </h4>
            <p>
               <span>Tech:</span> {language}
            </p>
          </div>
          <button onClick={addToFav} disabled={clicked} className={!clicked ? "fav-button" : "fav-button-clicked"}>
            {" "}
            {!clicked ? 'Add to favorites' : 'Added' }
          </button>
        </div>
      )}
    </>
  );
}

export default Events;
