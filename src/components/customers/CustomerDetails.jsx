import { useParams } from "react-router-dom"

export const CustomerDetails = () => {
    // /customer/3
    // path="/customer/:customerId"

    const { customerId } = useParams() 

    return <div>Customer #{customerId}</div>
}