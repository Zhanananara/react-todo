import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { todoContext } from "../contexts/TodoContextProvider";

const Edit = () => {
  const [inpValue, setInpValue] = useState({ title: "" });
  const { getOneTodoForEdit, forEdit, saveEdit } = useContext(todoContext);
  const { id } = useParams();
  //   console.log(params);
  useEffect(() => {
    getOneTodoForEdit(id);
  }, []);
  useEffect(() => {
    if (forEdit) {
      setInpValue(forEdit);
    }
  }, [forEdit]);
  const handleChange = (e) => {
    let obj = {
      ...inpValue,
      [e.target.name]: e.target.value,
    };
    setInpValue(obj);
  };

  const handleSubmit = () => {
    setInpValue({ title: "" });
    saveEdit(inpValue);
  };
  return (
    <div className="mainLayout">
      <h1>Edit todo</h1>
      <input
        onChange={(e) => handleChange(e)}
        name="title"
        value={inpValue.title}
        type="text"
      />
      <button onClick={handleSubmit}>Save</button>
    </div>
  );
};

export default Edit;
