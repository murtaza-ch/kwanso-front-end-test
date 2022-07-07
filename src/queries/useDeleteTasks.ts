import { useMutation } from "react-query";
import { apiClient } from "../utils/apiClient";
import { AUTH_TOKEN } from "../constants/index";
import { ITaskDeleteParams, ITaskDeleteResponse } from "../interfaces/task";

export const useDeleteTasks = () => {
  const DeleteTasks = async ({ ids }: ITaskDeleteParams) => {
    const response = await apiClient.post("task/delete", ids, {
      headers: {
        Authorization: `Bearer ${AUTH_TOKEN}`,
      },
    });
    return response.data;
  };

  return useMutation<ITaskDeleteResponse, Error, ITaskDeleteParams>(
    "DeleteTasks",
    DeleteTasks
  );
};
