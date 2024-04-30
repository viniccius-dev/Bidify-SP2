import postBid from "../../api/auth/requests/postBid.js";

const bidInput = document.querySelector("#bidAmount");
const placeBidBtn = document.querySelector("#placeBid");

export default function placeBid(id) {

placeBidBtn.addEventListener('click', () => {

    if (bidInput.value === "") return;
  
    const body = {
    amount: Number(bidInput.value)
   } 
console.log(body.amount)


postBid(id, body)
   
    })     
}
