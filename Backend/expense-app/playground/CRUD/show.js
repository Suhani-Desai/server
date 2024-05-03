const axios = require('axios')

const id = '65de056e027d7b7e26912fd0'
axios.get(`http://localhost:3068/single-category/${id}`)
.then((response) => {
    console.log(response.data)
})
.catch((err) => {
    console.log(err.response.data)
})