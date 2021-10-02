import './styles.css'
import { Todo } from '../model'
import SingleTodo from './SingleTodo';

interface Props{
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
    const nextItem = todos.map((todo) => {
        return <SingleTodo todo={todo} key={todo.id} todos={todos} setTodos={setTodos} />;
    });
    return (
        <div className="todos">
            {nextItem}
        </div>
    )

}
 
export default TodoList
