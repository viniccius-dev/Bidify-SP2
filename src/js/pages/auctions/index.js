import getListings from "../../api/auth/requests/getListings.js";
import thumbnail from "../../templates/listings/thumbnails/index.js";

const allListings = document.querySelector("#allListings");
const amountOfListings = document.querySelector("#amountOfListings");

let page = 1;
let loading = false;
let allListingsLoaded = false;
let loadedListings = [];
let totalActiveListings = 0;

async function loadInitialListings() {
    try {
        const data = await getListings(page);
        const listings = data.data;

        const now = new Date();
        const activeListings = listings.filter(listing => new Date(listing.endsAt) > now);
        totalActiveListings = activeListings.length; // Count total active listings

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
        updateAmountOfListings(); // Update the displayed total number of listings
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
        updateAmountOfListings(); // Update the displayed total number of listings
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

function updateAmountOfListings() {
    amountOfListings.textContent = `(${totalActiveListings} listings)`;
}

loadInitialListings();