import { CustomerList } from "./components/customers/CustomerList.jsx"
import { CustomerDetails } from "./components/customers/CustomerDetails.jsx"
import { TicketList } from "./components/tickets/TicketList.jsx"
import { EmployeeList } from "./components/employees/EmployeeList.jsx"
import { EmployeeDetails } from "./components/employees/EmployeeDetails.jsx"
import { Welcome } from "./components/welcome/Welcome.jsx"
import { NavBar } from "./components/nav/NavBar.jsx"
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom"
import "./App.css"

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <NavBar />
              <Outlet />
            </>
          }
        >
          <Route index element={<Welcome />} />
          <Route path="tickets" element={<TicketList />} />

          <Route path="employees">
            <Route index element={<EmployeeList />} />
            <Route path=":employeeId" element={<EmployeeDetails />} />
          </Route>

          <Route path="customers">
            <Route index element={<CustomerList />} />
            <Route path=":customerId" element={<CustomerDetails />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
