import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { todoContext } from "../contexts/TodoContextProvider";

const List = () => {
  const { getTodos, todos, deleteTodo } = useContext(todoContext);

  useEffect(() => {
    getTodos();
  }, []);
  return (
    <div className="mainLayout">
      <ul>
        <h1>List page</h1>
        {todos.length > 0 ? (
          todos.map((item) => (
            <li style={{ listStyle: "none" }} key={item.id}>
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to={`/detail/${item.id}`}
              >
                {item.title}
              </Link>
              <button onClick={() => deleteTodo(item.id)}>Del</button>
              <Link to={`/edit/${item.id}`}>
                <button>Edit</button>
              </Link>
            </li>
          ))
        ) : (
          <h2>Loading...</h2>
        )}
      </ul>
    </div>
  );
};

export default List;
