import React from "react";
import "./DeleteToDo.scss";
import axios from "axios";
import { MdDelete } from "react-icons/md";

const DeleteToDo = ({ idtoDelete, updateTheData }) => {
  const className = "DeleteButton";
  const url = `https://api.staging.sumize.io/api/todos/${idtoDelete}`;

  const deleteToDo = async () => {
    await axios
      .delete(url)
      .then(() => {
        console.log("Deleted");
      })
      .catch((err) => {
        console.log("Unable to delete due to: ", err);
      });

    //finally update the JSX by fetching Data in Body
    updateTheData();
  };

  return (
    <div className={className} onClick={deleteToDo}>
      <MdDelete />
    </div>
  );
};

export default DeleteToDo;
