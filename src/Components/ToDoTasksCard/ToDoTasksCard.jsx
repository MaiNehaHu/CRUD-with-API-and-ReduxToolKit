import React, { useEffect, useState } from "react";
import DeleteToDo from "../DeleteToDo/DeleteToDo";
import EditToDo from "../EditToDo/EditToDo";
import { FiEdit } from "react-icons/fi";
import "./ToDoTasksCard.scss";

const ToDoTasksCard = ({ todo, updateTheData }) => {
  const [displayButtons, setDisplayButtons] = useState(false);
  const [editButtonStatus, setEditButtonStatus] = useState(false);
  const [inputValue, setInputValue] = useState(todo.attributes.desciption);
  const className = "ToDoTasksCard";

  //converting into human readable data and time
  const createdAt = new Date(todo.attributes.createdAt);
  const updatedAt = new Date(todo.attributes.updatedAt);
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZoneName: "short",
  };

  const createdAtDate = createdAt.toLocaleString("en-US", options);
  const updatedAtDate = updatedAt.toLocaleString("en-US", options);

  const handleHoverIn = () => {
    setDisplayButtons(true);
  };
  const handleHoverOut = () => {
    setDisplayButtons(false);
  };

  const toggleHeadingAndInput = () => {
    setEditButtonStatus(!editButtonStatus);
  };

  const handleInputChange = (input) => {
    setInputValue(input);
  };

  return (
    <div
      className={className}
      onMouseEnter={handleHoverIn}
      onMouseLeave={handleHoverOut}
    >
      <div className={className + "__information"}>
        {editButtonStatus ? (
          <div className={className + "__editHeading"}>
            <input
              type="text"
              name="editHeading"
              value={"Task New Name"}
              id="editHeadingInputField"
              className={className + "__information inputField"}
              onChange={(e) => handleInputChange(e.target.value)}
            />
          </div>
        ) : (
          <h3 className={className + "__heading"}>
            {todo.attributes.desciption}
          </h3>
        )}

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
        {!editButtonStatus ? (
          <FiEdit
            className={className + "__updateButton"}
            onClick={toggleHeadingAndInput}
          />
        ) : (
          <EditToDo
            todo={todo}
            inputValue={inputValue}
            updateTheData={updateTheData}
            toggleHeadingAndInput={toggleHeadingAndInput}
            className={className + "__editButton"}
          />
        )}
      </div>
    </div>
  );
};

export default ToDoTasksCard;
