export default function Events2() {
    const fruits = ['mango','apple', 'orange']

    const handleSelect = (name) => {
        alert ("You have selected " +name )
    }

    const handleVowels = (names) => {
    
    const vowels = 'aeiou'
    let count = 0
    for(const char of names) {
        if(vowels.includes(char)){
            count++
        }
        alert(`Total vowels in ${names} is ${count}`)
    }
}

const handleReverse = (name) => {
    alert(name.split('').reverse().join(''))
}
    return (
        <ul>
            {fruits.map((ele, i) => {
                return <li key = { i } > {ele} 
                <button onClick={() => { handleSelect(ele)}}>Select</button>
                <button onClick={() => { handleVowels(ele)}}>Count Vowels</button>
                <button onClick={() => { handleReverse(ele)}}>Reverse words</button>
                </li>
            })}
        </ul>
    )
    return(
        <ul>
             {fruits.map((ele, i) => {
                return <li key = { i } > {ele} 
                <button onClick={() => { handleVowels()}}>Vowels
                </button>
                </li>
             })}
        </ul>
    )
}
