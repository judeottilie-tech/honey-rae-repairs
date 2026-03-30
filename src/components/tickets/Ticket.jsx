import { useEffect, useState } from "react"
import { getAllEmployees } from "../../services/employeeService.jsx"


export const Ticket = ({ ticket }) => {
    const [employees, setEmployees] = useState([])
    const [assignedEmployee, setAssignedEmployee] = useState({})

    useEffect (() => {
        getAllEmployees().then((employeesArray) => {
            setEmployees(employeesArray)
        })
}, []) //having the empty dependency array makes the function stop after the initial render

    useEffect(() => {
      const foundEmployee = employees.find(
        (employee) => employee.id === ticket.employeeTickets[0]?.employeeId
      )
      setAssignedEmployee(foundEmployee)
    }, [employees, ticket])

  return (
    <section className="ticket" key={ticket.id}>
      <header className="ticket-info">#{ticket.id}</header>
      <div>{ticket.description}</div>
      <footer>
        <div>
            <div className="ticket-info">assignee</div>
            <div>
                {assignedEmployee ? assignedEmployee.user?.fullName : "None"}
            </div>
        </div>
        <div>
          <div className="ticket-info">emergency</div>
          <div>{ticket.emergency ? "yes" : "no"}</div>
        </div>
      </footer>
    </section>
  )
}
