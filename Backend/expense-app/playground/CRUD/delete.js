const axios = require('axios')

const id = '65ddf8fa81758bf21ff365a2'

axios.delete(`http://localhost:3068/remove-category/${id}`)
.then((response) => {
    console.log(response.data)
})
.catch((err) => {
    console.log(err.response.data)
})