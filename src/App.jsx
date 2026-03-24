import { useEffect, useState } from "react"
import { getAllTickets } from "./services/ticketServices"

export const App = () => {
  const [allTickets, setAllTickets] = useState([])

  useEffect(() => {
 getAllTickets().then((ticketsArray) => {
    setAllTickets(ticketsArray)
    console.log("tickets set!")
   })

  }, []) // ONLY runs on initial render of component

    return <></>

}