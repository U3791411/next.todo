import TodoItem from './todoItem';
import fetchTodos from '@/lib/fetchTodos';

export async function TodoList() {
  const todos = await fetchTodos();
  let content;
  if (!todos || todos.length === 0) {
    content = (
      <p className="display-4">All Todos Completed!</p>
    )
  } else {
    const sortedTodos = todos.reverse();
    content = (
      <>
        {sortedTodos.map(todo => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </>
    )
  }
  return content;
}