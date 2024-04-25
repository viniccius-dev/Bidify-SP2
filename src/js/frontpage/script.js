import headerWord from "/src/js/effects/headerWord.js";
import imageCarousel from "../effects/imageCarousel.js";
import getListings from "../api/auth/requests/getListings.js"

headerWord();
imageCarousel();

const data = await getListings();

const listings = data.data;

const activeListings = []
listings.forEach(listing => {

    const endDate = new Date(listing.endsAt);
    const now = new Date()
    
    if (endDate > now) {
      activeListings.push(listing)  
    }
})

console.log(activeListings)