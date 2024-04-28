export default function liveEndsAt (date, ele) {
    const endDate = new Date(date);

    const updateTimer = setInterval(() => {
        const now = new Date()

        const timeLeft = endDate - now;

        if (timeLeft < 0) {
            ele.textContent = "Auction ended";
            clearInterval(updateTimer);
        }
    
        const days = (Math.floor(timeLeft / (1000 * 60 * 60 * 24)));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        ele.textContent = `${days} d ${hours} h ${minutes} min ${seconds} sec`

    }, 1000)

}