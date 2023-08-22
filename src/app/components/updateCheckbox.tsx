'use client';
import { experimental_useOptimistic as useOptimistic } from 'react';
import { experimental_useFormStatus } from 'react-dom';
import { useRouter } from 'next/navigation';
import { updateTodo } from '@/lib/fetchApi';

export default function UpdateCheckbox({
  todo,
}: {
  todo: Todo,
}) {
  const router = useRouter();
  const { pending } = experimental_useFormStatus()
  const [optimisticTodo, addOptimisticTodo] = useOptimistic(
    todo,
    (
      state: Todo,
      completed: boolean
    ) => ({ ...state, completed })
  )
  return (
    <input 
      type="checkbox"
      checked={optimisticTodo.completed}
      id="completed"
      name="completed"
      onChange={async () => {
        addOptimisticTodo(!todo.completed)
        await updateTodo(todo)
        router.refresh()
      }}
      disabled={pending}
      style={{ marginRight: '.8rem' }}
    />
  );
}