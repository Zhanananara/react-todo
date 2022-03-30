import React from "react";
import { Routes, Route } from "react-router-dom";
import List from "./pages/List";
import Add from "./pages/Add";
import MainLayout from "./layouts/MainLayout";
import Edit from "./pages/Edit";

const MyRoutes = () => {
  return (
    <div className="myroute">
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<List />} />
          <Route path="/add" element={<Add />} />
          <Route path="/edit/:id" element={<Edit />} />
        </Route>
      </Routes>
    </div>
  );
};

export default MyRoutes;
