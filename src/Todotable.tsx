import { ButtonHTMLAttributes } from "react";
import { ITodo } from "./Todo";

 
function Todotable(props: { todos: ITodo[]}) {


    return (
        <div style={{display: "flex", flexDirection:"row" ,alignItems:"center", justifyContent:"center"}}>
            <table>
                <tbody>
                    {
                    props.todos.map((todo, index) =>
                        <tr key={index}>
                            <td>{todo.description}</td>
                            <td>{todo.date}</td>
                            <td>{todo.priority}</td>
                            <button onClick={props.todos.filter((todo, i) => i !== index)}>Delete</button>
                        </tr>
                    )
                    }
                </tbody>
            </table>
        </div >
    );
}

export default Todotable;