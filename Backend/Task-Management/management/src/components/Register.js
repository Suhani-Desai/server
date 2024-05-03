import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
export default function Register(){
    const navigate = useNavigate()
    const [username, setUsername] = useState('')
    const [password, setpassword] = useState('')
    const [email, setEmail] = useState('')
    //const [serverErrors, setServerErrors] = useState(null)

    const handleSubmit = async(e) => {
        e.preventDefault()

        const formData = {
            username : username,
            email : email,
            password : password
        }
        try{
            const response = await axios.post('', formData)
            console.log(response.data)
            navigate('/login')
        }catch(err){
            console.log(err)
        }
     }
    return (
        <div>
            <h3>Register With Us</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Enter username</label><br />
                <input type="text"
                 value={username} 
                 onChange={e => setUsername(e.target.value)} id="username"/>
                 <br />
                 <label htmlFor="email">Enter Email</label><br />
                <input type="text"
                 value={email} 
                 onChange={e => setEmail(e.target.value)} id="email"/>
                 <br />
                 <label htmlFor="password">Enter Password</label><br />
                <input type="password"
                 value={password} 
                 onChange={e => setpassword(e.target.value)} id="password"/>
                 <br />
                 <input type="submit"/>
            </form>
        </div>
    )
}