import Header from './components/header';
import { TodoList } from './components/todoList';
import CreateTodo from './components/createTodo';

export default function Home() {
  return (
    <div className="mt-5 pt-4">
      <Header />
      <TodoList />
      <CreateTodo />
    </div>
  );
}