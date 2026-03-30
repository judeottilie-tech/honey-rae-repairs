import { CustomerList } from "./components/customers/CustomerList.jsx"
import { TicketList } from "./components/tickets/TicketList.jsx"
import { EmployeeList } from "./components/employees/EmployeeList.jsx"
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
          <Route path="employees" element={<EmployeeList />} />
          <Route path="customers" element={<CustomerList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
