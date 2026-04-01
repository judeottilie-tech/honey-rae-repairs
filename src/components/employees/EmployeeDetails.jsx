import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getEmployeeByUserId } from "../../services/employeeService.jsx"

export const EmployeeDetails = () => {
    // /customer/3
    // path="/customer/:customerId"
    const [employee, setEmployee] = useState({})
    const { employeeId } = useParams() 

    useEffect(() => {
        getEmployeeByUserId(employeeId).then((employeeArray) => {
          setEmployee(employeeArray[0])
        })
    }, [employeeId])

    return (
    <div className="employee-details">
        <div>Name</div>
        <div>{employee.user?.fullName}</div>
        <div>Email</div>
        <div>{employee.user?.email}</div>
    </div>
    )
}