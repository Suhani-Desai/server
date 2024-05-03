import { useState } from "react"
export default function Login(){
    const [form, setForm] = useState({
        email:'',
        password:'',
        //serverErrors:''
    })
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    const handleChange = (e) => {
        const { name, value } = e.target
        setForm({...form, [name] : value})
    }
    return (
        <div>
            <h3>Login</h3>
            <form onSubmit={handleSubmit}>
            <label htmlFor="email">Enter email</label><br />
                <input type="text"
                 value={form.email} 
                 onChange={handleChange}
                 id="email"/>
                 <br />
                 <label htmlFor="password">Enter password</label><br />
                <input type="password"
                 value={form.password} 
                 onChange={handleChange}
                 id="password"/>
                 <br />

                 <input type="submit" />
            </form>
        </div>
    )
}