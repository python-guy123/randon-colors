function changeColor() {
    const colors = ["#FF5733", "#33FF57", "#3357FF", "#FFFF33", "#FF33FF", "#33FFFF"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}
