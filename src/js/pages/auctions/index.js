import getListings from "../../api/auth/requests/getListings.js";
import thumbnail from "../../templates/listings/thumbnails/index.js";

const allListings = document.querySelector("#allListings");

let page = 1; // Track the current page
let loading = false; // Track if data is currently being loaded
let allListingsLoaded = false; // Track if all listings have been loaded
let loadedListings = []; // Track the IDs of loaded listings

// Function to load initial listings
async function loadInitialListings() {
    try {
        const data = await getListings(page);
        const listings = data.data;

        const now = new Date();
        const activeListings = listings.filter(listing => new Date(listing.endsAt) > now);

        const initialListings = activeListings.slice(0, 12);

        initialListings.forEach(listing => {
            const thumbnailElement = thumbnail(listing);
            allListings.appendChild(thumbnailElement);
            loadedListings.push(listing.id);
        });
    } catch (error) {
        console.error("Error fetching initial listings:", error);
    } finally {
        loading = false; 
    }
}

async function loadMoreListings() {
    try {
        const data = await getListings(page);
        const listings = data.data;

        const now = new Date();
        const activeListings = listings.filter(listing => new Date(listing.endsAt) > now);

        const newActiveListings = activeListings.filter(listing => !loadedListings.includes(listing.id));

        if (newActiveListings.length < 12) {
            allListingsLoaded = true;
        }

        newActiveListings.forEach(listing => {
            const thumbnailElement = thumbnail(listing);
            allListings.appendChild(thumbnailElement);
            loadedListings.push(listing.id);
        });
    } catch (error) {
        console.error("Error fetching more listings:", error);
    } finally {
        loading = false; 
    }
}

function isBottom() {
    return window.innerHeight + window.scrollY >= document.body.offsetHeight;
}

async function handleScroll() {
    if (isBottom() && !loading && !allListingsLoaded) {
        loading = true; 
        page++; 
        await loadMoreListings(); 
    }
}

window.addEventListener("scroll", handleScroll);

loadInitialListings();