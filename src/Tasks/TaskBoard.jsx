import SearchTask from "./SearchTask";
import TaskAction from "./TaskActions";
import TaskList from "./TaskList";

export default function TaskBoard() {
  return (
    <>
      <SearchTask />
      <TaskAction />
      <TaskList />
    </>
  );
}
