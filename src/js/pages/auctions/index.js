import getListings from "../../api/auth/requests/getListings.js";
import thumbnail from "../../templates/listings/thumbnails/index.js";

const allListings = document.querySelector("#allListings");

const data = await getListings();
const listings = data.data;

const activeListings = [] 

listings.forEach(listing => {
   if(new Date(listing.endsAt) > new Date()) activeListings.push(listing);
})
console.log(activeListings)
const amountOfListings = document.querySelector("#amountOfListings");

const totalListings = activeListings.length;
amountOfListings.textContent = `(${totalListings} listings)`;

activeListings.forEach(listing => {
    allListings.append(thumbnail(listing));
})