import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { ListTasks, CreateTask, DeleteTasks } from "./containers";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/list-tasks" />} />
      <Route path="/list-tasks" element={<ListTasks />} />
      <Route path="/create-task" element={<CreateTask />} />
      <Route path="/bulk-delete" element={<DeleteTasks />} />
    </Routes>
  );
}

export default App;
