import { useEffect, useState } from "react";
import axios from 'axios'

export default function App() {
    const [categories, setCategories] = useState([])
    const [name, setName] = useState('')

    useEffect(() => {
        axios.get('http://localhost:3068/all-categories')
        .then((response) => {
            setCategories(response.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            name : name
        }
        axios.post('http://localhost:3068/create-category', formData)
        .then((response) => {
            const result = response.data
            const newArr = [...categories, result]
            setCategories(newArr)
            setName('')
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const handleRemove = (id) => {
        const userConfirm = window.confirm("Are You Sure?")
        if(userConfirm) {
            axios.delete(`http://localhost:3068/remove-category/${id}`)
                .then((response) => {
                    const result = response.data
                    const newArr = categories.filter(ele => ele._id != result._id)
                    {//For each element ele in the categories array, it checks if the _id property of that element is not equal (!=) to the _id property of the result received from the server.If the condition is true, the element is included in the new array newArr.If the condition is false, the element is excluded from newArr.
                    }
                    setCategories(newArr)
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    }

    const handleEdit = ( id ) => {
        const name = prompt("Enter category name")
        const formData = {
            name : name
        }
        if(name) {
            axios.put( `http://localhost:3068/update-category/${id}`, formData)
            .then((response) => {
                const result = response.data
                const newArr = categories.map((ele) => {
                    if(ele._id == result._id) {
                        return result
                    }else{
                        return ele
                    }
                })
                setCategories(newArr)
            })
            .catch((err) => {
                console.log(err)
            })
        }
    }
    
    
    return (
        <div>
            <h1>Expense App</h1>
            <h2>Listing Categories - {categories.length}</h2>
            <ul>
                {categories.map((ele) => {
                    return <li key = {ele._id}> {ele.name} 
                    <button onClick={() => {handleEdit(ele._id)}}>Edit</button>
                    <button onClick={() => {handleRemove(ele._id)}}>Remove</button>
                    </li>   
                })}
            </ul>
                <h3>Add Categories</h3>
                <form onSubmit={handleSubmit}>
                <label htmlFor="name">Enter name</label> <br/>
                <input type="text" id="name" value={name} onChange={(e) => {
                    setName(e.target.value)
                }}/><br/>
                <input type="submit"/>  
                </form>
        </div>
    )
}
