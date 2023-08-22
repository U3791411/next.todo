'use server';
import { revalidatePath } from 'next/cache';

export async function createTodo(data: FormData) {
  const text = data.get("text");
  await fetch('http://localhost:5000/todos', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      completed: false, text,
    })
  })
  revalidatePath('/');
}

export async function deleteTodo(todo: Todo) {
  const response = await fetch(`http://localhost:5000/todos/${todo.id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      id: todo.id
    })
  })
  await response.json();
  revalidatePath('/');
}

export async function updateTodo(todo: Todo) {
  const response = await fetch(`http://localhost:5000/todos/${todo.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      ...todo, completed: !todo.completed
    })
  })
  await response.json();
  revalidatePath('/');
}