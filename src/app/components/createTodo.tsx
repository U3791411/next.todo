import { createTodo } from '@/lib/fetchApi';

export default function CreateTodo() {
  const content = (
    <form action={createTodo}>
      <input 
        type="text" 
        name="text" 
        className="form-control mt-4 mb-3" 
        placeholder="Start Typing..." 
      />
      <button 
        type="submit" 
        className="btn btn-outline-dark w-100 text-capitalize"
      > submit
      </button>
    </form>
  )
  return content;
}