import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UseMutationResult } from "react-query";
import { CCreateTask } from "../../components";
import { useCreateTask } from "../../queries";
import { ISingleTask, ITaskParams } from "../../interfaces/task";

function CreateTask() {
  const navigate = useNavigate();
  const [task, setTask] = useState("");
  const {
    mutate,
    isLoading,
    error,
  }: UseMutationResult<ISingleTask, any, ITaskParams> = useCreateTask();

  const handleSubmit = () => {
    mutate(
      {
        task,
      },
      {
        onSuccess: () => {
          navigate("/list-tasks");
        },
      }
    );
  };

  return (
    <CCreateTask
      isLoading={isLoading}
      task={task}
      setTask={setTask}
      handleSubmit={handleSubmit}
      error={error?.response.data.error.message || error?.message}
    />
  );
}

export default CreateTask;
