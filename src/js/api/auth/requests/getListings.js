import config from "../../config.js";


export default async function getListings() {

const url = config.BaseURL + "auction/listings?_bids=true"

const response = await fetch(url, {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
        "X-Noroff-API-Key": config.APIKey
    },
})
    
const data = await response.json()
console.log(response)

return data;

}