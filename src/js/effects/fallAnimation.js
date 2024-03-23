export default function fallAnimation() {
    window.onload = function() {
        const images = document.querySelectorAll('.figure img');

        images.forEach((image, index) => {
            const delay = (index + 1) * 200; // Adjust the delay as needed
            image.style.opacity = '0';
            image.style.animation = `fallAnimation 1s forwards ${delay}ms`;
        });
    };
}

