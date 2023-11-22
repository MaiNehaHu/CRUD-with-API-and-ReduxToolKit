import React from "react";
import "./EditToDo.scss";
import { MdCloudDone } from "react-icons/md";
import axios from "axios";

const EditToDo = ({
  todo,
  updateData,
  updateTheData,
  toggleHeadingAndInput,
}) => {
  const className = "EditButton";
  const url = `https://api.staging.sumize.io/api/todos/:${todo.id}`;

  const handelEditDesciption = async () => {
    const updatedData = {
      data: {
        id: todo.id,
        desciption: updateData.inputValue,
        done: updateData.done,
        createdAt: todo.attributes.createdAt,
        email: todo.attributes.email,
        updatedAt: new Date().toISOString(),
      },
    };
    
    try {
      await axios.patch(url, updatedData);
      console.log("Updated");
      // Finally update the JSX by fetching Data in Body
      updateTheData();
    } catch (err) {
      alert("Unable to update due to error.", err.message);
      console.log("error for value: ", updatedData, ": ", err.message);
    }
  };

  return (
    <div
      className={className}
      onClick={() => {
        handelEditDesciption();

        //show result with some delay
        setTimeout(() => {
          toggleHeadingAndInput();
        }, 500);
      }}
    >
      <MdCloudDone />
    </div>
  );
};

export default EditToDo;
