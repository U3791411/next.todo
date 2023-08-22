import { deleteTodo } from '@/lib/fetchApi';
import UpdateCheckbox from './updateCheckbox';
import Link from 'next/link';

export default function TodoItem(todo: Todo) {
  return (
    <form action="">
    <div className="terminal w-100 mb-3">
      <pre className="d-flex align-items-center">
        <UpdateCheckbox todo={todo} />
        <span className={`${todo.completed ? 'text-decoration-line-through text-grey' : ''}`}>
          <Link href={`/edit/${todo.id}`}>
            {todo.text}
          </Link>
        </span>
      </pre>
    </div>
    </form>
  );
}