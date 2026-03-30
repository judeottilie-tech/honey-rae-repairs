import "./App.css"
import { CustomerList } from "./components/customers/CustomerList.jsx"
import { TicketList } from "./components/tickets/TicketList.jsx"
import { EmployeeList } from "./components/employees/EmployeeList.jsx"
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom"
import { NavBar } from "./components/nav/NavBar.jsx"

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
          <Route path="tickets" element={<TicketList />} />
          <Route path="employees" element={<EmployeeList />} />
          <Route path="customers" element={<CustomerList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
