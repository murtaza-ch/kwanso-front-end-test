import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UseQueryResult, UseMutationResult } from "react-query";
import { CDeleteTask } from "../../components";
import {
  ITaskDeleteParams,
  ITask,
  ITaskDeleteResponse,
} from "../../interfaces/task";
import { useTasks, useDeleteTasks } from "../../queries";

function DeleteTasks() {
  const navigate = useNavigate();
  const [ids, setIds] = useState<string[]>([]);
  const { data, error }: UseQueryResult<ITask, any> = useTasks();
  const {
    mutate,
    isLoading,
    error: deleteError,
  }: UseMutationResult<
    ITaskDeleteResponse,
    any,
    ITaskDeleteParams
  > = useDeleteTasks();

  if (error) {
    return <h1>Errror: {error.message}</h1>;
  }

  const handleId = (id: string) => {
    if (ids.includes(id)) {
      setIds(ids.filter((cid) => cid !== id));
    } else {
      setIds((ids) => [...ids, id]);
    }
  };

  const onDeleteTasks = () => {
    mutate(
      {
        ids,
      },
      {
        onSuccess: () => {
          navigate("/list-tasks");
        },
      }
    );
  };

  return (
    <CDeleteTask
      tasks={data?.tasks}
      ids={ids}
      handleId={handleId}
      error={deleteError?.response.data.error.message || deleteError?.message}
      isLoading={isLoading}
      onDeleteTasks={onDeleteTasks}
    />
  );
}

export default DeleteTasks;
