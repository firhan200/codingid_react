import { useEffect, useState } from "react"
import Todo from "../components/Todo"

//todos = ["makan", "minum", "rapat", "belajar"]
//default value = []

export default function TodoPage() {
    const [newTodo, setNewTodo] = useState('')
    const [todos, setTodos] = useState([])

    const submitTodo = (e) => {
        e.preventDefault()

        setTodos([...todos, newTodo])
    }

    useEffect(() => {
        setNewTodo('')
    }, [todos])

    return (
        <>
            <form onSubmit={submitTodo}>
                <input type="text" value={newTodo} onChange={e => setNewTodo(e.target.value)}/>
                <button type="submit">Add</button>
            </form>
            <ul>
                {todos.map(function (todo, key) {
                    return (
                        <Todo key={key} whatTodo={todo} />
                    )
                })}
            </ul>
        </>
    )
}