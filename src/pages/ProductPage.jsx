import { Typography } from "@mui/material";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function ProductPage(){
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if(id === "1"){
            navigate("/login")
        }
    }, [])

    return (
        <div>
            <Typography variant="h1">Page with Id { id }</Typography>
        </div>
    )
}