const axios = require('axios')

const id = '65f81409dbf97b607c42c5d3'
const formData = {
    name : 'xyz'
}
axios.put(`http://localhost:3068/update-category/${id}`, formData)
.then((response) => {
    console.log(response.data)
})
.catch((err) => {
    console.log(err.response.data)
})