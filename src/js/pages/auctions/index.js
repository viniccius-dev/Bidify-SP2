import getListings from "../../api/auth/requests/getListings.js";
import thumbnail from "../../templates/listings/thumbnails/index.js";

const allListings = document.querySelector("#allListings");
const amountOfListings = document.querySelector("#amountOfListings");

let activeListings = [];

async function fetchAndDisplayListings() {
    const data = await getListings();
    activeListings = data.data.filter(listing => new Date(listing.endsAt) > new Date());
    sortListings("Latest"); 
    amountOfListings.textContent = `(${activeListings.length} listings)`;
}

fetchAndDisplayListings();

document.getElementById("sort-by").addEventListener("change", () => {
    const sortBy = document.getElementById("sort-by").value;
    sortListings(sortBy);
});

function sortListings(sortBy) {
    switch (sortBy) {
        case "Latest":
            activeListings.sort((a, b) => new Date(b.created) - new Date(a.created));
            break;
        case "Ending":
            activeListings.sort((a, b) => new Date(a.endsAt) - new Date(b.endsAt));
            break;
        case "TitleAZ":
            activeListings.sort((a, b) => a.title.localeCompare(b.title));
            break;
        case "TitleZA":
            activeListings.sort((a, b) => b.title.localeCompare(a.title));
            break;
    }
    displayListings();
}

function displayListings() {
    allListings.innerHTML = ""; 

    activeListings.forEach(listing => {
        allListings.append(thumbnail(listing));
    });
}
