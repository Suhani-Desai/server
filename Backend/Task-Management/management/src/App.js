import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'  //whenevevr the URL changes, based on the URL a certain component is rendered.
import Home from "./components/Home";  
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <BrowserRouter> {/*the routing should be available within the entire application hence BrowserRouter is the parent most element*/}
      <div>
        <h2>Task Management</h2>
          <Link to="/">Home</Link> |   {/**in the URL it shows the name of the page which we are in */}
          <Link to="/register">Register</Link> | 
          <Link to="/login">Login</Link>

        <Routes>
          <Route path="/" element={<Home />} />  {/**when we click on the home button it navigates us to the home page */}
          <Route path="/register" element={<Register />} /> {/**path = specifies the URL, element = which component to render based on the given URL */}
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter> /*when the URL changes that respective components should be displayed */
  );
}

export default App;