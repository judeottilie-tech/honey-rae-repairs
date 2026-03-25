import { useEffect, useState } from "react"
import { getAllTickets } from "./services/ticketService"
import "./App.css"

export const App = () => {
  const [allTickets, setAllTickets] = useState([])

  useEffect(() => {
    getAllTickets().then((ticketsArray) => {
      setAllTickets(ticketsArray)
      console.log("tickets set!")
    })

  }, []) // ONLY runs on initial render of component

    return <div className="tickets-container">
        <h2>Tickets</h2>
        <article className="tickets">
          {allTickets.map(ticket => {
            return (
              <section className="ticket" key= {ticket.id}>
                <header className="ticket-info">#{ticket.id}</header>
                <div>{ticket.description}</div>
                <footer>
                  <div>
                    <div className="ticket-info">emergency</div>
                      <div>{ticket.emergency ? "yes" : "no"}</div>
                  </div>
                </footer>
              </section>
            )
          })}
        </article>
      </div>
}
