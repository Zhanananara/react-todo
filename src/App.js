import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import TodoContextProvider from "./contexts/TodoContextProvider";
import MyRoutes from "./MyRoutes";

function App() {
  return (
    <div className="App">
      <TodoContextProvider>
        <MyRoutes />
      </TodoContextProvider>
    </div>
  );
}
export default App;
