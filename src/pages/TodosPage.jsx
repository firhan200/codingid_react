import { Container, Typography } from "@mui/material";
import TodoList from "../components/Todos/TodoList";

export default function TodosPage(){
    return (
        <Container maxWidth="sm" sx={{
            textAlign: "center"
        }}>
            <Typography variant="h4">Todo Listing App</Typography>
            <Typography variant="p">Create, Read, Update and Delete todo</Typography>
            <TodoList />
        </Container>
    )
}