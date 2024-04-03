export default function headerWord() {
    const items = document.querySelector(".header-word");
    const word = [
        "furniture",
        "artwork",
        "watches",
        "toys",
        "plants",
        "books",
        "clothes",
        "shoes",
        "electronics"
    ];

    const colors = [
        "#F28482", // Red
        "#FCD34D", // Yellow
        "#84A59D", // Green
        "#82AFF2", // Blue
        "#F28482", // Red
        "#84A59D", // Green
        "#FCD34D", // Yellow
        "#82AFF2", // Blue
        "#84A59D", // Green
    ];
 
    let index = 0;

    function headerWord(index) {
        items.textContent = word[index];
        items.style.color = colors[index];
    }

    setInterval(() => {
        index++;

        if(index >= word.length) {
            index = 0;
        }
        headerWord(index);
    }, 1700);
}

