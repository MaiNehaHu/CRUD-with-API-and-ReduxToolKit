import React from "react";
import { FiEdit } from "react-icons/fi";
import "./EditToDo.scss";

const EditToDo = ({ idToEdit }) => {
  const className = "EditButton";

  const handleToDoEdit = () => {
    console.log("To edit", idToEdit);
  };

  return (
    <div className={className} onClick={handleToDoEdit}>
      <FiEdit />
    </div>
  );
};

export default EditToDo;
