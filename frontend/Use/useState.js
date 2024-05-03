/*
1. If we want any changes to appear in the UI, by using local variables we can do the changes but it will not      appear in UI, instead it does the changes in the console.
2. If we want to display the changes in the UI, we can do it using these local variables by re-rendering(writing  the same logic twice) them. But it is not the proper way to do that.
3. So instead of re-writing the same code twice react gives us the way to do it, and it is useState it internally re-renders the the whole thing and then displays it in the UI.
*/

const { useState } = React
function App() {
    const[count, setCount] = useState(0)
    const handleClick = () => {
        setCount(count + 1)
    }
    return (
        <div>
            <h1> Counter - {count}</h1>
        </div>
    )
} 
ReactDOM.render(<App/>)