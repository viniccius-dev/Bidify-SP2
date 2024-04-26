import getListings from "../../api/auth/requests/getListings.js";
import thumbnail from "../../templates/listings/thumbnails/index.js";
import perPage from "./perPage.js";

const allListings = document.querySelector("#allListings");

(async () => {
  try {
    const data = await getListings();
    const listings = data.data;

    const now = new Date();
    const activeListings = listings.filter(listing => new Date(listing.endsAt) > now);

    activeListings.forEach(listing => {
      const thumbnailElement = thumbnail(listing); 
      allListings.appendChild(thumbnailElement); 
    });
  } catch (error) {
    console.error("Error fetching listings:", error);
  }
})();

perPage();

