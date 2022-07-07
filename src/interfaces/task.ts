export interface ITask {
  tasks:
    | {
        _id: string;
        name: string;
      }[]
    | undefined;
}

export interface ISingleTask {
  tasks:
    | {
        _id: string;
        name: string;
      }
    | undefined;
}

export interface ITaskParams {
  task: string;
}

export interface ITaskDeleteParams {
  ids: string[];
}

export interface ITaskDeleteResponse {
  message: string;
}
