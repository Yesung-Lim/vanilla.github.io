const images = ["0.jpg", "1.jpg", "2.jpg", "3.png"];
const randomImg = images[Math.floor(Math.random() * images.length)];
const backgroundImg = document.createElement("img");

backgroundImg.classList.add("image");
backgroundImg.src = `IMG/${randomImg}`;
document.body.appendChild(backgroundImg);