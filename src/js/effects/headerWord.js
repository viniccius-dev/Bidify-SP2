export default function headerWord() {
    const items = document.querySelector(".header-word");
    const word = [
        "furniture",
        "artwork",
        "watches",
        "vintage bags",
        "accessorizes",
        "toys",
        "plants",
        "books",
        "clothes"
    ];

    const colors = [
        "#804ADE", // Purple
        "#EF86C9", // Yellow
        "#DE804A", // Orange
        "#4ADECA", // Blue
        "#DE4AA8",  // Pink
        "#AC86EF", // Purple
        "#4A5EDE", // Blue
        "#DE804A", // Orange
        "#EF86C9", // Yellow
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

