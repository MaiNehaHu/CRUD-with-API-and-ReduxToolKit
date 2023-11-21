import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ReadList } from "../../Store/Slices/ReadSlice";
import "./AddToDo.scss";
import axios from "axios";

const urlEndPoint = "https://api.staging.sumize.io/api/todos";

const AddToDo = () => {
  const [desciption, setDesciption] = useState("");
  const email = "Kajalgupta.it@gmail.com";
  const dispatch = useDispatch();
  const className = "AddToDo";

  const handleInputChange = (e) => {
    setDesciption(e.target.value);
  };

  //Adding task
  const handleAdding = async () => {
    if (desciption === "") {
      alert("Please enter something");
      return;
    }

    const taskData = {
      data: {
        id: Math.round(Math.random() * 1000),
        desciption: desciption,
        done: false,
        createdAt: new Date().toISOString(),
        email: email,
        updatedAt: new Date().toISOString(),
      },
    };

    await axios
      .post(urlEndPoint, taskData)
      .then(() => {
        console.log("Added");
        //Call the getData function to fetch data
        dispatch(ReadList());
      })
      .catch((err) =>
        console.log("Could not POST due to error: ", err.message)
      );
  };

  return (
    <div className={className}>
      <input
        type="text"
        name="addToDo"
        placeholder="Add a new work"
        className={className + "__input"}
        onChange={handleInputChange}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleAdding();
          }
        }}
      />

      <button
        onClick={handleAdding}
        type="button"
        className={className + "__button"}
      >
        Add to list
      </button>
    </div>
  );
};

export default AddToDo;
