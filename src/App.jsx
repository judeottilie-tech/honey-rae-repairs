import { Login } from "./components/auth/Login"
import { Register } from "./components/auth/Register"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ApplicationViews } from "./views/ApplicationViews"
import { Authorized } from "./views/Authorized"
import "./App.css"

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="*" element={
          //check if the user is authorized first. if yes, application views is the child component of authorized, therefore if authorized finds the honeyuser object, returns the routes on application views module
            <Authorized>
              <ApplicationViews />
            </Authorized>
        } />
      </Routes>
    </BrowserRouter>
  )
}
