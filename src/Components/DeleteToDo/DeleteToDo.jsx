import React from "react";
import { ReadList } from "../../Store/Slices/ReadSlice";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import axios from "axios";
import "./DeleteToDo.scss";

const DeleteToDo = ({ idtoDelete }) => {
  const className = "DeleteButton";
  const dispatch = useDispatch();
  const url = `https://api.staging.sumize.io/api/todos/${idtoDelete}`;

  const deleteToDo = async () => {
    await axios
      .delete(url)
      .then(() => {
        console.log("Deleted");
        //finally update the JSX by fetching Data in Body
        dispatch(ReadList());
      })
      .catch((err) => {
        console.log("Unable to delete due to: ", err.message);
      });
  };

  return (
    <div className={className} onClick={deleteToDo}>
      <MdDelete />
    </div>
  );
};

export default DeleteToDo;
