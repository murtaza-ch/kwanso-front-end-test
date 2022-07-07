import { useQuery } from "react-query";
import { apiClient } from "../utils/apiClient";
import { AUTH_TOKEN } from "./../constants/index";
import { ITask } from "./../interfaces/task";

export const useTasks = () => {
  const GetTasks = async () => {
    const response = await apiClient.get("task/list", {
      headers: {
        Authorization: `Bearer ${AUTH_TOKEN}`,
      },
    });
    return response.data;
  };

  return useQuery<ITask, Error>("GetTasks", GetTasks);
};
