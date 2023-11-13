import React, { useState } from "react";
import "./ToDoTasksCard.scss";
import DeleteToDo from "../DeleteToDo/DeleteToDo";
import EditToDo from "../EditToDo/EditToDo";

const ToDoTasksCard = ({ todo, updateTheData }) => {
  const [displayButtons, setDisplayButtons] = useState(false);
  const className = "ToDoTasksCard";

  //converting into human readable data and time
  const createdAt = new Date(todo.attributes.createdAt);
  const updatedAt = new Date(todo.attributes.updatedAt);
  const options = { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric', 
    hour: '2-digit', 
    minute: '2-digit', 
    second: '2-digit', 
    timeZoneName: 'short' 
  };

  const createdAtDate = createdAt.toLocaleString("en-US",options);
  const updatedAtDate = updatedAt.toLocaleString("en-US",options);

  const handleHoverIn = () => {
    setDisplayButtons(true);
  };
  const handleHoverOut = () => {
    setDisplayButtons(false);
  };

  return (
    <div
      className={className}
      onMouseEnter={handleHoverIn}
      onMouseLeave={handleHoverOut}
    >
      <div className={className + "__information"}>
        <h3 className={className + "__heading"}>
          {todo.attributes.desciption}
        </h3>
        <br />
        <p className={className + "__status"}>
          Status : {todo.attributes.done ? "Done" : "Not done"}
        </p>
        <p className={className + "__createdAt"}>Created: {createdAtDate}</p>
        <p className={className + "__updatedAt"}>Updated: {updatedAtDate}</p>
      </div>

      <div
        className={className + "__buttons"}
        style={{ display: displayButtons ? "flex" : "none" }}
      >
        <DeleteToDo
          idtoDelete={todo.id}
          updateTheData={updateTheData}
          className={className + "__deleteBtn"}
        />
        <EditToDo idToEdit={todo.id} className={className + "__editBtn"} />
      </div>
    </div>
  );
};

export default ToDoTasksCard;
