import config from "../../config.js"
import storage from "../../../helpers/storage.js"

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



}

  
