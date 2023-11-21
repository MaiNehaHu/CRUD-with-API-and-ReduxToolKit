import React, { useEffect, useState } from "react";
import ToDoTasksCard from "../ToDoTasksCard/ToDoTasksCard";
import AddToDo from "../AddToDo/AddToDo";
import { useSelector } from "react-redux";
import "./Body.scss";

const Body = () => {
  const [error, setError] = useState(null);
  const className = "Body";

  const List = useSelector((state) => {
    return state.ReadingList.data;
  });

  //Error message
  useEffect(() => {
    if (List.stack) {
      setError(List.stack.slice(0, 26));
    }
  }, [List]);

  return (
    <div className={className}>
      <AddToDo />

      {List.length && (
        <div className={className + "__cardContainer"}>
          {List.map((todo, i) => (
            <ToDoTasksCard key={i} todo={todo} />
          ))}
        </div>
      )}

      {error && (
        <div className={className + "__errorMessage"}>
          <h2>Error:</h2>
          <p>{error}</p>
        </div>
      )}
    </div>
  );
};

export default Body;
