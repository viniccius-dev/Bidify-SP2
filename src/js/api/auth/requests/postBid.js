import config from "../../config.js"
import storage from "../../../helpers/storage.js"
import createElement from "../../../helpers/createElement.js"

export default async function postBid(id, body) {
    const url = `${config.BaseURL}auction/listings/${id}/bids`

    const token = storage.get("token")
   
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
            "X-Noroff-API-Key": config.APIKey,
        },
        body: JSON.stringify(body)
    } )

    const data = await response.json()

   if(data) {

    const bidHistory = document.querySelector("#bidHistory")
    console
    const bidDetails = bidHistory.length % 2 === 0 ? createElement("div",  "bg-white xl:bg-grey grid grid-cols-2 py-3 rounded") : createElement("div", "grid grid-cols-2 py-3 rounded")

  const bidder = createElement("p", "pl-3", (bidItems.length + 1) + ". " + bid.bidder.name);

  const bidAmount = createElement("p", "text-right pr-3", bid.amount + " credits");

  bidDetails.append(bidder, bidAmount);
  bidHistory.appendChild(bidDetails)
   }
 


}

  
