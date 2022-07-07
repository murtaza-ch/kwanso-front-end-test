import React from "react";
import { UseQueryResult } from "react-query";
import { CListTasks } from "../../components";
import { ITask } from "../../interfaces/task";
import { useTasks } from "../../queries";

function ListTasks() {
  const { data, error }: UseQueryResult<ITask, Error> = useTasks();

  if (error) {
    return <h1>Errror!</h1>;
  }

  return <CListTasks tasks={data?.tasks} />;
}

export default ListTasks;
