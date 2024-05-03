//const express = require('express') - common js module loader
import React from 'react' //es6 module loader
import ReactDOM from 'react-dom/client'  //reactdom is used because we are doing web development, and if it wasn't a web developmet then the react native keyword would be used
//import App from './app'
import UsersList from './exercises/UsersList'
import Event from './exercises/Event'
import Events2 from './exercises/Events2'
import Task1 from './exercises/Task1'

const root = ReactDOM.createRoot(document.getElementById('root'))  

root.render(<UsersList/>)