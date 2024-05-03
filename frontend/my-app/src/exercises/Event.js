export function Event(){
    //event handler, function expression, callback function, anonymous
    //these are function expressions wherre we assign components(functions) to a variable, and we also do the function declaration where we write the function keyword and write the starting name with the capital letter
    const handleGreet = (e) => {
        alert("Hi There")
    }
    const handleShowDateTime = (e) => {
        alert ( new Date())
    }

    const handleShow = (item) => {
        alert("You have clicked " + item)
    }
    return (
        <div>
            <h2>Event Handlers</h2>
            <button onClick = {handleGreet}>Greet</button>
            <button onClick ={handleShowDateTime}>Show DateTime</button>

            <ul>
                <li>Item 1 <button onClick = {() => { handleShow('Item 1')}}>Select</button></li>
                <li>Item 2 <button onClick = {() => { handleShow('Item 2')}}>Select</button></li>
                <li>Item 3 <button onClick = {() => { handleShow('Item 3')}}>Select</button></li>
            </ul>
        </div>
    )
}

export default Event