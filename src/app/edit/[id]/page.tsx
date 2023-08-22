import TodoItem from '@/app/components/todoItem';
import { deleteTodo } from '@/lib/fetchApi';
import fetchTodo from '@/lib/fetchTodo';
import { notFound } from 'next/navigation';

type Props = {
  params: {
    id: string
  }
}

export default async function EditPage({ params: { id } }: Props) {
  const todo = await fetchTodo(id);
  if (!todo) notFound();
  return (
    <div className="mt-5 pt-3">
      <small className="text-uppercase">id: {todo.id}</small>
      <p>{todo.text}</p>
      <button 
      className="btn btn-danger text-capitalize"
      formAction={async () => {
        'use server'
        await deleteTodo(todo)
      }}
      > delete
      </button>
    </div>
  );
}