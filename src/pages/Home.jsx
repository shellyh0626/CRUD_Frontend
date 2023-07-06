import React from "react";

const Home = () => {
  return (
    <div className="container">
      <h1 className="homepage-h1">Welcome to My Univeristy</h1>
      <h3 className="homepage-h3">We Make Management Easier For You</h3>
      <img
        className="homepage-img"
        src="https://upload.wikimedia.org/wikipedia/commons/e/ee/Virtual_Learning_Illustration.jpg"
        alt=""
      />
      <div class="centered-text">
        <h4>Why Us?</h4>
        <p>
          We give you all of the data in one place to make your search as easy
          as possible.
        </p>
        <p>We analyze the data so you don't have to.</p>
        <p>Our user records let you reach out students directly.</p>
        <p>Around half of the US universities joined us.</p>
      </div>
    </div>
  );
};

export default Home;
