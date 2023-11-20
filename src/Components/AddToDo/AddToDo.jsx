import React, { useState } from "react";
import "./AddToDo.scss";
import axios from "axios";
const urlEndPoint = "https://api.staging.sumize.io/api/todos";

const AddToDo = ({ updateTheData }) => {
  const [desciption, setDesciption] = useState("");
  const email = "Kajalgupta.it@gmail.com";
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
        updateTheData();
      })
      .catch((err) => console.log("Could not POST due to error: ", err.message));
  };

  return (
    <div className={className}>
      <label htmlFor="addToDo" className={className + "__label"}>
        Add a new task to do:
      </label>
      <input
        type="text"
        name="addToDo"
        placeholder="Complete work"
        className={className + "__input inputField"}
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
        Add
      </button>
    </div>
  );
};

export default AddToDo;
