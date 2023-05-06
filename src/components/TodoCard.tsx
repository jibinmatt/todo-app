import React from 'react';
import { Todo } from '../model';
import { FaEdit } from 'react-icons/fa'
import { MdDeleteForever, MdOutlineDoneAll } from 'react-icons/md'
import './ComponentStyles.css'


type Props = {
  todo:Todo
  todos:Todo[]
  setTodos:React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoCard = ({ todo, todos, setTodos }:Props) => {

  const handleDone = (id:number) => {
    setTodos( todos.map( (todo) => todo.id === id ? {...todo,isDone:!todo.isDone} :todo) )
  }
  
  return (
    <form className='todoCard'>
      <span className="todosText">
        { todo.todo }
      </span>
      <div>
        <span className="icon">
          <FaEdit />
        </span>
        <span className="icon">
          <MdDeleteForever />
        </span>
        <span className="icon" onClick={()=>handleDone(todo.id)}>
          <MdOutlineDoneAll />
        </span>
      </div>
    </form>
  );
}

export default TodoCard;
