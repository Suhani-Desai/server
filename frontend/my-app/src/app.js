//component
function App(){
    //logic, srtucture + style
    const categories = [
        {_id : 'dct123', name : 'Food'},
        {_id : 'dct124', name : 'Rent'},
        {_id : 'dct125', name : 'Travel'}
    ]

    const expenses = [
        {_id : 'dct222', expenseDate : '2024-02-25', title : 'Grocery Shopping', amount : 1000, category : 'Food'},
        {_id : 'dct223', expenseDate : '2024-02-26', title : 'Metro Pass', amount : 750, category : 'Travel'}
    ]

    //const fruits = ['Mango', 'Apple', 'Watermelon']
    // const users = [
    //     {
    //       id: 1,
    //       name: "John Doe",
    //       image: "https://randomuser.me/api/portraits/men/1.jpg"
    //     },
    //     {
    //       id: 2,
    //       name: "Jane Doe",
    //       image: "https://randomuser.me/api/portraits/women/2.jpg"
    //     },
    //     {
    //       id: 3,
    //       name: "Sam Smith",
    //       image: "https://randomuser.me/api/portraits/men/3.jpg"
    //     }
    //   ]
    return (
        <div>
            <h1>Expense App</h1>
            <h2>Listing Categories - {categories.length}</h2>
            <ul>
                {/*
                 //when we are generating a loop or doing some operations that time we have to provide the key, and when the source code is written like here we wrote the <h1></h1>tag and the <h2> tag taht time the unique id or element is not required. And if the objects donot have id then we can use index number as a unique element
                */}
                {categories.map(function(ele){
                    return <li key={ ele._id }>{ ele.name } </li>  //the key is to keep the track of react, and it should be unique. The li tag is still jsx hence we are using {} to write the js code.
                    
                })}
            </ul>

            <h2>Listing Expenses - {expenses.length}</h2>
            <table border = "1">
                <thead>
                    <tr>
                        <th>expense Date</th>
                        <th>Amount</th>
                        <th>Category</th>
                        <th>Title</th>
                    </tr>
                </thead>
                <tbody>
                    {expenses.map((ele) => {
                        return <tr key = {ele._id}>
                            <td> { ele.expenseDate } </td>
                            <td> { ele.amount } </td>
                            <td> { ele.category } </td>
                            <td> { ele.title } </td>
                        </tr>
                        
                    })}
                </tbody>
            </table>

                 <h2>Total Expenses - {expenses.reduce((acc, cv) => {
                    acc = acc + cv.amount
                    return acc
                 }, 0)}</h2>   

            {/* <h2>Listing Fruits - {fruits.length} </h2>
            <ul>
                {fruits.map(function(ele, i){
                    return <li key={ i }>{ ele }</li>
                })}
            </ul> */}

            {/* <ul>
                {users.map(function(ele){
                    return <li key = {ele.id} >
                        <img src={ele.image} alt={ele.name}/>
                        {ele.name}</li>
                })}
            </ul> */}

        </div>
    )
}

export default App
