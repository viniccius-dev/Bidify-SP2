import getListings from "../../api/auth/requests/getListings.js";
import endsAt from "../../helpers/endsAt.js";
import createElement from "../../helpers/createElement.js";
import mediaElements from "./mediaElements.js";
import listingImages from "../listing/listingImages.js";

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const data = await getListings(id);
const listing = data.data;

document.querySelector("#userName").textContent = listing.seller.name;
document.querySelector("#listingTitle").textContent = listing.title;

const formattedEndingTime = endsAt(listing.endsAt);
document.querySelector("#endingTime").textContent = formattedEndingTime;

document.querySelector("#listingDescription").textContent = listing.description;

const tagsContainer = document.querySelector("#tagsContainer");

listing.tags.forEach(tag => {
  const tagText = document.createElement("p");
  tagText.textContent = "#" + tag;

  tagsContainer.append(tagText);
});

document.querySelector("#currentBid").textContent = listing.bids.length > 0 ? listing.bids[listing.bids.length - 1].amount + " credits": 0 + " credits";

const userImage = document.querySelector("#userImage");
userImage.src = listing.seller.avatar.url;

const bidHistory = document.querySelector("#bidHistory");

listing.bids.reverse()


listing.bids.forEach((bid, i) => {
  const bidDetails =  i % 2 === 0 ? createElement("div",  "bg-white xl:bg-grey grid grid-cols-2 py-3 rounded") : createElement("div", "grid grid-cols-2 py-3 rounded")

  const bidder = createElement("p", "pl-3",i+1+". "+bid.bidder.name);

  const bidAmount = createElement("p", "text-right pr-3", bid.amount + " credits");

  bidDetails.append(bidder, bidAmount);
  bidHistory.append(bidDetails);

});

console.log(listing.media);

// listingImages(listing.media);
if (listing.media.length > 1) {mediaElements(listing.media)}



else if (listing.media.length === 1) {}


else {

}