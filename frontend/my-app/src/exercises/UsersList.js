function UsersList() {
    const users = [
        { id: 1, username: "Aarav Patel", email: "aarav.patel@example.com", country: "India", gender: "Male", profilePic: "https://i.pravatar.cc/150?img=11" },
        { id: 2, username: "Lily Wang", email: "lily.wang@example.com", country: "China", gender: "Female", profilePic: "https://i.pravatar.cc/150?img=22" },
        { id: 3, username: "Ethan Jones", email: "ethan.jones@example.com", country: "USA", gender: "Male", profilePic: "https://i.pravatar.cc/150?img=33" },
        { id: 4, username: "Sophia Liu", email: "sophia.liu@example.com", country: "China", gender: "Female", profilePic: "https://i.pravatar.cc/150?img=44" },
        { id: 5, username: "Vihaan Krishna", email: "vihaan.krishna@example.com", country: "India", gender: "Male", profilePic: "https://i.pravatar.cc/150?img=55" },
        { id: 6, username: "Emma Chen", email: "emma.chen@example.com", country: "China", gender: "Female", profilePic: "https://i.pravatar.cc/150?img=66" },
        { id: 7, username: "Noah Patel", email: "noah.patel@example.com", country: "India", gender: "Male", profilePic: "https://i.pravatar.cc/150?img=77" },
        { id: 8, username: "Olivia Zhang", email: "olivia.zhang@example.com", country: "China", gender: "Female", profilePic: "https://i.pravatar.cc/150?img=88" },
        { id: 9, username: "Mason Smith", email: "mason.smith@example.com", country: "USA", gender: "Male", profilePic: "https://i.pravatar.cc/150?img=99" },
        { id: 10, username: "Ava Gupta", email: "ava.gupta@example.com", country: "India", gender: "Female", profilePic: "https://i.pravatar.cc/150?img=100" }
      ];

      /*
        display all the users in table format 
        1. columns - profile, username, gender, email, country 
      */ 

        const result = {}
        for(const ele of users) {
            if(ele.country in result) {
                result[ele.country]++
            }else{
                result[ele.country] = 1
            }
        }
        console.log(result)

        function genderCount(gender){
            return users.filter(ele => ele.gender === gender).length
        }
    return (
        <div>
            <h1>UsersList</h1>
                <table border = '1'>
                    <thead>
                        <tr>
                            <th> Profile </th>
                            <th> UserName </th>
                            <th> Gender </th>
                            <th> Email </th>
                            <th> Country </th>
                        </tr>
                    </thead>
                    <tbody>
                        { users.map((ele) => {
                            return <tr key = { ele.id }>
                                <td><img src={ ele.profilePic } alt = { ele.name }></img></td>
                                <td>{ ele.username }</td>
                                <td>{ ele.gender }</td>
                                <td>{ ele.email }</td>
                                <td>{ ele.country }</td>
                            </tr>
                        })}
                    </tbody>
                </table>

                <h2>Total Users - Male { genderCount('Male')}, Female { genderCount('Female')}</h2>

                <table border = '1'>
                    <thead>
                        <tr>
                            <th>Country</th>
                            <th>Count</th>
                        </tr>
                    </thead>
                    <tbody>
                        { Object.entries(result).map((ele, i) => {
                            return (
                                <tr key = {i}>
                                    <td>{ele[0]}</td>
                                    <td>{ele[1]}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
        </div>
    )
}

export default UsersList