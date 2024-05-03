export default function Task1(){
    const projects = [
        {
          name: "Project Alpha",
          teamMembers: ["Alice", "Bob", "Charlie"],
          manager: "Diane",
          budget: 100000
        },
        {
          name: "Project Beta",
          teamMembers: ["Eve", "Frank", "Grace"],
          manager: "Hank",
          budget: 200000
        },
        {
          name: "Project Gamma",
          teamMembers: ["Ivy", "John", "Kevin"],
          manager: "Liam",
          budget: 150000
        },
        {
          name: "Project Delta",
          teamMembers: ["Mia", "Nathan", "Olivia"],
          manager: "Peter",
          budget: 120000
        },
        {
          name: "Project Epsilon",
          teamMembers: ["Quinn", "Rachel", "Steve"],
          manager: "Tom",
          budget: 180000
        }
      ]

      const handleShow = (name) => {
        alert(`Team members - ${name.teamMembers.join(', ')}
Budget  ${name.budget}` )
      }

      const handleSearch = () => {
        const name = prompt("Enter name")
        const project = projects.find((ele) => {
            return ele.teamMembers.includes(name)
        })
        if(project){
            alert(project.name)
        }else{
            alert('employee not found')
        }
      }

      return (
        <div>
        <ul>
            <h2>Listing Projects - {projects.length}</h2>
           {projects.map((ele, i) => {
            return <li key = { i } > {ele.name} - {ele.manager}
             <button onClick={() => {handleShow(ele)}}>View Details</button>
             
         </li>
           })} 
           
        </ul>

        <button onClick={() => {handleSearch()}}>Search Employee</button>
        </div>
      )
    
}