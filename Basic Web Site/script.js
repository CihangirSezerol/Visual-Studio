document.addEventListener('DOMContentLoaded', function() {
    const animationElement = document.querySelector('#animation p');

    // Create a simple animation that changes the text color
    let colorChange = 0;
    function animate() {
        colorChange += 1;
        if (colorChange > 360) colorChange = 0;
        animationElement.style.color = `hsl(${colorChange}, 100%, 50%)`;
        requestAnimationFrame(animate);
    }

    animate();
});
