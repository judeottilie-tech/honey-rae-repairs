import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getEmployeeByUserId } from "../../services/employeeService.jsx"

export const EmployeeDetails = () => {
  const [employee, setEmployee] = useState({})
  const { employeeId } = useParams()

  useEffect(() => {
    getEmployeeByUserId(employeeId).then((employeeArray) => {
      console.log("employeeId:", employeeId)
      console.log("employeeArray:", employeeArray)
      if (employeeArray.length > 0) {
        setEmployee(employeeArray[0])
      }
    })
  }, [employeeId])

  if (!employee.user) return null

  return (
    <div className="employee-details">
      <div>Name</div>
      <div>{employee.user?.fullName}</div>
      <div>Email</div>
      <div>{employee.user?.email}</div>
    </div>
  )
}