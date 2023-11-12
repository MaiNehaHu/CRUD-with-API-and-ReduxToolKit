import React, { useEffect, useState } from "react";
import ToDoTasksCard from "../ToDoTasksCard/ToDoTasksCard";
import AddToDo from "../AddToDo/AddToDo";
import "./Body.scss";
const url = "https://api.staging.sumize.io/api/todos";

const Body = () => {
  const [ToDoData, setToDoData] = useState(null);
  const [error, setError] = useState(null);
  const className = "Body";

  //fetching data from API
  const fetchData = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      setToDoData(result.data);
    } catch (error) {
      setError(error);
    }
  };

  //gets data after mount
  useEffect(() => {
    fetchData();
  }, []);

  //fetches the updated data
  const updateTheData = () => {
    fetchData();
  };

  return (
    <div className={className}>
      <AddToDo updateTheData={updateTheData} />

      <br />

      <h2 className={className + "__heading"}>Your Tasks: </h2>

      {ToDoData && (
        <div className={className + "__cardContainer"}>
          <div className={className + "__cardContainer__cards"}>
            {ToDoData.map((todo, i) => (
              <ToDoTasksCard
                key={i}
                todo={todo}
                updateTheData={updateTheData}
              />
            ))}
          </div>
        </div>
      )}

      {error && (
        <div className={className + "__errorMessage"}>
          <h2>Error:</h2>
          <p>{error.message}</p>
        </div>
      )}
    </div>
  );
};

export default Body;
