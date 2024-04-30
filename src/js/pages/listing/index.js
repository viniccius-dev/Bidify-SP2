import init from "../../updates/init.js";
import getListings from "../../api/auth/requests/getListings.js";
import createElement from "../../helpers/createElement.js";
import mediaElements from "./mediaElements.js";
import liveEndsAt from "../../helpers/liveEndsAt.js";
import listingMedia from "./listingMedia.js";
import placeBid from "./placeBid.js";

const listingMediaContainer = document.querySelector("#listingMediaContainer");

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const data = await getListings(id);
const listing = data.data;

const profileName = document.querySelector("#userName");

profileName.textContent = listing.seller.name;
profileName.href = `/pages/profile/?name=${listing.seller.name}`

console.log(profileName)
document.querySelector("#listingTitle").textContent = listing.title;

const endsAtContainer = document.querySelector("#endingTime")
liveEndsAt(listing.endsAt, endsAtContainer);

document.querySelector("#listingDescription").textContent = listing.description;

const tagsContainer = document.querySelector("#tagsContainer");

listing.tags.forEach(tag => {
  const tagText = document.createElement("p");
  tagText.textContent = "#" + tag;

  tagsContainer.append(tagText);
});

document.querySelector("#currentBid").textContent = listing.bids.length > 0 ? listing.bids[listing.bids.length - 1].amount + " credits": 0 + " credits";

const userImg = document.querySelector("#userImg");
userImg.href = `/pages/profile/?name=${listing.seller.name}`;

const userImage = document.querySelector("#userImage");
userImage.src = listing.seller.avatar.url;

userImg.append(userImage);

const bidHistory = document.querySelector("#bidHistory");

listing.bids.reverse()

listing.bids.forEach((bid, i) => {
  const bidDetails =  i % 2 === 0 ? createElement("div",  "bg-white xl:bg-grey grid grid-cols-2 py-3 rounded") : createElement("div", "grid grid-cols-2 py-3 rounded")

  const bidder = createElement("p", "pl-3", bid.bidder.name);

  const bidAmount = createElement("p", "text-right pr-3", bid.amount + " credits");

  bidDetails.append(bidder, bidAmount);
  bidHistory.append(bidDetails);
});

const bidCount = document.querySelector("#bidCount");
bidCount.textContent = " (" + listing.bids.length + ")";

if (listing.media.length > 1) mediaElements(listing.media)
else if (listing.media.length === 1) listingMediaContainer.append(listingMedia(listing.media[0]))
else listingMediaContainer.append(listingMedia())


placeBid(id);
init();