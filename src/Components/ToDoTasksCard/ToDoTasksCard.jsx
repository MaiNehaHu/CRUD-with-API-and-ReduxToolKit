import React, { useEffect, useState } from "react";
import DeleteToDo from "../DeleteToDo/DeleteToDo";
import EditToDo from "../EditToDo/EditToDo";
import { FiEdit } from "react-icons/fi";
import "./ToDoTasksCard.scss";

const ToDoTasksCard = ({ todo }) => {
  const [editButtonStatus, setEditButtonStatus] = useState(false);
  const [inputValue, setInputValue] = useState(todo.attributes.desciption);
  const className = "ToDoTasksCard";

  //converting into human readable data and time
  const createdAt = new Date(todo.attributes.createdAt);
  const updatedAt = new Date(todo.attributes.updatedAt);

  const createdAtDate = createdAt.toLocaleString("en-US");
  const updatedAtDate = updatedAt.toLocaleString("en-US");

  const toggleHeadingAndInput = () => {
    setEditButtonStatus(!editButtonStatus);
  };

  const handleInputChange = (input) => {
    setInputValue(input);
  };

  useEffect(() => {
    setInputValue(todo.attributes.desciption);
  }, [todo]);

  return (
    <div className={className}>
      {!editButtonStatus ? (
        <header className={className + "__header"}>
          <h3 className={className + "__header__heading"}>
            {todo.attributes.desciption}
          </h3>

          <section className={className + "__header__buttons"}>
            <DeleteToDo
              idtoDelete={todo.id}
              className={className + "__header__buttons__deleteBtn"}
            />

            {editButtonStatus ? (
              <EditToDo
                todo={todo}
                inputValue={inputValue}
                toggleHeadingAndInput={toggleHeadingAndInput}
                className={className + "__header__buttons__editButton"}
              />
            ) : (
              <FiEdit
                className={className + "__header__buttons__updateButton"}
                onClick={toggleHeadingAndInput}
              />
            )}
          </section>
        </header>
      ) : (
        <div className={className + "__header"}>
          <input
            type="text"
            name="editHeading"
            value={inputValue}
            id="editHeadingInputField"
            className={className + "__header__inputField"}
            onChange={(e) => handleInputChange(e.target.value)}
          />

          <section className={className + "__header__buttons"}>
            <DeleteToDo
              idtoDelete={todo.id}
              className={className + "__header__buttons__deleteBtn"}
            />
            {editButtonStatus ? (
              <EditToDo
                todo={todo}
                inputValue={inputValue}
                toggleHeadingAndInput={toggleHeadingAndInput}
                className={className + "__header__buttons__editButton"}
              />
            ) : (
              <FiEdit
                className={className + "__header__buttons__updateButton"}
                onClick={toggleHeadingAndInput}
              />
            )}
          </section>
        </div>
      )}

      <br />
      <p className={className + "__status"}>
        {todo.attributes.done ? "✔️ Completed" : "❌ Not Done"}
      </p>
      <p className={className + "__createdAt"}>Created: {createdAtDate}</p>
      <p className={className + "__updatedAt"}>Updated: {updatedAtDate}</p>
    </div>
  );
};

export default ToDoTasksCard;
