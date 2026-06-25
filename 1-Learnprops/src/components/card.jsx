import React from "react";

const Card = (props) => {
  return (
    <div className="card">
      <img
        src="https://plus.unsplash.com/premium_photo-1764691204478-2e2093c6dbac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQyfENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D"
        alt="Profile Image"
      />
      <h1>{props.user}</h1>
      <p>
        lerem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
        voluptatum.
      </p>
      <button>view profile</button>
    </div>
  );
};

export default card;
