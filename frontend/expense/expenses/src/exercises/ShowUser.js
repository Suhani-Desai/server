import { useState, useEffect } from "react";
import axios from "axios";

export default function ShowUser() {
    const UserIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const [user, setUser] = useState({})
    const [id, setId] = useState('')

    useEffect(() => {
        if(id){
            const url =  `https://jsonplaceholder.typicode.com/users/${id}`
            axios.get(url)
            .then((response) => {
                const result = response.data
                setUser(result)
            })
        }
    }, [id])

    const handleChange = (e) => {
        setId(e.target.value)
    }

    return (
        <div>
            <h2> Show User </h2>

            <select value = { id } onChange = { handleChange }>
                <option value = "">Select User Id</option>
                { UserIds.map((ele, i) => {
                    return <option value = { ele } key = {i} > { ele } </option>
                })}
            </select>

            <h2> { user.username } </h2>
        </div>
    )
}