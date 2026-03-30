
export const TicketFilterBar = ({ setShowEmergencyOnly, setSearchTerm }) => {
    return (
<div className="filter-bar">
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
        <input
          onChange={(event) => {
            setSearchTerm(event.target.value)
          }}
          type="text"
          placeholder="Search Tickets"
          className="ticket-search"
        />
      </div>
    )
}