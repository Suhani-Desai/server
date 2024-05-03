const http = require('http') //helps you to create a web application
const server = http.createServer(function(req, res){ //this function is known as request listner/handler
    res.setHeader('Access-Control-Allow-Origin', '*') 
    if(req.url == '/'){
        res.end('Welcome to Website')
    }else if(req.url == '/students'){
        const students = [
            {id : 1, NAME : 'STUDENT 1'},
            {id : 2, NAME : 'STUDENT 2'},
            {id : 3, NAME : 'STUDENT 3'}
        ]
        res.end(JSON.stringify(students))
    }else if(req.url == '/courses'){
            const courses = [
                {id : 1, title : 'Full Stack'},
                {id : 1, title : 'React JS'},
            ]
            res.end(JSON.stringify(courses))
    }else{
        res.end('Page not found')
    }
})
server.listen(3051, function(){  //to start the server and handling the request
    console.log('server successfully running on port 3051')
})

//CORS - Cross Origin Resource Sharing