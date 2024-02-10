import React from "react";

const Tabs = ({ type, setType }) => {
  return (
    <>
      <button
        className={`${type === "repos" && "text-green-700"}`}
        onClick={() => setType("repos")}
      >
        Repositories
      </button>
      <button
        className={`${type === "received_events" && "text-green-700"}`}
        onClick={() => setType("received_events")}
      >
        Activity
      </button>
      <button
        className={`${type === "followers" && "text-green-700"}`}
        onClick={() => setType("followers")}
      >
        followers
      </button>
    </>
  );
};

export default Tabs;
