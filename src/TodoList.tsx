
import React, { useState } from 'react';
import { ITodo } from './Todo'
import Todotable from './Todotable'




function TodoList() {
    
    

    //const [todo, setTodo] = useState<ITodo | null>(null)>;
    const [todo, setTodo] = useState<ITodo>({} as ITodo);
    const [todos, setTodos] = useState<Array<ITodo>>([]);


    const submitTodo = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setTodos([...todos, todo])
      }
    
      const inputChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTodo({...todo, [event.target.id]: event.target.value });
      }
    
      
    
    return (
          
        <>
            <form onSubmit={submitTodo}>
                <input type="text" id="description" placeholder='Description' value={todo.description} onChange={inputChanged} />
                <input type="text" id="date" placeholder='Date' value={todo.date} onChange={inputChanged} />
                <input type="text" id="priority" placeholder='Priority' value={todo.priority} onChange={inputChanged} />
                <input type="submit" value="Add" />
            </form>
            <Todotable todos={todos} />
        </>

      );

};

export default TodoList;