export enum TodoStateType {
  NONE = -1,
  OPEN = 0,
  IN_PROGRESS = 1,
  DONE = 2,
  CLOSED = 3
}

export const mapTodoStateToClass = (state:TodoStateType) => {
  switch (state) {
    case TodoStateType.OPEN:
      return "todoitem-container-open";
    case TodoStateType.IN_PROGRESS:
      return "todoitem-container-inprogress";
    case TodoStateType.DONE:
      return "todoitem-container-done";
    case TodoStateType.CLOSED:
      return "todoitem-container-closed";
    case TodoStateType.NONE:
    default:
      return "todoitem-container-none";
  }
};