import React, { useEffect, useState } from "react";
import DeleteToDo from "../DeleteToDo/DeleteToDo";
import EditToDo from "../EditToDo/EditToDo";

import { useSelector } from "react-redux";
import { FiEdit } from "react-icons/fi";
import "./ToDoTasksCard.scss";

const ToDoTasksCard = ({ todo }) => {
  const [editButtonStatus, setEditButtonStatus] = useState(false);
  const [updateData, setUpdateData] = useState({
    inputValue: todo.attributes.desciption,
    done: false,
  });
  const className = "ToDoTasksCard";

  const List = useSelector((state) => {
    return state.ReadingList.data;
  });

  //converting into human readable data and time
  const createdAt = new Date(todo.attributes.createdAt);
  const updatedAt = new Date(todo.attributes.updatedAt);

  const createdAtDate = createdAt.toLocaleString("en-US");
  const updatedAtDate = updatedAt.toLocaleString("en-US");

  const toggleHeadingAndInput = () => {
    setEditButtonStatus(!editButtonStatus);
  };

  const handleUpdateValues = (e) => {
    setUpdateData({
      ...updateData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    setUpdateData({
      ...updateData,
      inputValue: todo.attributes.desciption,
    });
  }, [List]);

  return (
    <div className={className}>
      {!editButtonStatus ? (
        <header className={className + "__header"}>
          <h3
            className={className + "__header__heading"}
            style={{
              textDecoration: todo.attributes.done ? "line-through" : "none",
            }}
          >
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
                updateData={updateData}
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
            name="inputValue"
            value={updateData.inputValue}
            id="editHeadingInputField"
            className={className + "__header__inputField"}
            onChange={handleUpdateValues}
          />

          <section className={className + "__header__buttons"}>
            <DeleteToDo
              idtoDelete={todo.id}
              className={className + "__header__buttons__deleteBtn"}
            />
            {editButtonStatus ? (
              <EditToDo
                todo={todo}
                updateData={updateData}
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
        {editButtonStatus ? (
          <React.Fragment>
            <label
              htmlFor="done"
              className={className + "__status__selectInputLabel"}
            >
              Done:{" "}
            </label>
            <select
              onClick={handleUpdateValues}
              name="done"
              defaultValue={false}
              className={className + "__status__selectInput"}
            >
              <option
                value={true}
                className={className + "__status__selectInput__option"}
              >
                Yes
              </option>
              <option
                value={false}
                className={className + "__status__selectInput__option"}
              >
                No
              </option>
            </select>
          </React.Fragment>
        ) : todo.attributes.done ? (
          "✔️ Completed"
        ) : (
          "❌ Not Done"
        )}
      </p>

      <p className={className + "__createdAt"}>Created: {createdAtDate}</p>
      <p className={className + "__updatedAt"}>Updated: {updatedAtDate}</p>
    </div>
  );
};

export default ToDoTasksCard;
