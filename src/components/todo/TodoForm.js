import { useState } from "react";
import "./TodoForm.css";

const TodoForm = (props) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onSubmitionHandler = (e) => {
      e.preventDefault();
      console.log(title,content)
      props.addTodo({
          title:title,
          content:content
      })
      setTitle("")
      setContent("")

  };

  return (
    <div>
      <h2>Add Todo Item</h2>
      <form onSubmit={onSubmitionHandler} className="form">
          <div >
          <label >Title</label>
        <input className="form-control"
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
          </div>
     
          <div >
        <label >Content</label>
        <input className="form-control"
          type="text"
          name="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        </div>
        <button className="btn btn-primary m-3 px-4"> Add </button>
      </form>
    </div>
  );
};

export default TodoForm;
