import { Box, Button, Paper, Snackbar, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";

export default function TodoList() {
    const [todos, setTodos] = useState([])
    const [todo, setTodo] = useState('')
    const [showNotif, setShowNotif] = useState(false)

    const addTodo = (e) => {
        e.preventDefault()

        setTodos([...todos, todo])
        setTodo('')
        setShowNotif(true)
    }

    return (
        <>
            <form onSubmit={addTodo}>
                <Stack gap={2} justifyContent="space-between">
                    <TextField value={todo} onChange={e => setTodo(e.target.value)} label="What to do..." fullWidth={true} required />
                    <Button type="submit" variant="contained">Add</Button>
                </Stack>
            </form>
            <Box marginTop={2}>
                <Typography>Todos:</Typography>
                {todos.map((todo, key) => (
                    <Paper elevation={3} key={key} sx={{
                        marginBottom: 4,
                        padding: 2
                    }}>{todo}</Paper>
                ))}
            </Box>
            <Snackbar
                open={showNotif}
                autoHideDuration={2000}
                onClose={() => setShowNotif(false)}
                message="Todo successfully added."
            />
        </>
    )
}