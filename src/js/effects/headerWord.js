export default function headerWord() {
    const items = document.querySelector(".header-word");
    const word = [
        "furniture",
        "artwork",
        "watches",
        "vintage bags",
        "accessorizes",
        "toys",
        "plants"
    ];

    const colors = [
        "#AC86EF", // Purple
        "#EF86C9", // Yellow
        "#EFAC86", // Red
        "#158058", // Green (dark)
        "#EF86C9",  // Pink
        "#AC86EF", // Purple
        "#158058", // Green (dark)
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

