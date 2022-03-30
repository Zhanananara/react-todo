import React, { useContext, useState } from "react";
import { todoContext } from "../contexts/TodoContextProvider";

const Add = () => {
  const [inpValue, setInpValue] = useState({ title: "" });
  const { addNewTodo } = useContext(todoContext);
  const handleChange = (e) => {
    let obj = {
      ...inpValue,
      [e.target.name]: e.target.value,
    };
    setInpValue(obj);
  };

  const handleSubmit = () => {
    addNewTodo(inpValue);
    setInpValue({ title: "" });
  };

  return (
    <div className="mainLayout">
      <h1>Add list</h1>
      <input
        onChange={(e) => handleChange(e)}
        name="title"
        value={inpValue.title}
        type="text"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Add;
