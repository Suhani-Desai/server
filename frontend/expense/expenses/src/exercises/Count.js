import { useState, useEffect } from 'react'

export default function Count() {
    const [ count, setCount ] = useState(0)
    const [ click, setClick ] = useState(10)

    useEffect(() => {  //after every render
        console.log('Use Effect without []')
    })

    useEffect(() => {  //only after the first render
        console.log('use Effect with []')
    }, [])

    useEffect(() => {  //after the first render + whenever click state value changes
        console.log('use Effect click')
    }, [click])

    const handleInc = () => {
        console.log('event handler count')
        setCount(count + 1)
    }

    const handle10 = () => {
        console.log('Event handler click')
        setClick( click + 10 )
    }

    return(
        <div>
            {console.log('jsx')}
            <h2> { count } </h2>
            <button onClick={handleInc}> +1 </button>
            <button onClick={handle10}> +10 </button>
        </div>
    )
} 