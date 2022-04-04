import React from "react";
import Header from "../../components/Header";
import "./style.scss";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <Header />
      <div className="home-container">
        <Link to="/home/github" style={{ textDecoration: "none" }}>
          <div className="home-main">
            {" "}
            <h1 className="home-title">Instructions</h1>
            <div>
              <h2 className="home-instructions"> 
                1. Click this banner to go to the search page
                <br></br>
                2. Enter the github user and click the Search button
                <br></br>
                3. If you want to add to favorites list, click the button 'Add to Favorites'
                <br></br>
                4. To see the list, click on 'Your List' label
                <br></br>
                5. If you want to delete some repositories, click on Delete button
              </h2>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Home;
