export default async function fetchTodo(id: string) {
  const response = await fetch(`http://localhost:5000/todos/${id}`);
  if (!response.ok) return undefined;
  const todo: Todo = await response.json();
  return todo;
}