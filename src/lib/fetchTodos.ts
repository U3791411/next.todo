export default async function fetchTodos() {
  try {
    const response = await fetch('http://localhost:5000/todos');
    const todos: Todo[] = await response.json()
    return todos;
  } catch (err) {
    if (err instanceof Error) console.log(err.stack);
  }
}