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

  const createdAtDate = createdAt.toLocaleString("en-US");
  const updatedAtDate = updatedAt.toLocaleString("en-US");

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
