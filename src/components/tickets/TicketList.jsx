import { useEffect, useState } from "react"
import { getAllTickets } from "../../services/ticketService.jsx"
import "./Tickets.css"
import { Ticket } from "./Ticket.jsx"
import { TicketFilterBar } from "./TicketFilterBar.jsx"
import "./Tickets.css"

export const TicketList = ({ currentUser }) => {
  const [allTickets, setAllTickets] = useState([])
  const [showEmergencyOnly, setShowEmergencyOnly] = useState(false)
  const [showOpenOnly, setShowOpenOnly] = useState(false)
  const [filteredTickets, setFilteredTickets] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  console.log("currentUser:", currentUser)

  const getAndSetTickets = () => {
    if (!currentUser) return 
    getAllTickets().then((ticketsArray) => {
      if (currentUser.isStaff) {
      setAllTickets(ticketsArray)
      } else {
        const customerTickets = ticketsArray.filter(
          (ticket) => ticket.userId === currentUser.id 
        )
        setAllTickets(customerTickets)
      }
    })
  }

  //useEffect runs code ONLY on initial render which we do by passing an empty dependency array []
  useEffect(() => {
   getAndSetTickets()
  }, [currentUser]) // ONLY runs on initial render of component, array is WHEN we want it to happen

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

  useEffect(() => {
    //search bar useEffect connecting to the onChange setSearchTerm, this allows searching in caps and lowercase too
    const foundTickets = allTickets.filter((ticket) =>
      ticket.description.toLowerCase().includes(searchTerm.toLowerCase()),
    )
    setFilteredTickets(foundTickets)
  }, [searchTerm, allTickets])

  useEffect(() => {
    if (showOpenOnly) {
      const openTickets = allTickets.filter((ticket) => ticket.dateCompleted === '')
      setFilteredTickets(openTickets)
    } else {
      setFilteredTickets(allTickets)
    }
  }, [showOpenOnly, allTickets])

  return (
    //display emergency toggle button and also filter tickets by emergency
    <div className="tickets-container">
      <h2>Tickets</h2>
      
    <TicketFilterBar 
    setShowEmergencyOnly={setShowEmergencyOnly} 
    setShowOpenOnly={setShowOpenOnly}
    setSearchTerm={setSearchTerm} 
    currentUser={currentUser}
    />

      <article className="tickets">
        {filteredTickets.map((ticketObj) => {
          return (
          <Ticket 
          ticket={ticketObj} 
          currentUser={currentUser}
          getAndSetTickets={getAndSetTickets}
          key={ticketObj.id}
          /> 
          )
        })}
      </article>
    </div>
  )
}
