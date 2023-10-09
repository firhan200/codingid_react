import { useState } from "react"
import UserName from "./UserName"

const Form = () => {
    //[variable yg akan menampung value, function untuk mengubah variable nya]
    const [name, setName] = useState('Ed Sheeran')

    return (
        <div>
            <UserName name={name}/>
            <input type="text" value={name} onChange={e => setName(e.target.value)}/>
        </div>
    )
}

export default Form