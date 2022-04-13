import TodoList from '../../components/todo/TodoList'
import TodoForm from '../../components/todo/TodoForm'
import { useDispatch, useSelector } from 'react-redux';
import {addTodo} from '../../redux'
import {deleteTodo} from '../../redux'
import {Counter} from '../../redux'



const Todo = (props) => {
    const data = useSelector((state)=>state.itemReducer.todos);
    let count = useSelector((state)=>state.CounterReducer.counter);
    const dispatch = useDispatch();

    console.log(count)

    const addTodoItem = (item)=>{
        console.log("kelany")
        dispatch(addTodo(item))
    }
    const deleteTodoItem = (id)=>{
        dispatch(deleteTodo(id))
    }
    const increasecounter = ()=>{
        let counterincreased = ++count
        dispatch(Counter(counterincreased))
    }
    const decresecounter =()=>{
        let counterincreased = --count
        dispatch(Counter(counterincreased))
    }


    return <div className='text-center container'>
        <TodoForm  addTodo={addTodoItem}/>
        <TodoList todos={data}  deleteTodo={deleteTodoItem}/>
    <h1>{count}</h1>
    <button className='btn btn-success p-3 m-2' onClick={increasecounter}>+</button>
    <button className='btn btn-danger p-3 m-2' onClick={decresecounter}>-</button>

    </div>
  };
  
  export default Todo;