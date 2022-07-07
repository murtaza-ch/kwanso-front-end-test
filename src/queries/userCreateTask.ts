import { useMutation } from "react-query";
import { apiClient } from "../utils/apiClient";
import { AUTH_TOKEN } from "./../constants/index";
import { ISingleTask, ITaskParams } from "./../interfaces/task";

export const useCreateTask = () => {
  const CreateTask = async ({ task }: ITaskParams) => {
    const response = await apiClient.post(
      "task/create",
      { name: task },
      {
        headers: {
          Authorization: `Bearer ${AUTH_TOKEN}`,
        },
      }
    );
    return response.data;
  };

  return useMutation<ISingleTask, Error, ITaskParams>("CreateTask", CreateTask);
};
