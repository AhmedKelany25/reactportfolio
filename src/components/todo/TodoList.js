import "./TodoList.css";

const TodoList = ({todos,deleteTodo}) => {
    return <div className="items_list">
        {
            todos && todos.length > 0 
            ?
            (todos.map((todo,i)=>{
                return (
                    <ul key={i}>
                        <li className="border item">
                            <div>
                                <p>Title: {todo.title}</p>
                                <p>Content: {todo.content}</p>
                                <button onClick={()=>deleteTodo(i)} className="btn btn-danger">x</button>
                            </div>
                        </li>
                    </ul>
                )
            }))
            :
            (<p> no items on the list</p>)
        }
    </div>
  };
  
  export default TodoList;