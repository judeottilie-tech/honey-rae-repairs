import { useEffect, useState } from "react"
import { getAllTickets } from "../../services/ticketService.jsx"
import "./Tickets.css"
import { Ticket } from "./Ticket.jsx"

export const TicketList = () => {
  const [allTickets, setAllTickets] = useState([])
  const [showEmergencyOnly, setShowEmergencyOnly] = useState(false)
  const [filteredTickets, setFilteredTickets] = useState([])

  //useEffect runs code ONLY on initial render which we do by passing an empty dependency array []
  useEffect(() => {
    //function is WHAT we want to happen, callback function
    //getAllTickets returns a promise, so chain .then()
    //data is stored in allTickets state
    getAllTickets().then((ticketsArray) => {
      setAllTickets(ticketsArray)
      console.log("tickets set!")
    })
  }, []) // ONLY runs on initial render of component, array is WHEN we want it to happen

  useEffect(() => {
    //runs whenever showEmergencyonly or allTickets changes
    if (showEmergencyOnly) {
      const emergencyTickets = allTickets.filter(
        //.filter returns new array with only items where emergency = true
        (ticket) => ticket.emergency === true,
      )
      setFilteredTickets(emergencyTickets)
    } else {
      //no filter active so show everything
      setFilteredTickets(allTickets)
    }
  }, [showEmergencyOnly, allTickets]) //when dependency contains state variable, useEffect is watching for any time the value changes. this useEffect depends on both showEmergencyOnly and allTickets

  return (
    //display emergency toggle button and also filter tickets by emergency
    <div className="tickets-container">
      <h2>Tickets</h2>
      <div>
        <button
          className="filter-btn btn-primary"
          onClick={() => {
            setShowEmergencyOnly(true)
          }}
        >
          Emergency
        </button>

        <button
          className="filter-btn btn-info"
          onClick={() => {
            setShowEmergencyOnly(false)
          }}
          //key is required to track list of items
          //.map() loops thru filteredTickets, returning <section>s for each
          //if emergency is true, show yes, otherwise no
        >
          Show All
        </button>
      </div>
      <article className="tickets">
        {filteredTickets.map((ticketObj) => {
          return <Ticket ticket={ticketObj} name="Joe" key={ticketObj.id} />

        })}
      </article>
    </div>
  )
}
