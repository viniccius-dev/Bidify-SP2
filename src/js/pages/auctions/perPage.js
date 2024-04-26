export default function perPage() {
    const perPageButtons = document.querySelectorAll(".per-page-btn");

    function updateListingsPerPage(perPage) {
        const allListings = document.querySelectorAll(".listing");
        allListings.forEach((listing, index) => {
            if (index < perPage) {
                listing.style.display = "block";
            } else {
                listing.style.display = "none";
            }
        });

        perPageButtons.forEach(btn => {
            btn.classList.remove("underline");
        });
        
        const activeButton = document.querySelector(`.per-page-btn[data-per-page="${perPage}"]`);
        if (activeButton) {
            activeButton.classList.add("underline");
        }
    }

    perPageButtons.forEach(button => {
        button.addEventListener("click", function () {
            const perPage = parseInt(this.dataset.perPage, 10);
            updateListingsPerPage(perPage);
        });
    });

    updateListingsPerPage(12);
}
