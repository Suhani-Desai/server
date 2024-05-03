import { useEffect, useState } from "react";
import axios from "axios";
export default function UsersList() {
    const [ username, setUsername] = useState([])

    useEffect(() => {
        axios.get('http://jsonplaceholder.typicode.com/users')
        .then((response) => {
            const result = response.data
            setUsername(result)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])

    return (
        <div>
            <ul>
                {username.map((ele) => {
                    return <li key={ele.id}>{ele.name}</li>
                })}
            </ul>
        </div>
    )
}