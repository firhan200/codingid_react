import { useEffect, useState } from "react"
import UserName from "./UserName"

const Form = () => {
    //[variable yg akan menampung value, function untuk mengubah variable nya]
    const [name, setName] = useState('Ed Sheeran')
    const [password, setPassword] = useState('Ed Sheeran')
    const [passwordError, setPasswordError] = useState('')

    useEffect(function () {
        //get data from server, logo, footer, menu
    }, [])
    
    useEffect(() => {
        //detect name changes, to check if name already exist
    }, [name])

    useEffect(() => {
        //check if password is valid
        if(password.length < 6){
            setPasswordError('password minimum 6')
        }else{
            setPasswordError('')
        }
    }, [password])

    return (
        <div>
            <UserName person={name} />
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
            { passwordError }
            <button onClick={() => setName("John")}>Change Name</button>
        </div>
    )
}

export default Form